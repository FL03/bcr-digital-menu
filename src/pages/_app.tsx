import type { Metadata } from "next";
import type { AppProps } from 'next/app';
import localFont from "next/font/local";
import "@/assets/globals.css";


export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
                <Component {...pageProps} />
            </div>

        </>
    )
}

const geistSans = localFont({
    src: "../assets/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../assets/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    authors: [
        {
            name: "Joe McCain III",
            url: "https://github.com/FL03",
        }
    ],
    description: "A modern desktop experience for the web",
    title: "Proton",

};

export const placeholders = {
    avatar: "https://github.com/fl03.png",
    data: {
        user: {
            avatar: "https://github.com/fl03.png",
            name: "Joe McCain III",
            username: "@pzzld.eth",
        },
        weather: {
            temp: "22°C",
            condition: "Partly Cloudy"
        }
    }
};