import { DrawerLayout } from "../Footer/DrawerLayout";
import "./MobileHeader.scss";
export const MobileHeader = () => {
  return (
    <header>
    
        <div className="headerWrapper">  
                  <img
                    className="headerLogo"
                    src="https://i.imgur.com/QQ8FTjR.png"
                    alt=""
                  />
                  <div className="drawerWrapper">
                  <DrawerLayout/>
                  </div>
     </div>
    </header>
  );
};
