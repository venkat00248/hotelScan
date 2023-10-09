export class ErrorHandler extends Error {
  config: any;
  constructor(configuration: any) {
    super();
    this.config = configuration;
   
  }

  errorHandle = (err: any) => {
    if (this.config[`${err}`]) {
      return this.config[`${err}`];
    } else {
      return this.config["default"];
    }
  };
}
export default ErrorHandler;
