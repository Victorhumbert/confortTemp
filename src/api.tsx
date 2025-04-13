import { ClimaProps, FormProps, ResponseLogin } from "@/interfaces.tsx";
import { toast } from "sonner";

const URL_BASE = "http://localhost:3000";
// const CLIMA_API_KEY = import.meta.env.VITE_CLIMA_API_KEY;
const CLIMA_API_KEY = "496aebbe7bf9a2ddfc3b6d113ffa318e";

export async function login(email: string, senha: string): Promise<ResponseLogin> {
  try {
    toast.loading("Logando...");
    const response = await fetch(`${URL_BASE}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    });
    toast.dismiss();
    toast.success("Login realizado com sucesso!");
    return await response.json();
  } finally {
    toast.dismiss();
  }
}

export async function enviarDados(dados: FormProps): Promise<void> {
  try {
    toast.loading("Enviando...");
    const response = await fetch(`${URL_BASE}/api/dados`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });
    toast.dismiss();
    toast.success("Dados enviados!");
    return await response.json();
  } catch (error) {
    toast.dismiss();
    toast.error(`Erro ao enviar dados:${error}`);
    console.error(error);
  } finally {
    toast.dismiss();
  }
}

export async function climaAtual(
  lat: number,
  long: number
): Promise<ClimaProps | undefined> {
  try {
    toast.loading("Buscando dados da temperatura...");
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&appid=${CLIMA_API_KEY}`
    );
    toast.dismiss();
    toast.success("Temperatura capturada!");
    return await response.json();
  } catch (error) {
    toast.dismiss();
    toast.error(`Erro capturar temperatura: ${error}`);
    console.error(error);
  } finally {
    toast.dismiss();
  }
}

export async function GetDispositivos() {
  try {
    const response = await fetch("/hardware.json");
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}
