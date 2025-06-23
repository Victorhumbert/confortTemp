import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { RequestRegisterUser } from "@/api";

// Esquemas de validação usando Zod
const registerUserSchema = z
  .object({
    username: z
      .string({ message: "O nome de usuário é obrigatório" })
      .min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: z
      .string({ message: "O email é obrigatório" })
      .email("Digite um e-mail válido"),
    password: z
      .string({ message: "A senha é obrigatória" })
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string({ message: "A senha é obrigatória" }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "As senhas não coincidem",
      params: {
        newPassword: "confirmPassword",
      },
      path: ["confirmPassword"],
    }
  );

export const RegisterUserPage = () => {
  const { user } = useAuth();
  const registerUserForm = useForm<z.infer<typeof registerUserSchema>>({
    resolver: zodResolver(registerUserSchema),
  });

  async function onSubmitUser(data: z.infer<typeof registerUserSchema>) {
    if (!user?.token) {
      console.error("Usuário não autenticado. Token ausente.");
      return;
    }
    try {
      const response = await RequestRegisterUser(user?.token, data);
      console.log("Usuário cadastrado com sucesso:", response);
    } catch (error) {
      console.error("Erro ao criar dispositivo:", error);
    }
  }

  return (
    <div className="w-screen h-screen">
      <Header />
      <h1 className="text-3xl text-center my-12">Cadastre um novo usuário!</h1>
      <Form {...registerUserForm}>
        <form
          onSubmit={registerUserForm.handleSubmit(onSubmitUser)}
          className="w-1/2 mx-auto"
        >
          <FormField
            name="username"
            control={registerUserForm.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome de usuário</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    autoComplete="off"
                    {...field}
                    placeholder="Digite o nome de usuário"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={registerUserForm.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    autoComplete="off"
                    {...field}
                    placeholder="Digite o email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-2">
            <FormField
              name="password"
              control={registerUserForm.control}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="new-password"
                      {...field}
                      placeholder="Digite a senha"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="confirmPassword"
              control={registerUserForm.control}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Confirme a senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="new-password"
                      {...field}
                      placeholder="Confirme a senha"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button className="w-full mt-2">Cadastrar</Button>
        </form>
      </Form>
    </div>
  );
};
