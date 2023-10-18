import "./MainLayout.scss";
import { useRoutes } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import { Header } from "../Header/Header";
import { ImageSlider } from "../../Slider/ImageSlider";
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
           {/* <ImageSlider/> */}
          </div>
        </div>
      </div>
    </div>
  );
};
