import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import Home from "./Components/Body/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { links } from "./Components/Appconstant";
import ContextAppProvider from "./ContextApi";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (<>
  <ContextAppProvider>
 {/* <Logo text='TurtleX' text2='Digital'/> */}
 <Navbar links={links}/>
 {/* <NavBa */}
  <Home/>
  </ContextAppProvider>
  </>);
}
