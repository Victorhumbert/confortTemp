import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form.tsx";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Lock, User} from "lucide-react";
import {useNavigate} from "react-router-dom";

export const LoginPage = () => {
    const navigation = useNavigate();
    const loginForm = useForm()

    async function handleLogin() {
        navigation(`/dashboard/`, {
            state: loginForm.getValues('usuario'),
        })
    }

    return (
        <>
            <div className='grid w-full h-screen justify-center content-center'>
                <div className='grid gap-3 p-10 border rounded-md'>
                    <h1 className='font-semibold text-3xl text-center'>ConfortTemp</h1>
                    <Form {...loginForm}>
                        <form onSubmit={loginForm.handleSubmit(handleLogin)} className='grid gap-3'>
                            <FormField
                                control={loginForm.control}
                                name="usuario"
                                render={() => (
                                    <FormItem>

                                        <FormLabel htmlFor='usuario'>Usuário</FormLabel>
                                        <div className='relative'>
                                            <User className='absolute z-10 right-full top-1/2 -translate-y-1/2'/>
                                            <FormControl>
                                                <Input
                                                    id='usuario'
                                                    placeholder='Seu usuário'
                                                    {...loginForm.register('usuario', {
                                                        required: true
                                                    })}
                                                />
                                            </FormControl>
                                        </div>
                                    </FormItem>
                                    )}
                                />
                            <FormField
                                control={loginForm.control}
                                name="senha"
                                render={() => (
                                    <FormItem>

                                        <FormLabel htmlFor='senha'>Senha</FormLabel>
                                        <div className='relative'>
                                            <Lock className='absolute z-10 right-full top-1/2 -translate-y-1/2'/>
                                            <FormControl>
                                                <Input
                                                    type='password'
                                                    id='senha'
                                                    placeholder='Sua senha'
                                                    {...loginForm.register('senha', {
                                                        required: true
                                                    })}
                                                />
                                            </FormControl>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" color="primary">Login</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </>
    )
}