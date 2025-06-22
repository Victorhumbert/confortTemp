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
  const dispositivoId =
    Number(location.state.id) ?? Number(location.pathname.split("/").pop());
  const [dispositivo, setDispositivo] = useState<IResponseGetDispositivoData>();
  const [isLoading, setIsLoading] = useState(true);

  const limitsSchema = z.object({
    temperaturaMin: z.coerce
      .number()
      .min(18, { message: "A temperatura deve ser entre 18 e 30" })
      .max(30, { message: "A temperatura deve ser entre 18 e 30" }),
    temperaturaMax: z.coerce
      .number()
      .min(18, { message: "A temperatura deve ser entre 18 e 30" })
      .max(30, { message: "A temperatura deve ser entre 18 e 30" }),
    motionMax: z.coerce
      .number()
      .min(0, { message: "A distância deve ser entre 0 e 10 metros" })
      .max(10, { message: "A distância deve ser entre 0 e 10 metros" }),
  });

  const alterarInfoSchema = z.object({
    nome: z.string().min(1, { message: "O nome é obrigatório" }),
  });

  async function fetchDispositivoData() {
    if (!user) {
      console.error("Usuário não autenticado");
      return;
    }
    try {
      const response = await RequestGetDispositivoData(
        user?.token,
        dispositivoId
      );
      if (!response) {
        console.error("Nenhum dado encontrado para o dispositivo");
        return;
      }
      setDispositivo(response);
    } catch (error) {
      console.error("Erro ao buscar dados do dispositivo:", error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchDispositivoData();
  }, []);

  useEffect(() => {
    console.log("Dispositivo atualizado:", dispositivo);
    if (dispositivo) {
      limitsForm.setValue(
        "temperaturaMin",
        dispositivo.config[0]?.temperaturaMin ?? 0
      );
      limitsForm.setValue(
        "temperaturaMax",
        dispositivo.config[0]?.temperaturaMax ?? 0
      );
      limitsForm.setValue("motionMax", dispositivo.config[0]?.motionMax ?? 0);
    }
  }, [dispositivo]);

  // Formulário para Configurar Limites
  const limitsForm = useForm({
    resolver: zodResolver(limitsSchema),
    defaultValues: {
      temperaturaMin: dispositivo?.config[0]?.temperaturaMin ?? 0,
      temperaturaMax: dispositivo?.config[0]?.temperaturaMax ?? 0,
      motionMax: dispositivo?.config[0]?.motionMax ?? 0,
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
        dispositivoId,
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
      fetchDispositivoData();
      limitsForm.reset();
      toast.dismiss();
    }
  };

  // Formulário para alterar informações do dispositivo
  const updateDeviceForm = useForm({
    resolver: zodResolver(alterarInfoSchema),
    defaultValues: {
      nome: dispositivo?.nome || "",
    },
  });

  const onSubmitUpdateDevice = async ({
    nome,
  }: z.infer<typeof alterarInfoSchema>) => {
    if (!user) {
      toast.error("Usuário não autenticado.");
      return;
    }
    try {
      toast.loading("Atualizando informações do dispositivo...");
      const response = await RequestUpdateDispositivoData(
        user?.token,
        dispositivoId,
        { nome }
      );
      if (!response) {
        toast.error("Erro ao atualizar informações do dispositivo.");
        return;
      }
      toast.dismiss();
      toast.success("Informações atualizadas com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar informações:", error);
      toast.error("Erro ao atualizar informações do dispositivo.");
    } finally {
      fetchDispositivoData();
      updateDeviceForm.reset();
      toast.dismiss();
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      {isLoading ? (
        <div className="flex m-auto p-4 rounded-lg shadow-[0px_0px_8px_1px] shadow-primary/30">
          <h1 className="text-2xl text-center my-12">
            Carregando configurações do dispositivo...
          </h1>
        </div>
      ) : (
        <>
          <h1 className="text-3xl text-center my-12">
            Configurações do disposivo: {dispositivo?.nome}!
          </h1>

          <div className="grid gap-4">
            {/* Formulário para alterar informações */}
            <Form {...updateDeviceForm}>
              <form
                onSubmit={updateDeviceForm.handleSubmit(onSubmitUpdateDevice)}
                className="bg-white p-6 rounded shadow-[0px_0px_10px_1px_#0001] mx-auto w-3/4"
              >
                {/* Limites de Temperatura */}
                <div className="mb-6">
                  <h3 className="text-xl mb-2">Mudar informações</h3>
                  <div className="flex space-x-4">
                    <FormField
                      control={updateDeviceForm.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel htmlFor="nome">
                            Alterar nome
                          </FormLabel>
                          <FormControl>
                            <Input
                              id="nome"
                              placeholder={dispositivo?.nome || "Nome do dispositivo"}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <Button type="submit">Alterar dados</Button>
              </form>
            </Form>

            {/* Formulário para Configurar Limites */}
            <Form {...limitsForm}>
              <form
                onSubmit={limitsForm.handleSubmit(onSubmitLimits)}
                className="bg-white p-6 rounded shadow-[0px_0px_10px_1px_#0001] mx-auto w-3/4"
              >
                {/* Limites de Temperatura */}
                <div className="mb-6">
                  <h3 className="text-xl mb-2">Mudar limites</h3>
                  <div className="flex space-x-4">
                    <FormField
                      control={limitsForm.control}
                      name="temperaturaMin"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel htmlFor="temperaturaMin">
                            Min. temperatura
                          </FormLabel>
                          <FormControl>
                            <Input
                              id="temperaturaMin"
                              type="number"
                              placeholder="Mínimo"
                              min={18}
                              max={30}
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
                          <FormLabel htmlFor="temperaturaMax">
                            Max. temperatura
                          </FormLabel>
                          <FormControl>
                            <Input
                              id="temperaturaMax"
                              type="number"
                              placeholder="Máximo"
                              min={18}
                              max={30}
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
                          min={0}
                          max={10}
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
        </>
      )}
    </div>
  );
};
