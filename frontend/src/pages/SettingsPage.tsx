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

// Esquemas de validação usando Zod
const emailSchema = z.object({
  email: z.string().email("Digite um e-mail válido"),
});

const passwordSchema = z.object({
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export const SettingsPage = () => {

  // Formulário para Atualizar E-mail
  const emailForm = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  // Formulário para Atualizar Senha
  const passwordForm = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
    },
  });

  // Manipuladores de Submissão
  const onSubmitEmail = (data: z.infer<typeof emailSchema>) => {
    // Simular atualização de e-mail
    console.log("Atualizar E-mail para:", data.email);
    toast.success("E-mail atualizado com sucesso!");
  };

  const onSubmitPassword = (data: z.infer<typeof passwordSchema>) => {
    // Simular atualização de senha
    console.log("Atualizar Senha para:", data.password);
    toast.success("Senha atualizada com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <h1 className="text-3xl text-center my-6 text-yellow-800">
        Configurações
      </h1>

      <div className="grid mx-auto p-4 gap-4">
        {/* Formulário para Atualizar E-mail */}
        <Form {...emailForm}>
          <form
            onSubmit={emailForm.handleSubmit(onSubmitEmail)}
            className="bg-white p-6 rounded shadow"
          >
            <h2 className="text-2xl mb-4">Atualizar E-mail</h2>
            <FormField
              control={emailForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Novo E-mail</FormLabel>
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
            className="bg-white p-6 rounded shadow"
          >
            <h2 className="text-2xl mb-4">Atualizar Senha</h2>
            <FormField
              control={passwordForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password">Nova Senha</FormLabel>
                  <FormControl>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Digite sua nova senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4">
              Salvar Senha
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
