/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { DrawerLayout } from "../Footer/DrawerLayout";
import "./MobileHeader.scss";
import { useConfig } from "../../../config/config";
export const MobileHeader = () => {
  const config :any = useConfig();
  const url = config? config?.data[0].url :"https://i.imgur.com/QQ8FTjR.png"
  console.log("config from header", config?.data[0].url)

  return (
    <header>
    
        <div className="headerWrapper"> 
        <Link to ='/'> 
                  <img
                    className="headerLogo"
                    src={url}
                    alt=""
                  /> </Link>
                  <div className="drawerWrapper">
                  <DrawerLayout/>
                  </div>
     </div>
    </header>
  );
};
