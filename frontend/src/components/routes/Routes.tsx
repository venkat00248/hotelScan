// import { SocialLoginList } from "../Social/SocialLoginList";

import { LoginDialog } from "../Dialog/LoginDialog";
import { Home } from "../Home/Home";
import { Latest } from "../layouts/Latest/Latest";
import { Onboarding } from "../payment/Onboarding";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Routes:any = [
    //routes
    // { path: "custom", element: <Header /> },
    { path: "/", element: <Home />  },
    {path:"/latest", element: <Latest/>},
    {path:"/login", element: <LoginDialog/>},
    {path:"/onboarding", element: <Onboarding/>}
   
  ];
  
