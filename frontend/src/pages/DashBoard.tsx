import { climaAtual, GetDispositivos, RequestCreateDispositivo } from "@/api";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import {
  DispositivoProps,
  IRequestCreateDispositivo,
  IUser,
} from "@/interfaces";
import { MudarTemperatura } from "@/components/MudarTemperatura";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link, Navigate } from "react-router-dom";
import { RefreshCcw, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import BluetoothScanner from "@/components/BluetoothScanner";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { toast } from "sonner";

export const DashBoard = () => {
  const [bairroName, setBairroName] = useState("");
  const userData = localStorage.getItem("user");
  if (!userData) {
    console.error("Erro ao obter os dados do usuário.");
    return null;
  }
  const userFormatado = JSON.parse(userData);
  const idUser = userFormatado.id;
  const username = userFormatado.username;
  const [temperatura, setTemperatura] = useState(0);
  const [dispositivos, setDispositivos] = useState<DispositivoProps[]>([]);
  const [isModalCreateDipositivoOpen, setIsModalCreateDipositivoOpen] =
    useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const tempKelvin = 273.15;
  const createDispositivoForm = useForm<DispositivoProps>();

  async function requestDispositivos(refresh: boolean = false) {
    try {
      toast.loading(
        refresh ? "Recarregar dados..." : "Buscando dispositivos..."
      );
      const dispositivos = await GetDispositivos(Number(idUser));
      if (!dispositivos) return;
      setDispositivos(dispositivos);
      toast.dismiss();
      toast.success(
        refresh ? "Dados recarregados" : "Dispositivos encontrados!"
      );
      return dispositivos;
    } catch (error) {
      toast.dismiss();
      toast.error(
        refresh ? "Erro ao recarregar dados" : "Erro ao buscar dispositivos."
      );
      console.error("Erro ao buscar dispositivos:", error);
    }
  }
  useEffect(() => {
    requestDispositivos();
  }, []);

  useEffect(() => {
    setInterval(() => {
      console.log("Recarregando dispositivos...");
      requestDispositivos(true);
    }, 20000);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolocalização não é suportada pelo seu navegador.");
    }
    async function success(position: GeolocationPosition) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Chamar a API de clima com as coordenadas obtidas
      const response = await climaAtual(latitude, longitude);

      if (!response?.main) return;
      setTemperatura(+(response.main.temp - tempKelvin).toFixed());
      setBairroName(response.name);
    }

    function error() {
      alert("Não foi possível obter a localização.");
    }
  }, []);

  async function createDispositivo(data: DispositivoProps) {
    try {
      setIsSubmiting(true);
      await RequestCreateDispositivo({ nome: data.nome, userId: idUser });
      requestDispositivos();
    } catch (error) {
      console.error("Erro ao criar dispositivo:", error);
    } finally {
      setIsSubmiting(false);
      setIsModalCreateDipositivoOpen(false);
    }
  }

  return (
    <div className="w-screen h-screen">
      <Header />
      <h1 className="text-3xl text-center my-12 text-yellow-800">
        Seja bem vindo, {username}!
      </h1>

      <div className="grid justify-center">
        <div className="text-8xl text-center h-64 w-64 grid justify-center content-center rounded-full border">
          <span className="text-2xl text-orange-300">
            {bairroName || "Procurando..."}
          </span>
          <h1 className="text-primary relative">
            {temperatura} <span className="text-2xl absolute bottom-0">°C</span>
          </h1>
        </div>
      </div>
      <MudarTemperatura />

      <div className="grid sm:mx-auto sm:w-3/4">
        <div className="grid justify-self-end rounded-full p-2 hover:bg-slate-200 cursor-pointer">
          <HoverCard>
            <HoverCardTrigger asChild>
              <RefreshCcw
                onClick={() => requestDispositivos(true)}
                className="text-primary rounded-full"
              />
            </HoverCardTrigger>
            <HoverCardContent className="p-2">
              <div className="text-center">
                Atualizar dados dos dispositivos
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="grid mx-2 border rounded-md p-2">
          <ScrollArea className="grid h-[350px]">
            <Table className="mx-auto">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-center">Nome</TableHead>
                  <TableHead className="text-center">Temperatura</TableHead>
                  <TableHead className="text-center">Umidade</TableHead>
                  <TableHead className="text-center">Luzes</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Configurações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dispositivos && dispositivos.length > 0 ? (
                  dispositivos.map((dispositivo) => (
                    <TableRow
                      key={dispositivo.id}
                      className="text-center odd:bg-slate-100"
                    >
                      <TableCell className="font-medium text-start whitespace-nowrap">
                        {dispositivo.nome}
                      </TableCell>
                      <TableCell>
                        {dispositivo.config[0].temperatura}C°
                      </TableCell>
                      <TableCell>{dispositivo.config[0].umidade}%</TableCell>
                      <TableCell>
                        <HoverCard>
                          <HoverCardTrigger>
                            <div
                              className={`grid mx-auto w-6 h-6 rounded-full ${
                                dispositivo.config[0].sensor
                                  ? "bg-success"
                                  : "bg-danger"
                              }`}
                            ></div>
                          </HoverCardTrigger>
                          <HoverCardContent className="p-2">
                            <div className="text-center">
                              {dispositivo.config[0].sensor
                                ? "Ligado"
                                : "Desligado"}
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </TableCell>
                      <TableCell>
                        <HoverCard>
                          <HoverCardTrigger>
                            <div
                              className={`grid mx-auto w-6 h-6 rounded-full ${
                                dispositivo.config[0].ligado
                                  ? "bg-success"
                                  : "bg-danger"
                              }`}
                            ></div>
                          </HoverCardTrigger>
                          <HoverCardContent className="p-2">
                            <div className="text-center">
                              {dispositivo.config[0].ligado
                                ? "Online"
                                : "Offline"}
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </TableCell>
                      <TableCell className="flex justify-center gap-2">
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <Link
                              to={`/dispositivo/${dispositivo.id}`}
                              state={dispositivo}
                              className="grid mx-auto rounded-full p-2 hover:bg-slate-200"
                            >
                              <Settings className="text-primary rounded-full" />
                            </Link>
                          </HoverCardTrigger>
                          <HoverCardContent className="p-2">
                            <div className="text-center">
                              Configurações do dispositivo
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow className="text-center">
                    <TableCell colSpan={6} className="text-center">
                      Nenhum dispositivo encontrado
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <Button
            onClick={() => setIsModalCreateDipositivoOpen(true)}
            className="w-full mt-2"
          >
            Adicionar dispositivo
          </Button>
        </div>
      </div>

      <Dialog
        open={isModalCreateDipositivoOpen}
        onOpenChange={setIsModalCreateDipositivoOpen}
      >
        <DialogContent aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>Adicionar dispositivo</DialogTitle>
          </DialogHeader>
          <Form {...createDispositivoForm}>
            <form
              onSubmit={createDispositivoForm.handleSubmit(createDispositivo)}
            >
              <FormField
                name="nome"
                control={createDispositivoForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do dispositivo</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder="Nome do dispositivo"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isSubmiting} className="w-full mt-2">
                {isSubmiting ? "Adicionando" : "Adicionar"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
