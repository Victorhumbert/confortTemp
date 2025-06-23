import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { DashBoard } from "@/pages/DashBoard";
import { SettingsPage } from "@/pages/SettingsPage";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DispositivosPage } from "./pages/DispositivoPage";
import { useAuth } from "./contexts/AuthContext";
import { RegisterUserPage } from "./pages/RegisterUserPage";

export default function App() {
  function PrivateRoute({ children }: { children: JSX.Element }) {
    const { user, loading } = useAuth();

    if (loading) {
      return <p>Carregando...</p>;
    }
    if (!user) {
      // se não estiver logado, manda pra página de login
      return <Navigate to="/" replace />;
    }
    return children;
  }
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <SettingsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dispositivo/:id"
          element={
            <PrivateRoute>
              <DispositivosPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cadastro"
          element={
            <PrivateRoute>
              <RegisterUserPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<RequireLoginOrRedirect />} />
      </Routes>
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

function RequireLoginOrRedirect() {
  const { user, loading } = useAuth();
  if (loading) return <p>Carregando...</p>;
  return user ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/" replace />
  );
}
