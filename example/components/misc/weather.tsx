/*
    Appellation: weather <module>
    Contrib: FL03 <jo3mccain@icloud.com>
*/
import { forecast, WeatherResponse } from '@/src/lib/weather';
import { Sun, Cloud } from 'lucide-react';
import { useEffect,useState } from 'react';

export default function WeatherBadge() {
    const [weather, setWeather] = useState<WeatherResponse | null | undefined>(undefined);
    useEffect(() => {
        async function fetchData() {
            setWeather(await forecast());
        }
        fetchData();
    });

    return (
        <>
            <div className="flex items-center space-x-2">
                {weather?.conditions === "Sunny" ? <Sun className="h-5 w-5" /> : <Cloud className="h-5 w-5" />}
                <span>
                    {weather?.current?.temp(2)}°F
                </span>
            </div>
        </>
    )
}



