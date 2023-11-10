// import { SocialLoginList } from "../Social/SocialLoginList";

import { LoginDialog } from "../Dialog/LoginDialog";
import { Home } from "../Home/Home";
import { Items } from "../Items/Items";
import { PacManLoader } from "../Loader/PacManLoader";
import { RippleLoader } from "../Loader/RippleLoader";
import { TenantLogIn } from "../Tenant/TenantLogIn";
import { Latest } from "../layouts/Latest/Latest";
import { Onboarding } from "../payment/Onboarding";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Routes:any = [
    //routes
    // { path: "custom", element: <Header /> },
    { path: "/", element: <Home />  },
    {path:"/latest", element: <Latest/>},
    {path:"/login", element: <LoginDialog/>},
    {path:"/onboarding", element: <Onboarding/>},
    {path:"/items", element: <Items/>},
    {path:"/loader", element: <RippleLoader/>},
    {path:"/pmloader", element: <PacManLoader/>},
    {path:"/tenantLogin", element: <TenantLogIn/>},
   
   
  ];
  
