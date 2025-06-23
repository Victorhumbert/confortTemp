// src/contexts/DispositivoContext.tsx
import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { GetDispositivos, login } from "@/api";
import { DispositivoProps } from "@/interfaces";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "./AuthContext";

interface DispositivoContextData {
  dispositivos: DispositivoProps[] | null;
  setDispositivos: React.Dispatch<React.SetStateAction<DispositivoProps[] | null>>;
  requestDispositivos: (refresh?: boolean) => Promise<DispositivoProps[] | void> | void;
}

const DispositivoContext = createContext<DispositivoContextData>({} as DispositivoContextData);

export const DispositivoProvider = ({ children }: { children: ReactNode }) => {
  const {user} = useAuth();
  const [dispositivos, setDispositivos] = useState<DispositivoProps[] | null>(null);

  async function requestDispositivos(refresh: boolean = false) {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    const idUser = user.id;
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

  return (
    <DispositivoContext.Provider value={{ dispositivos, setDispositivos, requestDispositivos }}>
      {children}
    </DispositivoContext.Provider>
  );
};

export function useDispositivo(): DispositivoContextData {
  const context = useContext(DispositivoContext);
  if (!context) {
    throw new Error("useDispositivo deve ser usado dentro de um DispositivoProvider");
  }
  return context;
}
