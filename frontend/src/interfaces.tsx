export interface LoginProps {
  email: string;
  password: string;
}

export interface RegisterUserProps {
  username: string;
  email: string;
  password: string;
}
export interface IUser {
  id: number;
  username: string;
  email: string;
}

export interface ResponseLogin {
  message: string;
  token: string;
  status: number;
  user: {
    username: string;
    id: number;
    nome: string;
    email: string;
    senha: string;
  };
}

export interface ClimatizacaoProps {
  climatizacao: number;
}

export interface ClimaProps {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
}

export interface DispositivoProps {
  id: number;
  nome: string;
  local: string;
  config: {
    id: number;
    dispositivoId: number;
    distanciaSensor: 15;
    createdAt: string;
    updatedAt: string;
    motionMax: number;
    temperaturaMax: number;
    temperaturaMin: number;
    temperatura: number;
    umidade: number;
    sensor: boolean;
    ligado: boolean;
  }[];
  historico: {
    id: number;
    dispositivoId: number;
  };
}

export interface IRequestCreateDispositivo {
  userId: number;
  nome: string;
  local: string;
}

export interface IResponseGetDispositivoData extends DispositivoProps {}

export interface IRequestUpdateDispositivoBody {
  nome?: string;
  temperaturaMin?: number;
  temperaturaMax?: number;
  motionMax?: number;
}

export interface IRequestUpdateUserBody {
  username?: string;
  email?: string;
  password?: string;
}