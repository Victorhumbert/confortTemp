import {FormProps} from "@/interfaces.tsx";


const URL_BASE = "http://192.168.3.47:3000"
const CLIMA_API_KEY = import.meta.env.VITE_CLIMA_API_KEY;

export async function enviarDados(dados: FormProps): Promise<void> {
    const response = await fetch(`${URL_BASE}/api/dados`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    })
    console.log(JSON.stringify(dados))
    const data = await response.json()
    return data
}

export async function teste() {
    const response =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${CLIMA_API_KEY}`)
    const data = await response.json()
    console.log(data)
}

teste()