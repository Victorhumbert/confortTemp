import { LogOut, Settings, UserPlus2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/logo_ComFortTemp.svg?react";
import { useAuth } from "@/contexts/AuthContext";

export const Header = () => {
  const navigate = useNavigate();
  const { user, signout } = useAuth();
  return (
    <div className="border-b border-x p-2 flex w-full gap-2">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => navigate("/dashboard/")}
      >
        <Logo className="w-10 h-10 p-2" />
        <h1 className="text-2xl text-primary">ConfortTemp</h1>
      </div>
      <div className="flex ml-auto items-center justify-self-end justify-end justify-items-end">
        {Number(user?.id) === 1 && (
          <UserPlus2
            onClick={() => navigate("/cadastro")}
            className="justify-self-end w-10 h-10 p-2 cursor-pointer"
          />
        )}
        <Settings
          onClick={() => navigate("/settings")}
          className="justify-self-end w-10 h-10 p-2 cursor-pointer"
        />
        <LogOut
          onClick={signout}
          className="justify-self-end w-10 h-10 p-2 cursor-pointer text-destructive"
        />
      </div>
    </div>
  );
};
