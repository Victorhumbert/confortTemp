export interface FormProps {
    temperatura: number;
    umidade: number;
}

export interface ClimaProps {
    name: string;
    main: {
        temp: number;
        humidity: number;

    }
}

export interface DispositivoProps {
    nome: string,
    temperatura: number,
    umidade: number,
    movimento: boolean
    ligado: boolean
}