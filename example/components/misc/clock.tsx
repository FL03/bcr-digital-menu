/*
    Appellation: clock <module>
    Contrib: FL03 <jo3mccain@icloud.com>
*/
import { useEffect, useState } from 'react';

export default function DigitalClock() {
    // initialize time state
    const [time, setTime] = useState(new Date());
    // update time every second
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, []);
    // return the time in a digital clock format
    return (
        <>
            <div className="text-sm sm:text-base font-medium">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
        </>
    )
}