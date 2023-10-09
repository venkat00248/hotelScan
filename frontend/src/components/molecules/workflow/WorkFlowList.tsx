import * as React from "react";
import './WorkFlowList.scss'
import { Link } from 'react-router-dom';
import { Drawer } from '@mui/material';
import Box from "@mui/material/Box";
import WorkFlow from "./WorkFlow";
import { WorkFlowService } from "../../../services/WorkFlowService";
import { DateFormatForWF } from "../../Utils/DateFormat";
import CloseIcon from "@mui/icons-material/Close";
import WorkFlowView from "./WorkFlowView";
import CustomModal from "../ConfirmModal/CustomModal";
import { Button } from "react-bootstrap";
type Anchor = "bottom";
export  const WorkFlowList = () =>{
  const [workFlows, setWorkFlows]:any = React.useState([])
  const [selectedWorkFlow, setSelectedWorkFlow] = React.useState(null);
  const [showModal, setShowModal]:any = React.useState({show: false, message: "", item: null});
  const [statusPublish, setstatusPublish]:any = React.useState({});
    const [state, setState] = React.useState({
        bottom: false
      });
    
      const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
      ) => {
        if (
          event.type === "keydown" &&
          ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
        if (open) {
          const selectedIndex:any = event.currentTarget.getAttribute("data-index");
          setSelectedWorkFlow(workFlows[selectedIndex]);
        }
      };
      const getAllWorkFlows = async () =>{
        const res=  await WorkFlowService.getAllWorkFlows()
        setWorkFlows(res?.data.data.result)
        // console.log("all workflows",res.data.data.result)
      }
    React.useEffect(()=>{
      getAllWorkFlows()
        
    },[])
      const drawerContent = (
        <Box
          sx={{
            width: "100%",
            height: "87vh",
            display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center"
          }}
          role="presentation"
          // onClick={toggleDrawer("bottom", false)}
          // onKeyDown={toggleDrawer("bottom", false)}
        > <button
        style={{
          position: "absolute",
          padding:"8px",
          top: 0,
          right: 2,
          zIndex: 1,
        }}
        onClick={toggleDrawer("bottom", false)}
      >
        <CloseIcon />
      </button>
      <WorkFlowView selectedWorkFlow={selectedWorkFlow}/>
         {/* <WorkFlowView /> */}
        </Box>
      );

    const openConfirmationPopup = (item: any, index:any) => {
        setShowModal({ show: true, message: "Are you sure to delete the record", item: item, index: index });
    };
    const publishedPopup = (item: any, index:any) => {
        setShowModal({ show: true, message: "Are you sure to publish the record", item: item, index: index  });
    };
    const handleCloseModal = async (confirm = false) => {
        const { message, item, index }:any = showModal;
        if (confirm && item) {
          if (message === "Are you sure to delete the record") {
            // Delete the record using the row data
            try {
              const res = await WorkFlowService?.deleteWorkFlow({
                workFlowId: item?._id,
              });
              if (res) {
                const updatedWorkFlows = [...workFlows];
                updatedWorkFlows[index].is_active = false;
                setWorkFlows(updatedWorkFlows);
              }
            } catch (error) {
              console.log("error while Deleting node", error);
            }
          } else if (message === "Are you sure to publish the record") {
            // Publish the record using the row data
            // console.log("Record published!", item, item?._id);
            const res = await WorkFlowService?.publishWorkFlow({
              workFlowId: item?._id,
            });
            if(res) {
              // setstatusPublish((prevState:any) => ({
              //   ...prevState,
              //   [item?._id]: true,
              // }));
              const updatedWorkFlows = [...workFlows];
                updatedWorkFlows[index].is_published = true;
                setWorkFlows(updatedWorkFlows);
            }
          }
        }
        setShowModal({ show: false, message: "", item: null });
      };
return (
    <div>
      <div className='wfstablemain'>
        <div className='wfstitle'>
            <h3>Manage Work Flows</h3>
          </div> 
          <div className="wfsheader mb-0">
                <div>
                <h5 className="subtitle"><i className="fa fa-angles-right me-1"></i> List of all WF'S</h5>
                </div>
                <div className="d-flex">
                    <div className="justify-content-center">
                    <Link  to="/admin/newWorkflow">  <button type="button" className="btn btn-primary shadow-sm my-2 btn-sm btn-icon-text"> <i className="far fa-plus-square me-2"></i> New Work Flow </button></Link>
                    </div>
                </div>
          </div> 
          <div className="row wfs-table">
              <div className="col-12">
                          <div className="table-responsive px-1">
                              <table id="example2" className="table table-striped" style={{width:'100%'}}>
                                  <thead>
                                      <tr>
                                          <th style={{width:'15%'}}>WF Name</th>
                                          <th style={{width:'12%'}}>Mapped Ticket Type</th>
                                          <th style={{width:'13%'}}>Owner</th>
                                          <th style={{width:'8%'}}>Status</th>
                                          <th style={{width:'10%'}}>Created Date</th>
                                          <th style={{width:'10%'}}>Updated Date</th>
                                          <th style={{width:'10%'}}>IS Published</th>
                                          <th style={{width:'12%'}}>Updated By</th>
                                          <th style={{width:'10%'}}>Action</th>

                                      </tr>      
                                  </thead> 
                                  <tbody>
                                    {
                                    workFlows.length>=0 && 
                                      workFlows.map ((item:any, index:any) =>  (
                                      <tr key={index}>
                                          <td>{item.name}</td>
                                          <td>Ticket Type</td>
                                          <td>{item.created_by}</td>
                                          <td>
                                            <span className="border py-0 px-2 border-primary text-primary">
                                              {(item.is_active) ? "Active":"Not Active"}</span></td>
                                          <td>{DateFormatForWF(item.createdAt)}</td>
                                          <td> {DateFormatForWF(item.updatedAt)}</td>
                                          <td>{item.is_published ?<i className="fa-regular fa-circle-check text-success"></i>: <i className="fa-regular fa-circle-xmark text-danger"></i>}</td>
                                          <td>XYZ</td>
                                          
                                            <td>
                                              <button type="button" data-index={index} className="btn btn-primary shadow btn-xs sharp me-1" onClick={toggleDrawer("bottom", true)}><i className="fa-regular fa-eye"></i></button>
                                              
                                              {item.is_active && !item.is_published ? (
                                                <button
                                                  type="button"
                                                  data-index={index}
                                                  className="btn btn-primary shadow btn-xs sharp me-1"
                                                  onClick={() => openConfirmationPopup(item, index)}
                                                >
                                                  <i className="fa-solid fa-trash"></i>
                                                </button>
                                              ) : null}
                                                {(!item.is_published && item.is_active ) && (
                                                  <button
                                                    type="button"
                                                    data-index={index}
                                                    className="btn btn-primary shadow btn-xs sharp me-1"
                                                    onClick={() => publishedPopup(item, index)}
                                                  >
                                                    <i className="fa-solid fa-upload"></i>
                                                  </button>
                                                )}

                                              <Drawer
                                              anchor="bottom"
                                              open={state["bottom"]}
                                              onClose={toggleDrawer("bottom", false)}
                                              >
                                              {drawerContent}
                                              </Drawer>
                                          </td> 
                                      </tr>
                                      
                                      ))}
                                    
                                      {/* <tr>
                                          <td>Sample WF</td>
                                          <td>Ticket Type</td>
                                          <td>ABC </td>
                                          <td><span className="border py-0 px-2 border-primary text-primary">Active</span></td>
                                          <td>26/06/23</td>
                                          <td> </td>
                                          <td><i className="fa-regular fa-circle-check text-success"></i></td>
                                          <td>XYZ</td>
                                          
                                            <td>
                                              <button type="button" className="btn btn-primary shadow btn-xs sharp" onClick={toggleDrawer("bottom", true)}><i className="fa-regular fa-eye"></i></button>
                                              <Drawer
                                              anchor="bottom"
                                              open={state["bottom"]}
                                              onClose={toggleDrawer("bottom", false)}
                                              >
                                              {drawerContent}
                                              </Drawer>
                                          </td> 
                                      </tr>
                                      <tr>
                                          <td>Sample WF2</td>
                                          <td>Service request</td>
                                          <td>XYZ</td>
                                          <td><span className="border py-0 px-2 border-primary text-primary">Active</span></td>
                                          <td>25/06/23</td>
                                          <td>26/06/23</td>
                                          <td><i className="fa-regular fa-circle-xmark text-danger"></i></td>
                                          <td>ABC</td>
                                            
                                            <td>
                                              <button type="button" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa-regular fa-eye"></i></button>
                                              <button type="button" className="btn btn-warning shadow btn-xs sharp me-1"><i className="fa-regular fa-pen-to-square"></i></button>
                                              <button type="button" className="btn btn-danger shadow btn-xs sharp me-1"><i className="fa fa-trash"></i></button>
                                              <button type="button" className="btn btn-success shadow btn-xs sharp me-1"><i className="fa-regular fa-circle-check"></i></button>
                                          </td> 
                                      </tr> */}
                        
                                  </tbody>
                              </table>
                    
                          </div>
                                    
                  
              </div>

                      
          </div>
          <CustomModal
                show={showModal.show}
                onHide={handleCloseModal}
                title = 'Warning'
                footer={
                <>
                    <Button variant="danger" onClick={() => handleCloseModal(true)} style= {{padding: "3px", width: "65px"}}>
                    Confirm
                    </Button>
                </>
                }
            >
                <p>{showModal.message}</p>
          </CustomModal>
      </div>
    </div>
)
}