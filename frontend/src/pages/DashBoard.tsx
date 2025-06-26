import {
  climaAtual,
  GetDispositivos,
  RequestCreateDispositivo,
  RequestDeleteDispositivo,
} from "@/api";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import {
  DispositivoProps,
  IRequestCreateDispositivo,
  IUser,
} from "@/interfaces";
import { Climatizador } from "@/components/Climatizador";
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
import { RefreshCcw, Settings, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import LocationPermissionModal from "@/components/LocationPermissionModal";
import { AdicionarDispositivoBtn } from "@/components/AdicionarDispositivo";
import { useDispositivo } from "@/contexts/DispositivoContext";

export const DashBoard = () => {
  const { user } = useAuth();
  const { dispositivos, requestDispositivos } = useDispositivo();
  const [bairroName, setBairroName] = useState("");
  const [temperatura, setTemperatura] = useState(0);
  const tempKelvin = 273.15;
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isAcepptedLocation, setIsAcceptedLocation] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) setIsLocationModalOpen(true);
  }, [dispositivos]);

  const handleLocationAccept = () => {
    setIsLocationModalOpen(false);
    setIsAcceptedLocation(true);

    if (!navigator.geolocation) {
      alert("Geolocalização não é suportada pelo seu navegador.");
      return;
    }

    const timeout = setTimeout(() => {
      alert("Você não respondeu à solicitação de localização.");
      setIsAcceptedLocation(false);
      localStorage.removeItem("locationAccepted");
    }, 10000); // 10 segundos

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        clearTimeout(timeout); // limpa o timeout se a resposta chegou
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const response = await climaAtual(latitude, longitude);
        if (!response?.main) return;

        setTemperatura(+(response.main.temp - tempKelvin).toFixed());
        setBairroName(response.name);

        // salva somente após permissão concedida com sucesso
        localStorage.setItem("locationAccepted", "true");
      },
      (error) => {
        clearTimeout(timeout);
        setIsAcceptedLocation(false);
        localStorage.removeItem("locationAccepted");

        if (error.code === error.PERMISSION_DENIED) {
          alert("Permissão de localização negada.");
        } else {
          alert("Erro ao obter localização.");
        }
      }
    );
  };

  const handleLocationDecline = () => {
    setIsAcceptedLocation(false);
    setIsLocationModalOpen(false);
    alert("Você recusou o acesso à localização.");
  };

  useEffect(() => {
    const checkPermission = async () => {
      const userAcceptedModal =
        localStorage.getItem("locationAccepted") === "true";

      if (!navigator.permissions || !navigator.geolocation) {
        setIsLocationModalOpen(true);
        return;
      }

      try {
        const result = await navigator.permissions.query({
          name: "geolocation",
        });

        if (result.state === "granted") {
          handleLocationAccept();
          if (!userAcceptedModal) {
            localStorage.setItem("locationAccepted", "true");
          }
        } else if (result.state === "prompt") {
          if (!userAcceptedModal) {
            setIsLocationModalOpen(true);
          }
        } else if (result.state === "denied") {
          // Caso especial: usuário aceitou modal antes, mas removeu permissão no navegador
          localStorage.removeItem("locationAccepted");
          setIsAcceptedLocation(false);
          setIsLocationModalOpen(true);
        }
      } catch (error) {
        console.error("Erro ao checar permissão de geolocalização:", error);
        setIsLocationModalOpen(true); // fallback
      }
    };

    checkPermission();
  }, []);

  async function handleDeleteDispositivo(id: number) {
    try {
      toast.loading("Deletando dispositivo...");
      await RequestDeleteDispositivo(id);
      toast.dismiss();
      toast.success("Dispositivo deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar dispositivo:", error);
      toast.error("Erro ao deletar dispositivo.");
    } finally {
      toast.success("Dispositivo deletado com sucesso!");
      requestDispositivos();
    }
  }

  return (
    <div className="w-screen h-screen">
      <Header />
      <h1 className="text-2xl sm:text-3xl text-center my-12">
        Seja bem vindo, {user?.username}!
      </h1>

      {isAcepptedLocation ? (
        <div className="grid justify-center">
          <div className="text-6xl sm:text-8xl text-center h-48 w-48 sm:h-64 sm:w-64 grid justify-center content-center rounded-full border">
            <span className="text-2xl text-orange-300">
              {bairroName || "Procurando..."}
            </span>
            <h1 className="text-primary relative">
              {temperatura}{" "}
              <span className="text-2xl absolute bottom-0">°C</span>
            </h1>
          </div>
        </div>
      ) : (
        <Button
          variant="outline"
          onClick={() => setIsLocationModalOpen(true)}
          className="grid hover:bg-muted text-2xl mx-auto text-center h-64 w-64 rounded-full border"
        >
          Permitir localização
        </Button>
      )}

      <Climatizador />
      <LocationPermissionModal
        onDecline={handleLocationDecline}
        onAccept={handleLocationAccept}
        isOpen={isLocationModalOpen}
      />

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
          <ScrollArea className="grid h-[320px]">
            <Table className="mx-auto">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-center">Nome</TableHead>
                  <TableHead className="w-[100px] text-center">Local</TableHead>
                  <TableHead className="text-center">Temperatura</TableHead>
                  <TableHead className="text-center">Umidade</TableHead>
                  <TableHead className="text-center">Luzes</TableHead>
                  <TableHead className="text-center">Ar condicionado</TableHead>
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
                      <TableCell className="font-medium whitespace-nowrap">
                        {dispositivo.local ?? "Local"}
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
                                dispositivo.config[0].temperatura <
                                  dispositivo.config[0].temperaturaMin ||
                                dispositivo.config[0].temperatura >
                                  dispositivo.config[0].temperaturaMax
                                  ? "bg-success"
                                  : "bg-danger"
                              }`}
                            ></div>
                          </HoverCardTrigger>
                          <HoverCardContent className="p-2">
                            <div className="text-center">
                              {dispositivo.config[0].temperatura <
                                dispositivo.config[0].temperaturaMin ||
                              dispositivo.config[0].temperatura >
                                dispositivo.config[0].temperaturaMax
                                ? "Ligado"
                                : "Desligado"}
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
                              className="grid m-auto rounded-full p-2 hover:bg-slate-200"
                            >
                              <Settings
                                size={20}
                                className="text-primary rounded-full"
                              />
                            </Link>
                          </HoverCardTrigger>
                          <HoverCardContent className="p-2">
                            <div className="text-center">
                              Configurações do dispositivo
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <Button
                              onClick={() =>
                                handleDeleteDispositivo(dispositivo.id)
                              }
                              variant="ghost"
                              className="grid m-auto content-center rounded-full p-2 hover:bg-slate-200"
                            >
                              <Trash
                                size={20}
                                className="text-destructive rounded-full"
                              />
                            </Button>
                          </HoverCardTrigger>
                          <HoverCardContent className="p-2">
                            <div className="text-center">
                              Deletar dispositivo
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow className="text-center">
                    <TableCell colSpan={7} className="text-center">
                      Nenhum dispositivo encontrado
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <AdicionarDispositivoBtn />
        </div>
      </div>
    </div>
  );
};
