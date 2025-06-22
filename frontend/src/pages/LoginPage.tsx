import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Banner from "@/assets/banner2.webp";
import Logo from "@/assets/logo_ComFortTemp.svg?react";
import { toast } from "sonner";
import { LoginProps, ResponseLogin } from "@/interfaces";
import { useAuth } from "@/contexts/AuthContext";

export const LoginPage = () => {
  const navigation = useNavigate();
  const loginForm = useForm<LoginProps>();
  const {signin} = useAuth();

    const handleLogin: SubmitHandler<LoginProps> = async (data) => {
    try {
      await signin(data.email, data.senha);
      navigation('/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      toast.error('Usuário ou senha inválidos!');
    }
  };

  return (
    <div className="flex justify-between">
      <div className="bg-background border-r h-screen justify-self-start p-24 content-center">
        <Logo className="mx-auto w-64 h-64" />
        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(handleLogin)}
            className="grid gap-3"
          >
            <FormField
              name="email"
              control={loginForm.control}
              render={() => (
                <FormItem>
                  <FormLabel htmlFor="usuario">Usuário</FormLabel>
                  <div className="relative">
                    <User className="text-primary absolute z-10 right-full top-1/2 -translate-y-1/2" />
                    <FormControl>
                      <Input
                        id="usuario"
                        placeholder="Seu usuário"
                        {...loginForm.register("email", {
                          required: true,
                        })}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name="senha"
              control={loginForm.control}
              render={() => (
                <FormItem>
                  <FormLabel htmlFor="senha">Senha</FormLabel>
                  <div className="relative">
                    <Lock className="text-primary absolute z-10 right-full top-1/2 -translate-y-1/2" />
                    <FormControl>
                      <Input
                        type="password"
                        id="senha"
                        placeholder="Sua senha"
                        {...loginForm.register("senha", {
                          required: true,
                        })}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <div className="grid duration-150 hover:scale-105">
              <Button type="submit">Login</Button>
            </div>
          </form>
        </Form>
      </div>
      <div>
        <img src={Banner} alt="banner" className="object-cover h-full" />
      </div>
    </div>
  );
};
