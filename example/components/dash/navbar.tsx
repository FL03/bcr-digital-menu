/*
    Appellation: navbar <module>
    Contrib: FL03 <jo3mccain@icloud.com>
*/
import { Atom, } from 'lucide-react';
import { DigitalClock, WeatherBadge} from '@/src/components/misc';


export default function Navbar({ title }: { title?: string }) {

    return (
        <header className="bg-primary text-primary-foreground flex items-center justify-between p-2 pr-16 w-full">
            {/* Branding */}
            <div className="flex items-center space-x-2">
                <Atom className="h-6 w-6" />
                <span className="font-bold text-lg">{title}</span>
            </div>
            {/* Right-Hand Side */}
            <div className="flex items-center space-x-4">
                <WeatherBadge />
                <DigitalClock />
            </div>
        </header>
    )
}

