// src/contexts/AuthContext.tsx

import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { login } from "@/api";

interface User {
  id: string;
  username: string;
  email: string;
  token: string;
}

interface AuthContextData {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  signin(email: string, password: string): Promise<void>;
  signout(): void;
  loading: boolean;
}

const TOKEN_KEY = "token";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Configura axios para usar o token automaticamente
  const setAxiosToken = (token: string | null) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token) {
      try {
        // decodifica para extrair payload
        const payload = jwtDecode<JwtPayload & User>(token);
        // opcional: checar expiração
        if (payload.exp && payload.exp * 1000 < Date.now()) {
          throw new Error("Token expirado");
        }
        // reconstrói usuário
        const restoredUser: User = { ...payload };
        setUser(restoredUser);
        setAxiosToken(token);
      } catch {
        // token inválido ou expirado
        localStorage.removeItem(TOKEN_KEY);
        setUser(null);
        setAxiosToken(null);
      }
    }
    setLoading(false);
  }, []);

  const signin = async (email: string, password: string) => {
    setLoading(true);
    // Chama sua API; ajusta a URL conforme seu backend
    const response = await login(email, password);

    const { token } = response;

    // armazena token
    localStorage.setItem(TOKEN_KEY, token);
    setAxiosToken(token);

    // decodifica para extrair user
    const payload = jwtDecode<JwtPayload & User>(token);
    const loggedUser: User = {
      ...payload,
      token: token,
      username: response.user.username,
    };
    setUser(loggedUser);
    setLoading(false);
  };

  const signout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
    setAxiosToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signin, signout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
