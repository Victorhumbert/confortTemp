import {climaAtual, GetDispositivos} from "@/api.tsx";
import {useLocation} from "react-router-dom";
import {Header} from "@/components/Header.tsx";
import {useEffect, useState} from "react";
import {DispositivoProps} from "@/interfaces.tsx";
import {MudarTemperatura} from "@/components/MudarTemperatura.tsx";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card.tsx";



export const DashBoard = () => {

    const location = useLocation();
    const [bairroName, setBairroName] = useState("");
    const [temperatura, setTemperatura] = useState(0);
    const [dispositivos, setDispositivos] = useState<DispositivoProps[]>([]);
    const tempKelvin = 273.15



    useEffect(() => {
        async function reponseDispositivos() {
            const {dispositivos} = await GetDispositivos();
            if (!dispositivos) return
            setDispositivos(dispositivos);
            return dispositivos;
        }
        reponseDispositivos()
    }, [])

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            alert("Geolocalização não é suportada pelo seu navegador.");
        }
        async function success(position: GeolocationPosition) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Chamar a API de clima com as coordenadas obtidas
            const response = await climaAtual(latitude, longitude)
            if (!response) return;
            setTemperatura(+(response.main.temp - tempKelvin).toFixed())
            setBairroName(response.name)
        }

        function error() {
            alert("Não foi possível obter a localização.");
        }
    }, [])



    return (
        <div className="w-screen h-screen">
            <Header />
            <h1 className='text-3xl text-center my-12 text-yellow-800'>Seja bem vindo, {location.state || 'Usuário'}</h1>

            <div className='grid justify-center'>
                <div className='text-8xl text-center px-20 py-16 h-full grid rounded-full border'>
                    <span className='text-2xl text-orange-300'>{bairroName || 'Procurando...'}</span>
                    <h1 className='text-primary relative'>{temperatura} <span className='text-2xl absolute bottom-0'>°C</span></h1>
                </div>
            </div>
            <MudarTemperatura />
            <div className='grid justify-center m-4'>
                <h2 className='text-4xl text-primary opacity-30'>Dispositivos</h2>
                <div className='grid grid-cols-5 gap-2 px-4 text-center text-xs sm:text-lg'>
                    <p>Nome</p>
                    <p>Temperatura</p>
                    <p>Umidade</p>
                    <p>Luzes</p>
                    <p>Status</p>
                </div>
                <ul className='grid border rounded-md divide-y'>
                        {dispositivos.map((dispositivo) => (
                            <li key={dispositivo.nome} className='grid grid-cols-5 gap-2 p-4'>
                                <h1>{dispositivo.nome}</h1>
                                <p className='text-center'>{dispositivo.temperatura}°C</p>
                                <p className='text-center'>{dispositivo.umidade}%</p>
                                <HoverCard>
                                    <HoverCardTrigger
                                        className={`px-3 justify-self-center rounded-full ${dispositivo.movimento ? 'bg-green-600' : 'bg-red-600'}`} >
                                    </HoverCardTrigger>
                                    <HoverCardContent className='py-2 px-4 text-center w-max'>
                                        <span>{dispositivo.movimento ? 'Luzes acesas' : 'Luzes apagadas'}</span>
                                    </HoverCardContent>
                                </HoverCard>
                                <HoverCard>
                                    <HoverCardTrigger
                                        className={`px-3 justify-self-center rounded-full ${dispositivo.ligado ? 'bg-green-600' : 'bg-red-600'}`}>
                                    </HoverCardTrigger>
                                    <HoverCardContent className='py-2 px-4 text-center w-max'>
                                        <span>{dispositivo.ligado ? 'Conectado' : 'Desconectado'}</span>
                                    </HoverCardContent>
                                </HoverCard>

                            </li>
                        ))}
                </ul>
            </div>

        </div>

    )
}