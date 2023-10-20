import { Link } from "react-router-dom";
import { DrawerLayout } from "../Footer/DrawerLayout";
import "./MobileHeader.scss";
export const MobileHeader = () => {
  return (
    <header>
    
        <div className="headerWrapper"> 
        <Link to ='/'> 
                  <img
                    className="headerLogo"
                    src="https://i.imgur.com/QQ8FTjR.png"
                    alt=""
                  /> </Link>
                  <div className="drawerWrapper">
                  <DrawerLayout/>
                  </div>
     </div>
    </header>
  );
};
