// src/pages/SettingsPage

import { Header } from "@/components/Header";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { LoadingComponent } from "@/components/LoadingComponent";
import { useEffect, useState } from "react";
import { RequestGetUserBydId, RequestUpdateUserData } from "@/api";
import { useAuth } from "@/contexts/AuthContext";

// Esquemas de validação usando Zod
const dataSchema = z.object({
  username: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("Digite um e-mail válido"),
});

const passwordSchema = z
  .object({
    newPassword: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => {
      return data.newPassword === data.confirmPassword;
    },
    {
      message: "As senhas não coincidem",
      params: {
        newPassword: "confirmPassword",
      },
      path: ["confirmPassword"],
    }
  );

export const SettingsPage = () => {
  const { user, setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchUserData() {
    if (!user) {
      toast.error("Usuário não autenticado");
      setIsLoading(false);
      return;
    }
    try {
      setIsLoading(true);
      await RequestGetUserBydId(Number(user?.id));
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
      toast.error("Erro ao carregar dados do usuário");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // Chama a função para buscar dados do usuário quando o componente é montado
    fetchUserData();
  }, []);

  // Formulário para Atualizar E-mail
  const dataForm = useForm({
    resolver: zodResolver(dataSchema),
    defaultValues: {
      username: user?.username ?? "",
      email: user?.email ?? "",
    },
  });

  // Formulário para Atualizar Senha
  const passwordForm = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmitData = async (data: z.infer<typeof dataSchema>) => {
    if (!user) {
      toast.error("Usuário não autenticado");
      return;
    }
    try {
      toast.loading("Atualizando dados...");
      const response = await RequestUpdateUserData(
        user?.token,
        Number(user?.id),
        data
      );
      if (!response) {
        toast.error("Erro ao atualizar dados");
        return;
      }
      setUser({ ...user, username: response.username, email: response.email });
      toast.dismiss();
      toast.success("Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
      toast.error("Erro ao atualizar dados");
      return;
    }
  };

  const onSubmitPassword = async (data: z.infer<typeof passwordSchema>) => {
    if (!user) {
      toast.error("Usuário não autenticado");
      return;
    }
    try {
      toast.loading("Atualizando senha...");
      const response = await RequestUpdateUserData(
        user?.token,
        Number(user?.id),
        { password: data.confirmPassword }
      );
      toast.dismiss();
      toast.success("Senha atualizada com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar senha:", error);
      toast.error("Erro ao atualizar senha");
      return;
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      {isLoading ? (
        <LoadingComponent text="Carregando informações do usuario..." />
      ) : (
        <>
          <h1 className="text-3xl text-center my-12">Configurações</h1>

          <div className="grid p-4 gap-4">
            {/* Formulário para Atualizar E-mail */}
            <Form {...dataForm}>
              <form
                onSubmit={dataForm.handleSubmit(onSubmitData)}
                className="bg-white p-6 rounded shadow mx-auto w-3/4"
              >
                <h2 className="text-2xl mb-4">Atualizar Dados</h2>
                <FormField
                  control={dataForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="username">Nome de usuário</FormLabel>
                      <FormControl>
                        <Input
                          id="username"
                          placeholder="Digite seu novo e-mail"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={dataForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">E-mail</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="Digite seu novo e-mail"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="mt-4">
                  Salvar E-mail
                </Button>
              </form>
            </Form>

            {/* Formulário para Atualizar Senha */}
            <Form {...passwordForm}>
              <form
                onSubmit={passwordForm.handleSubmit(onSubmitPassword)}
                className="bg-white p-6 rounded shadow mx-auto w-3/4"
              >
                <h2 className="text-2xl mb-4">Atualizar Senha</h2>
                <div className="flex gap-2">
                  <FormField
                    control={passwordForm.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel htmlFor="newPassword">Nova Senha</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="new-password"
                            id="newPassword"
                            type="password"
                            placeholder="Sua nova senha"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={passwordForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel htmlFor="confirmPassword">
                          Confirme a nova senha
                        </FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="new-password"
                            id="confirmPassword"
                            type="password"
                            placeholder="Sua nova senha"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="mt-4">
                  Salvar Senha
                </Button>
              </form>
            </Form>
          </div>
        </>
      )}
    </div>
  );
};
