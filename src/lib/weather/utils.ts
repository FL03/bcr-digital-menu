
export const v1 = "https://api.open-meteo.com/v1/";

export const endpoint = (path: string) => v1 + path;

// Helper function to form time ranges
export const timestep = (start: number, stop: number, step: number): number[] => {
    return Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
}

export async function fetchWeatherApi(url: string, params: Record<string, string>) {
    const res = await fetch(url + new URLSearchParams(params));
    return await res.json();
}