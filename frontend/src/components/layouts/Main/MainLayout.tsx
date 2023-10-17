import "./MainLayout.scss";
import { useRoutes } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import { Header } from "../Header/Header";
export const MainLayout = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const routeResult: any = useRoutes(Routes);
  return (
    <div >
      <Header />
      <div className="main-content">
        <div className="routing">
          <div className="layoutRouting" >
           {routeResult}
          </div>
        </div>
      </div>
    </div>
  );
};
