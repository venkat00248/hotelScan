import HttpApiService from "./HttpApiService";
import { config } from "../config/config";

//define the constants here...
const API_BASE = `${config.API.BASEURI}`;
const API = config.API;

const Create_Ticket_FormData =
  config.ENV.IS_PROD || config.ENV.IS_UAT
    ? `${API_BASE}/${API.CREATE_TICKET.IS_GET ? "list" : "create"}/myshift/${API.CREATE_TICKET.ACTION
    }`
    : `${config.ENV.API_URL}/createTicket`;

const workflowbyId = config.ENV.IS_PROD || config.ENV.IS_UAT
  ? `${API_BASE}/${API.OPEN_TICKETS_BY_DATE.IS_GET ? "list" : "create"}/myshift_app/${API.WORKFLOW_BY_ID.ACTION
  }`
  : `${config.ENV.API_URL}/getWorkFlowByID`;
 const postAWorkflow = config.ENV.IS_PROD || config.ENV.IS_UAT
  ? `${API_BASE}/${API.POST_A_WORKFLOW ? "list" : "create"}/myshift_app/${API.WORKFLOW_BY_ID.ACTION
  }`
  : `${config.ENV.API_URL}/postAWorkFlow`;
/**
 * @description creates Ticket Type class and extends the HTTP interceptor class...
 */
//  const workFlowAPI = 'http://localhost:8080/workflow/unpublished'
 const workFlowAPI = "https://itsmworkflow.cloud4c.com/workflow/unpublished"
 const workFlowAPITask = "https://itsmworkflow.cloud4c.com/nodes/unpublished"
 const workFlowAPIActions = "https://itsmworkflow.cloud4c.com/actions/unpublished"
 const publishworkFlowAPI = "https://itsmworkflow.cloud4c.com/workflow/published"
//  const getworkFlowAPI = "https://itsmworkflow.cloud4c.com/workflow"
export class WorkFlow extends HttpApiService {
  constructor() {
    super(`${API_BASE}`);
  }

  postcreateTicketDetails = (data: any) => {
    // return this.post(
    //   `${Create_Ticket_FormData}`, data,
    //   {
    //     headers: { "auth_key": API.CREATE_TICKET.AUTH_KEY }
    //   }
    // )
    return this.get(`${Create_Ticket_FormData}`, {
      params: data
    })
  };

  createWorkFlow = (data: any) => {

    return this.post(`${workFlowAPI}/create`, data)
  };
  addTask = (data:any)=>{
    return this.post(`${workFlowAPITask}/add-task`, data)
  }
  deleteTask = (data:any)=>{
    return this.post(`${workFlowAPITask}/delete-task`, data)
  }
  saveWorkFlow = (data:any)=>{
    return this.post(`${workFlowAPI}/save`, data)
  }
  updateTask = (data:any)=>{
    return this.post(`${workFlowAPITask}/update-task`, data)
  }
  addAction = (data:any)=>{
    return this.post(`${workFlowAPIActions}/create`, data)
  }
  
  getAllWorkFlows = ()=>{
    return this.get(`${workFlowAPI}/fetch-all`)
  }

  deleteWorkFlow = (data:any)=>{
    return this.post(`${workFlowAPI}/delete`, data)
  }
  mapWorkFlow = (data:any)=>{
    return this.post(`${publishworkFlowAPI}/map-workflow`, data)
  }
  publishWorkFlow = (data:any)=>{
    return this.post(`${publishworkFlowAPI}/publish`, data)
  }
  getWorkFlowById = (id: any) => {
    return this.get(
      `${workFlowAPI}/fetch-one/${id}`
    )
  }

}

export const WorkFlowService = new WorkFlow();