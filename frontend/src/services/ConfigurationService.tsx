import HttpApiService from "./HttpApiService";

 const configAPI = "http://localhost:8080"
export class Configuration extends HttpApiService {
  constructor() {
    super(`${configAPI}`);
  }
  
  getConfiguration = ()=>{
    return this.get(`${configAPI}/config.json`)
  }
  getLangHindi = ()=>{
    return this.get(`${configAPI}/hi.json`)
  }
  getLangEnglish = ()=>{
    return this.get(`${configAPI}/en.json`)
  }
 
}
export const ConfigurationService = new Configuration();