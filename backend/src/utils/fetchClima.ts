import fetch from "node-fetch";
const KEY = process.env.CLIMA_API_KEY;
export async function fetchClima(lat: string, lon: string) {
  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=${KEY}`
  );
  if (!resp.ok) throw new Error("Erro ao buscar clima");
  return resp.json();
}
