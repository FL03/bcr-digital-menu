/*
    Appellation: forecast <module>
    Contrib: FL03 <jo3mccain@icloud.com>
*/
import { WeatherReport, WeatherResponse } from './types';
import { endpoint, timestep } from './utils';
import { fetchWeatherApi, } from 'openmeteo';

const default_weather: WeatherResponse = {
    conditions: "Sunny",
    latitude: 29.583,
    longitude: -95.7579,
    timezone: "America/Chicago",
    timezoneAbbreviation: "CST",
    current: new WeatherReport({
        apparentTemperature: 70,
        isDay: 1,
        precipitation: 0,
        rain: 0,
        temperature2m: 70,
        time: new Date(),
    }),
    hourly: new WeatherReport({
        apparentTemperature: 70,
        precipitation: 0,
        rain: 0,
        temperature2m: 70,
        time: [new Date(), new Date()],
    }),
};

export async function forecast() {
    const forecastParams = {
        "current": ["apparent_temperature", "temperature_2m", "is_day", "precipitation", "rain"],
        "forecast_hours": 1,
        "hourly": ["apparent_temperature", "temperature_2m", "precipitation", "rain"],
        "latitude": 29.583,
        "longitude": -95.7579,
        "precipitation_unit": "inch",
        "temperature_unit": "fahrenheit",
        "wind_speed_unit": "mph",
    };
    if (process.env.NODE_ENV === "development") {
        return default_weather;
    } else {
        const res = await fetchWeatherApi(endpoint("forecast"), forecastParams).then(
            (res) => res?[0] : default_weather
        );
        return handler(res);
    }
}

function handler(data?: any): WeatherResponse | null {
    if (!data) {
        return null;
    }
    // Attributes for timezone and location
    const utcOffsetSeconds = data.utcOffsetSeconds();
    // get the current weather data
    const current = data.current()!;
    // get the hourly weather data
    const hourly = data.hourly()!;
    // Note: The order of weather variables in the URL query and the indices below need to match!
    return {
        conditions: "Sunny",
        latitude: data.latitude(),
        longitude: data.longitude(),
        timezone: data.timezone(),
        timezoneAbbreviation: data.timezoneAbbreviation(),
        current: new WeatherReport({
            apparentTemperature: current.variables(1)!.value(),
            isDay: current.variables(2)?.value(),
            precipitation: current.variables(3)?.value(),
            rain: current.variables(4)?.value(),
            temperature2m: current.variables(0)?.value(),
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        }),
        hourly: new WeatherReport({
            apparentTemperature: hourly.variables(1)?.value(),
            precipitation: hourly.variables(3)?.value(),
            rain: hourly.variables(4)?.value(),
            temperature2m: hourly.variables(0)?.value(),
            time: timestep(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
                (t) => new Date((t + utcOffsetSeconds) * 1000)
            ),
        }),

    };
}
