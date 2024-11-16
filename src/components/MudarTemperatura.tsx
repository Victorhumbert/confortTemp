import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form.tsx";
import {useForm} from "react-hook-form";
import {enviarDados} from "@/api.tsx";
import {Slider} from "@/components/ui/slider.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useMediaQuery} from "react-responsive";
import {
    Dialog,
    DialogContent, DialogDescription, DialogHeader, DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {toast} from "sonner";


export const MudarTemperatura = () => {

    const FormTemp = useForm()
    const isDesktop = useMediaQuery({query: "(min-width: 624px)"})

    async function onSubmit() {
        const {temperatura, umidade} = FormTemp.getValues()
        try {
            toast.loading('Enviando dados...')
            const response = await enviarDados({temperatura, umidade})
            console.log(response)
            toast.dismiss()
            toast.success('Dados enviados!')
        } catch (error) {
            toast.dismiss()
            toast.error(`Erro ao enviar dados: ${error}`)
            console.error(error)
        } finally {
            toast.dismiss()
        }
    }

    if (isDesktop) {
        return (
            <Dialog onOpenChange={() => false}>
                <DialogTrigger
                    className='p-2 bg-primary text-primary-foreground rounded-md hover:bg-gray-700 duration-150 mx-auto my-2 grid'>
                    Ativar climatizador
                </DialogTrigger>
                <DialogContent aria-describedby={undefined} className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Qual temperatura e umidade desejas?</DialogTitle>
                        <DialogDescription>Selecione a temperatura ideal para o ambiente.</DialogDescription>
                    </DialogHeader>
                    <Form {...FormTemp}>
                        <form className="w-1/2 mx-auto grid gap-2" onSubmit={FormTemp.handleSubmit(onSubmit)}>
                            <FormField
                                control={FormTemp.control}
                                name="temperatura"
                                render={() => (
                                    <FormItem>
                                        <FormLabel>Temperatura</FormLabel>
                                        <div className='flex gap-1 items-center'>
                                            <FormControl {...FormTemp.register('temperatura')}>
                                                <Slider defaultValue={[22]} max={31} step={1}/>
                                            </FormControl>
                                            <span
                                                className='p-1 px-3 bg-muted rounded-md'>{FormTemp.getValues('temperatura')
                                                ? FormTemp.getValues('temperatura') : 22}</span>
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
                                            <FormControl {...FormTemp.register('umidade')}>
                                                <Slider defaultValue={[50]} max={100} step={1}/>
                                            </FormControl>
                                            <span
                                                className='p-1 px-3 bg-muted rounded-md'>{FormTemp.getValues('umidade')
                                                ? FormTemp.getValues('umidade') : 50}</span>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" color="primary">Enviar dados</Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        )
    } else {
        return (
            <Drawer fadeFromIndex={0} snapPoints={[1]}>
                <DrawerTrigger className='p-2 bg-primary text-primary-foreground rounded-md hover:bg-gray-700 duration-150 mx-auto my-2 grid'>Ativar
                    climatizador</DrawerTrigger>
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
                                            <FormControl {...FormTemp.register('temperatura')}>
                                                <Slider defaultValue={[22]} max={31} step={1}/>
                                            </FormControl>
                                            <span
                                                className='p-1 px-3 bg-muted rounded-md'>{FormTemp.getValues('temperatura')
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
                                            <FormControl {...FormTemp.register('umidade')}>
                                                <Slider defaultValue={[50]} max={100} step={1}/>
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
        )
    }
}