import { climaAtual, GetDispositivos } from "@/api";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { DispositivoProps, IUser } from "@/interfaces";
import { MudarTemperatura } from "@/components/MudarTemperatura";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";
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

export const DashBoard = () => {
  const [bairroName, setBairroName] = useState("");
  const userData = localStorage.getItem("user") as unknown as IUser;
  const idUser = userData.id;
  const username = userData.username;
  const [temperatura, setTemperatura] = useState(0);
  const [dispositivos, setDispositivos] = useState<DispositivoProps[]>([]);
  const tempKelvin = 273.15;

  useEffect(() => {
    async function reponseDispositivos() {
      const { dispositivos } = await GetDispositivos(Number(idUser));
      if (!dispositivos) return;
      setDispositivos(dispositivos);
      return dispositivos;
    }
    reponseDispositivos();
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

      console.log(response)
      if (!response) return;
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
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">Nome</TableHead>
            <TableHead className="text-center">Temperatura</TableHead>
            <TableHead className="text-center">Umidade</TableHead>
            <TableHead className="text-center">Luzes</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dispositivos.map((dispositivo) => (
            <TableRow key={dispositivo.nome} className="text-center">
              <TableCell className="font-medium text-start">
                {dispositivo.nome}
              </TableCell>
              <TableCell>{dispositivo.temperatura}C°</TableCell>
              <TableCell>{dispositivo.umidade}%</TableCell>
              <TableCell>
                <div
                  className={`grid mx-auto w-6 h-6 rounded-full ${dispositivo.movimento ? "bg-success" : "bg-danger"
                    }`}
                ></div>
              </TableCell>
              <TableCell>
                <div
                  className={`grid mx-auto w-6 h-6 rounded-full bg-red-600 ${dispositivo.ligado ? "bg-success" : "bg-danger"
                    }`}
                ></div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* <div className="grid justify-center m-4">
        <h2 className="text-4xl text-primary opacity-30">Dispositivos</h2>
        <div className="grid grid-cols-5 gap-2 px-4 text-center text-xs sm:text-lg">
          <p>Nome</p>
          <p>Temperatura</p>
          <p>Umidade</p>
          <p>Luzes</p>
          <p>Status</p>
        </div>
        <ul className="grid border rounded-md divide-y">
          {dispositivos.map((dispositivo) => (
            <li key={dispositivo.nome} className="grid grid-cols-5 gap-2 p-4">
              <h1>{dispositivo.nome}</h1>
              <p className="text-center">{dispositivo.temperatura}°C</p>
              <p className="text-center">{dispositivo.umidade}%</p>
              <HoverCard>
                <HoverCardTrigger
                  className={`px-3 justify-self-center rounded-full ${
                    dispositivo.movimento ? "bg-green-600" : "bg-red-600"
                  }`}
                ></HoverCardTrigger>
                <HoverCardContent className="py-2 px-4 text-center w-max">
                  <span>
                    {dispositivo.movimento ? "Luzes acesas" : "Luzes apagadas"}
                  </span>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger
                  className={`px-3 justify-self-center rounded-full ${
                    dispositivo.ligado ? "bg-green-600" : "bg-red-600"
                  }`}
                ></HoverCardTrigger>
                <HoverCardContent className="py-2 px-4 text-center w-max">
                  <span>
                    {dispositivo.ligado ? "Conectado" : "Desconectado"}
                  </span>
                </HoverCardContent>
              </HoverCard>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};
