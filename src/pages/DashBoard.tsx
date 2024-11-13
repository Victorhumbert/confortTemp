import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useForm} from "react-hook-form";
import {climaAtual, enviarDados} from "@/api.tsx";
import {useLocation} from "react-router-dom";
import {Header} from "@/components/Header.tsx";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer.tsx";
import {Slider} from "@/components/ui/slider.tsx";
import {useState} from "react";



export const DashBoard = () => {
    const FormTemp = useForm()
    const location = useLocation();
    const [bairroName, setBairroName] = useState("");
    const [temperatura, setTemperatura] = useState(0);
    const tempKelvin = 273.15

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert("Geolocalização não é suportada pelo seu navegador.");
    }

    async function success(position: GeolocationPosition ) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Chamar a API de clima com as coordenadas obtidas
        const response = await climaAtual(latitude, longitude)
        setTemperatura(+(response.main.temp - tempKelvin).toFixed())
        setBairroName(response.name)
    }

    function error() {
        alert("Não foi possível obter a localização.");
    }

    async function onSubmit() {
        const { temperatura, umidade } = FormTemp.getValues()
        await enviarDados({temperatura, umidade})
    }

    return (
        <div className="w-screen h-screen">
            <Header />
            <h1 className='text-2xl'>Seja bem vindo a Home, {location.state}</h1>

            <div className='grid h-1/2 mt-auto p-2 justify-center content-center'>
                <div className='bg-blue-500 p-2 rounded-md'>
                    <span>{bairroName}</span>
                    <h1>{temperatura}°C</h1>
                </div>
            </div>

            <Drawer fadeFromIndex={0} snapPoints={[1]}>
                <DrawerTrigger className='p-2 bg-primary text-primary-foreground rounded-md hover:bg-gray-700 duration-150'>Mudar climatização</DrawerTrigger>
                <DrawerContent className='mb-10'>
                    <DrawerHeader>
                        <DrawerTitle>Qual temperatura e umidade desejas?</DrawerTitle>
                        <DrawerDescription>Selecione a temperatura ideal para o ambiente.</DrawerDescription>
                    </DrawerHeader>
                    <Form {...FormTemp}>
                        <form className="w-1/2 mx-auto grid gap-2" onSubmit={FormTemp.handleSubmit(onSubmit)}>
                            <FormField
                                control={FormTemp.control}
                                name="temperatura"
                                render={() => (
                                    <FormItem>
                                        <FormLabel>Temperatura</FormLabel>
                                        <div className='flex gap-1 items-center'>
                                            <FormControl>
                                                <Slider defaultValue={[22]} max={60} step={1}
                                                     //{...FormTemp.register('temperatura')}
                                                />
                                            </FormControl>
                                            <span className='p-1 px-3 bg-muted rounded-md'>{FormTemp.getValues('temperatura')
                                                ? FormTemp.getValues('temperatura') : 0}</span>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={FormTemp.control}
                                name="umidade"
                                render={() => (
                                    <FormItem>
                                        <FormLabel>Umidade</FormLabel>
                                        <div className='flex gap-1 items-center'>
                                            <FormControl>
                                                <Slider defaultValue={[22]} max={100} step={1}
                                                       //{...FormTemp.register('umidade')}
                                                />
                                            </FormControl>
                                            <span
                                                className='p-1 px-3 bg-muted rounded-md'>{FormTemp.getValues('umidade')
                                                ? FormTemp.getValues('umidade') : 0}</span>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" color="primary">Enviar dados</Button>
                        </form>
                    </Form>
                </DrawerContent>
            </Drawer>

        </div>

    )
}