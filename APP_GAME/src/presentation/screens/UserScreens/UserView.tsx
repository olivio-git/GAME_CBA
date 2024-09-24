import { useEffect, useState } from "react";
import { userUseCase } from "./Depend";
 
export const UserView = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const response = userUseCase.execute("Olivio").then((res) => setData(res));
  }, []);
  return <div>Hola mundo</div>;
};
