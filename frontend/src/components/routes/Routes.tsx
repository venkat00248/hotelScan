// import { SocialLoginList } from "../Social/SocialLoginList";

import { Home } from "../Home/Home";
import { Latest } from "../layouts/Latest/Latest";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Routes:any = [
    //routes
    // { path: "custom", element: <Header /> },
    { path: "/", element: <Home />  },
    {path:"/latest", element: <Latest/>}
   
  ];
  
