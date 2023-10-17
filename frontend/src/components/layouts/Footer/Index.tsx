import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import BasicTabs from "./TabsData";
import Form from "./Form";
import './Layout.scss'
import { Footer } from "./Footer";
type Anchor = "top" | "left" | "bottom" | "right";

export const Layout = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (
    <Box
      //   sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }},
      height="87vh"
      role="presentation"
      // onClick={toggleDrawer("bottom", false)}
      // onKeyDown={toggleDrawer("bottom", false)}
    >
      <button
       className="closeicon"
        onClick={toggleDrawer("bottom", false)}
      >
        <CloseIcon  />
      </button>
      <Form/>
      <BasicTabs />
      <Footer/>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"bottom"}>
        <Button onClick={toggleDrawer("bottom", true)}>{"bottom"}</Button>
        <Drawer
          anchor={"bottom"}
          open={state["bottom"]}
          onClose={toggleDrawer("bottom", false)}
        >
          {list}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
