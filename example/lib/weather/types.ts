/*
    Appellation: types <module>
    Contrib: FL03 <jo3mccain@icloud.com>
*/
export enum WeatherConditions {
    Clear = "Clear",
    Cloudy = "Cloudy",
    Rainy = "Rainy",
    Snowy = "Snowy",
    Sunny = "Sunny",
    Windy = "Windy",
}

export class WeatherResponse {
    conditions?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    timezone?: string | null;
    timezoneAbbreviation?: string | null;
    current?: WeatherReport | null;
    hourly?: null | WeatherReport | WeatherReport[];
}

export class WeatherReport {
    apparentTemperature?: number;
    isDay?: number;
    precipitation?: number;
    pressure_msl?: number;
    rain?: number;
    showers?: number;
    snowfall?: number;
    temperature2m?: number | number[] | Float32Array;
    time?: Date | Date[];

    constructor({
        apparentTemperature,
        isDay,
        precipitation,
        pressure_msl,
        rain,
        showers,
        snowfall,
        temperature2m,
        time,
    }: {
        apparentTemperature?: number;
        isDay?: number;
        precipitation?: number;
        pressure_msl?: number;
        rain?: number;
        showers?: number;
        snowfall?: number;
        temperature2m?: number | number[] | Float32Array;
        time?: Date | Date[];
    }) {
        this.apparentTemperature = apparentTemperature;
        this.isDay = isDay;
        this.precipitation = precipitation;
        this.pressure_msl = pressure_msl;
        this.rain = rain;
        this.showers = showers;
        this.snowfall = snowfall;
        this.temperature2m = temperature2m;
        this.time = time;
    }

    temp(rounded?: number) {
        if (!this.temperature2m) {
            return undefined;
        } else if (typeof this.temperature2m === "number") {
            return this.temperature2m.toFixed(rounded);
        } else {
            return this.temperature2m.map((t) => Number(t.toFixed(rounded)));
        }
    }
}

export class WeatherAPIResponse {
    
}