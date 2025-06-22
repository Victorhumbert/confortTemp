import { RequestGetDispositivoData, RequestUpdateDispositivoData } from "@/api";
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
import { IResponseGetDispositivoData } from "@/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import z from "zod";

export const DispositivosPage = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [dispositivo, setDispositivo] = useState<IResponseGetDispositivoData>(
    location.state || {}
  );

  const limitsSchema = z.object({
    temperaturaMin: z.coerce.number(),
    temperaturaMax: z.coerce.number(),
    motionMax: z.coerce.number(),
  });

  useEffect(() => {
    async function fetchDispositivoData() {
      if (!user) {
        console.error("Usuário não autenticado");
        return;
      }
      try {
        const response = await RequestGetDispositivoData(
          user?.token,
          dispositivo.id
        );
        if (!response) {
          console.error("Nenhum dado encontrado para o dispositivo");
          return;
        }
        setDispositivo(response);
      } catch (error) {
        console.error("Erro ao buscar dados do dispositivo:", error);
      }
    }

    fetchDispositivoData();
  }, []);

  // Formulário para Configurar Limites
  const limitsForm = useForm({
    resolver: zodResolver(limitsSchema),
    defaultValues: {
      temperaturaMin: dispositivo.config[0]?.temperaturaMin || 0,
      temperaturaMax: dispositivo.config[0]?.temperaturaMax || 0,
      motionMax: dispositivo.config[0]?.motionMax || 0,
    },
  });

  const onSubmitLimits = async ({
    temperaturaMin,
    temperaturaMax,
    motionMax,
  }: z.infer<typeof limitsSchema>) => {
    if (!user) {
      toast.error("Usuário não autenticado.");
      return;
    }
    try {
      toast.loading("Atualizando limites do dispositivo...");
      const response = await RequestUpdateDispositivoData(
        user?.token,
        dispositivo.id,
        {
          temperaturaMin,
          temperaturaMax,
          motionMax,
        }
      );
      if (!response) {
        toast.error("Erro ao atualizar limites do dispositivo.");
        return;
      }
      toast.dismiss();
      toast.success("Limites atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar limites:", error);
      toast.error("Erro ao atualizar limites do dispositivo.");
      return;
    } finally {
      limitsForm.reset();
      toast.dismiss();
    }
  };

  return (
    <div className="w-screen h-screen">
      <Header />
      <h1 className="text-3xl text-center my-12">
        Configuracoes do disposivo: {dispositivo.nome}!
      </h1>

      {/* Formulário para Configurar Limites */}
      <Form {...limitsForm}>
        <form
          onSubmit={limitsForm.handleSubmit(onSubmitLimits)}
          className="bg-white p-6 rounded shadow-[0px_0px_10px_1px_#0001] mx-auto w-3/4"
        >
          {/* Limites de Temperatura */}
          <div className="mb-6">
            <h3 className="text-xl mb-2">Mudar Limite de Temperatura</h3>
            <div className="flex space-x-4">
              <FormField
                control={limitsForm.control}
                name="temperaturaMin"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel htmlFor="temperaturaMin">Min</FormLabel>
                    <FormControl>
                      <Input
                        id="temperaturaMin"
                        type="number"
                        placeholder="Mínimo"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={limitsForm.control}
                name="temperaturaMax"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel htmlFor="temperaturaMax">Max</FormLabel>
                    <FormControl>
                      <Input
                        id="temperaturaMax"
                        type="number"
                        placeholder="Máximo"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Limite do Sensor de Movimento */}
          <FormField
            control={limitsForm.control}
            name="motionMax"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel htmlFor="motionMax">
                  Limite Máximo do Sensor de Movimento (Metros)
                </FormLabel>
                <FormControl>
                  <Input
                    id="motionMax"
                    type="number"
                    placeholder="Máximo"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Salvar Limites</Button>
        </form>
      </Form>
    </div>
  );
};
