import {
  ClimaProps,
  ClimatizacaoProps,
  IRequestCreateDispositivo,
  IRequestUpdateDispositivoBody,
  IRequestUpdateUserBody,
  IResponseGetDispositivoData,
  IUser,
  RegisterUserProps,
  ResponseLogin,
} from "@/interfaces";
import { toast } from "sonner";

// const URL_BASE = import.meta.env.VITE_URL_BASE || "http://localhost:3000"; // Local
const URL_BASE = import.meta.env.VITE_URL_BASE || "https://conforttemp-backend.onrender.com"; // Prod

export async function login(
  email: string,
  password: string
): Promise<ResponseLogin> {
  try {
    toast.loading("Logando...");
    const response = await fetch(`${URL_BASE}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    toast.dismiss();
    toast.success("Login realizado com sucesso!");
    return await response.json();
  } catch (error) {
    toast.dismiss();
    toast.error(`Erro ao fazer login: ${error}`);
    console.error(error);
    throw error; // Re-throw the error to handle it in the calling function
  } finally {
    toast.dismiss();
  }
}

export async function RequestRegisterUser(
  token: string,
  data: RegisterUserProps
): Promise<void> {
  try {
    toast.loading("Cadastrando usuário...");
    const response = await fetch(`${URL_BASE}/api/cadastrar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    toast.dismiss();
    toast.success(`Usuário ${data.username.split(' ')[0]} cadastrado com sucesso!`);
    return await response.json();
  } catch (error) {
    toast.dismiss();
    toast.error(`Erro ao cadastrar usuário: ${error}`);
    console.error(error);
    throw error; // Re-throw the error to handle it in the calling function
  } finally {
    toast.dismiss();
  }
}

export async function RequestClimatizador(
  dados: ClimatizacaoProps,
  id: number
): Promise<void> {
  try {
    toast.loading("Enviando...");
    const response = await fetch(`${URL_BASE}/api/users/climatizacao/${id}`, {
      method: "PUT",
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

export async function RequestGetUserBydId(id: number): Promise<IUser | void> {
  try {
    const response = await fetch(`${URL_BASE}/api/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
  }
}

export async function climaAtual(
  lat: number,
  long: number
): Promise<ClimaProps | undefined> {
  try {
    toast.loading("Buscando dados da temperatura...");
    const response = await fetch(`${URL_BASE}/api/clima/${lat}/${long}`);
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

export async function GetDispositivos(id: number): Promise<any> {
  try {
    const response = await fetch(`${URL_BASE}/api/user/${id}/dispositivos`);
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}

export async function RequestCreateDispositivo(
  data: IRequestCreateDispositivo
): Promise<void> {
  try {
    const response = await fetch(`${URL_BASE}/api/dispositivos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}

export async function RequestDeleteDispositivo(
  idDispositivo: number
): Promise<void> {
  try {
    const response = await fetch(
      `${URL_BASE}/api/dispositivos/${idDispositivo}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}

export async function RequestGetDispositivoData(
  token: string,
  idDispositivo: number
): Promise<IResponseGetDispositivoData | void> {
  try {
    const response = await fetch(
      `${URL_BASE}/api/dispositivos/${idDispositivo}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
  }
}

export async function RequestUpdateDispositivoData(
  token: string,
  idDispositivo: number,
  data: IRequestUpdateDispositivoBody
): Promise<IResponseGetDispositivoData | void> {
  try {
    const response = await fetch(
      `${URL_BASE}/api/dispositivos/${idDispositivo}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error(`Erro atualizar dados: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
  }
}

export async function RequestDisableClimatizador(
  token: string,
  idUser: number
): Promise<void> {
  try {
    const response = await fetch(
      `${URL_BASE}/api/users/climatizacao/${idUser}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Erro ao desativar climatizador: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
  }
}

export async function RequestUpdateUserData(
  token: string,
  id: number,
  data: IRequestUpdateUserBody
): Promise<IUser | void> {
  try {
    toast.loading("Enviando...");
    const response = await fetch(`${URL_BASE}/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
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
