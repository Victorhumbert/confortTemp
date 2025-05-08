import { climaAtual, GetDispositivos } from "@/api";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { DispositivoProps, IUser } from "@/interfaces";
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
import { Settings } from "lucide-react";

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
  const tempKelvin = 273.15;

  useEffect(() => {
    async function responseDispositivos() {
      const dispositivos = await GetDispositivos(Number(idUser));
      if (!dispositivos) return;
      setDispositivos(dispositivos);
      return dispositivos;
    }
    responseDispositivos();
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

  // const invoices = [
  //   {
  //     invoice: "INV001",
  //     paymentStatus: "Paid",
  //     totalAmount: "$250.00",
  //     paymentMethod: "Credit Card",
  //   },
  //   {
  //     invoice: "INV002",
  //     paymentStatus: "Pending",
  //     totalAmount: "$150.00",
  //     paymentMethod: "PayPal",
  //   },
  //   {
  //     invoice: "INV003",
  //     paymentStatus: "Unpaid",
  //     totalAmount: "$350.00",
  //     paymentMethod: "Bank Transfer",
  //   },
  //   {
  //     invoice: "INV004",
  //     paymentStatus: "Paid",
  //     totalAmount: "$450.00",
  //     paymentMethod: "Credit Card",
  //   },
  //   {
  //     invoice: "INV005",
  //     paymentStatus: "Paid",
  //     totalAmount: "$550.00",
  //     paymentMethod: "PayPal",
  //   },
  //   {
  //     invoice: "INV006",
  //     paymentStatus: "Pending",
  //     totalAmount: "$200.00",
  //     paymentMethod: "Bank Transfer",
  //   },
  //   {
  //     invoice: "INV007",
  //     paymentStatus: "Unpaid",
  //     totalAmount: "$300.00",
  //     paymentMethod: "Credit Card",
  //   },
  // ];

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

      <Table className="mx-auto w-3/4 mt-10">
        <TableCaption>Seus dispositivos</TableCaption>
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
              <TableRow key={dispositivo.nome} className="text-center odd:bg-slate-100">
                <TableCell className="font-medium text-start">
                  {dispositivo.nome}
                </TableCell>
                <TableCell>{dispositivo.config[0].temperatura}C°</TableCell>
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
                        {dispositivo.config[0].sensor ? "Ligado" : "Desligado"}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </TableCell>
                <TableCell>
                  <div
                    className={`grid mx-auto w-6 h-6 rounded-full bg-red-600 ${
                      dispositivo.config[0].ligado ? "bg-success" : "bg-danger"
                    }`}
                  ></div>
                </TableCell>
                <TableCell>
                  <Link to={`/dispositivo/${dispositivo.id}`} state={dispositivo} className="grid mx-auto w-max rounded-full p-2 hover:bg-slate-200">
                    <Settings className="text-primary rounded-full" />
                  </Link>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="text-center">
              <TableCell colSpan={5} className="text-center">
                Nenhum dispositivo encontrado
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
