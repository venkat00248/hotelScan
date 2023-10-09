import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { TextField } from "@mui/material";
import ActionView from "./ActionView";
import DoneTwoToneIcon from "@mui/icons-material/DoneTwoTone";
const actionsList = ["Email", "Notification", "API"];
interface ActionProps {
  selectedAction: string;
  onActionChange: (event: SelectChangeEvent) => void;
  closeActionHandler: (event: any) => void;
  nodeName: string;
  onNodeHandler: (event: any) => void;
  deleteNode: (event: any) => void;
  setSideBar:(event: any) => void;
  setNodeName:(event: any) => void;
}
export default function Action(props: ActionProps) {
  const {
    selectedAction,
    onActionChange,
    closeActionHandler,
    nodeName,
    onNodeHandler,
    deleteNode,
    setSideBar,
    setNodeName
  } = props;
  const [view, setView] = React.useState(false);
  return (
    <div className="actions">
      <div>
        {/* <RemoveRedEyeIcon
          onClick={() => {
            setView(!view);
            setSideBar(true);
          }}
        /> */}
        <button
          className="btn  btn-sm"
          style={{ float: "right", right:"-20px",
          position: "relative",
          top: "-12px"
       }}
          onClick={closeActionHandler}
          
        >
          <CloseTwoToneIcon />
        </button>
      </div>
      {!view && (
        <>
        <div  style={{position:"fixed", bottom:"15px", width:"260px"}}>
         <div className="deleteNodeWrapper">
                <p>delete this node?</p>
                <div className="buttonWrappper">
                  <button
                    className="btn btn-success btn-sm p-0"
                    onClick={deleteNode}
                  >
                    <DoneTwoToneIcon />
                  </button>
                  {/* <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      setShowPopup(false);
                      setNodeName("");
                    }}
                  > */}
                    {/* <CloseTwoToneIcon /> */}
                  {/* </button> */}
                </div>
              </div>
              </div>
          <FormControl sx={{ m: 1, width: "100%" }}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="label"
              variant="outlined"
              value={nodeName}
              onChange={(evt:any) => setNodeName(evt.target.value)}
              size="small"
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-label selectActions">Actions</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedAction}
              label="Actions"
              onChange={onActionChange}
              size="small"
            >
              {actionsList.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}
      {view && <ActionView/>}
    </div>
  );
}
