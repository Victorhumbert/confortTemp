import {ClimaProps, FormProps} from "@/interfaces.tsx";


const URL_BASE = "https://backend-i76nx1o7h-victorhumberts-projects.vercel.app/"
const CLIMA_API_KEY = import.meta.env.VITE_CLIMA_API_KEY;

export async function enviarDados(dados: FormProps): Promise<void> {
    const response = await fetch(`${URL_BASE}/api/dados`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    })
    return await response.json()
}

export async function climaAtual(lat: number, long: number): Promise<ClimaProps> {
    const response =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&appid=${CLIMA_API_KEY}`)
    return await response.json()
}
