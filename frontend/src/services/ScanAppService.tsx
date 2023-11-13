/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpApiService from "./HttpApiService";

const API_BASE = "${config.API.BASEURI}";


 const scanAPPAPI = "http://localhost:3000"

export class ScanApp extends HttpApiService {
  constructor() {
    super(`${API_BASE}`);
  } 
 
  onBoarding = (data:any)=>{
    return this.post(`${scanAPPAPI}/onboard`, data)
  }
  tenantLogin = (data:any)=>{
    return this.post(`${scanAPPAPI}/login`, data)
  }
  getItems = ()=>{
    return this.get(`${scanAPPAPI}/getitems`)
  }
  getTenants = ()=>{
    return this.get(`${scanAPPAPI}/getTenants`)
  }
  postItem  = (data:any)=>{
    return this.post(`${scanAPPAPI}/saveitem`, data)
  }
  paymentFormSubmit = (data:any)=>{
    return this.post(`${scanAPPAPI}/paymentForm/submit`, data)
  }
  paymentFormUpdate = (data:any)=>{
    return this.post(`${scanAPPAPI}/paymentForm/update`, data)
  }
}

export const ScanAppService = new ScanApp();
