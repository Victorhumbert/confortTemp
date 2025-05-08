import { useLocation } from "react-router-dom";

export const DispositivosPage = () => {

  const location = useLocation();
  const dispositivo = location.state

  console.log(dispositivo);

  return (
    <div className="w-screen h-screen">
      <h1>OPAAA</h1>
    </div>
  );
};
