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
  const { signin } = useAuth();

  const handleLogin: SubmitHandler<LoginProps> = async (data) => {
    try {
      await signin(data.email, data.password);
      navigation("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error("Usuário ou senha inválidos!");
    }
  };

  return (
    <div className="sm:flex justify-between max-w-full">
      <div className="bg-background/80 sm:bg-background border-r max-w-full absolute z-10 bottom-1/4 left-5 right-5 rounded-md sm:translate-x-0 sm:translate-y-0 sm:static sm:rounded-none sm:h-screen p-12 sm:p-24 content-center">
        <Logo className="mx-auto w-32 h-32 sm:w-64 sm:h-64 max-w-max" />
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
              name="password"
              control={loginForm.control}
              render={() => (
                <FormItem>
                  <FormLabel htmlFor="password">Senha</FormLabel>
                  <div className="relative">
                    <Lock className="text-primary absolute z-10 right-full top-1/2 -translate-y-1/2" />
                    <FormControl>
                      <Input
                        type="password"
                        id="password"
                        placeholder="Sua senha"
                        {...loginForm.register("password", {
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
        <img
          src={Banner}
          alt="banner"
          className="object-cover absolute top-0 sm:static h-full"
        />
      </div>
    </div>
  );
};
