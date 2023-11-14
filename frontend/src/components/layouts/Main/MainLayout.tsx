/* eslint-disable @typescript-eslint/no-explicit-any */
import "./MainLayout.scss";
import { useRoutes } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import { MobileHeader } from "../MobileHeader/MobileHeader";
import { useConfig } from "../../../config/config";
// import { Header } from "../Header/Header";
// import { ImageSlider } from "../../Slider/ImageSlider";
export const MainLayout = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const routeResult: any = useRoutes(Routes);

  const isHeaderVisible = Routes.find((route:any) => route.path === window.location.hash.replace('#', ''))?.showHeader;
  // const isHeaderVisible = true
  const config = useConfig();
  // console.log(window.location.pathname.split('/')?.[1]);   
  console.log("pathhhh",isHeaderVisible);   
console.log("config",config)
  return (
    <div >
      {/* <Header /> */}
     {!isHeaderVisible && <MobileHeader/> }
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
