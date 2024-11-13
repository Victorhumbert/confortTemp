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