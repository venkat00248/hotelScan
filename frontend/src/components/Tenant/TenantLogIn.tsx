/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import './TenantLogIn.scss'
import { ScanAppService } from "../../services/ScanAppService";
import { useNavigate, useParams } from "react-router-dom";
import { useConfig } from "../../config/config";
export const TenantLogIn = () => {
  const [showPassword, setShowPassword] = React.useState(true);
  const navigate = useNavigate();
  const { tenant } = useParams();
  const [loginResponse, setLoginResponse] = useState<any>(null);


  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [itemDetails, setItemDetails] = useState<any>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    itemDetails: { email: "", password: "" },
  });
  const onBlurItemDetails = (fieldName: any) => () => {
    if (!itemDetails[fieldName]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        itemDetails: {
          ...prevErrors.itemDetails,
          [fieldName]: "This field is required.",
        },
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        itemDetails: {
          ...prevErrors.itemDetails,
          [fieldName]: "",
        },
      }));
    }
  };
  const config:any = useConfig();
  // console.log(window.location.pathname.split('/')?.[1]);   
  // console.log("pathhhh",window.location);   
console.log("config from tenant",config)
// const url = config ?config.data[0].url :"./assets/img/cred.jpg"
const url = "./assets/img/cred.jpg"
// setUrl(config.data[0].url)
// console.log("config from tenant url",config.data[0].url)
  const handleSubmit = async (event: any) => {
    let isFormFieldValid = false;
    event.preventDefault();

    // Perform onBlur validation for all fields
    onBlurItemDetails("email")();
    onBlurItemDetails("password")();

    // If there are any validation errors, prevent form submission
    if (errors.itemDetails.email || errors.itemDetails.password) {
      // return;
      isFormFieldValid = false;
    } else {
      isFormFieldValid = true;
    }
    // setReview(false)
    try {

      const res = await ScanAppService.tenantLogin({
        email:"cap@hotmail.com",
        password:"9b89ccd941379ce925e4"
      })
      console.log("tenant", tenant)
      setLoginResponse(res);
      if (loginResponse) {
        // Redirect to another route on successful login
        // navigate(`${tenant}/dashBoard`);
        navigate(`../${tenant}/dashBoard`, { replace: true });
      }

      console.log("res", res)
      // Frame the formData object based on the form field values
    } catch (error) {
      console.error("Error posting or updating data:", error);
      // Handle errors while posting or updating data
    }
  };
  return (
    <div
      className="register-form p-5 needs-validation tenantLogin"
      id="register-form"
      // style={{ marginTop: "80px" }}
    >
      <fieldset style={{ marginTop: "60px" }}>
        <div className="control-group">
          <div className="row g-3">
          <div className="col-md-12">
            <img src={url} alt="bg"/>
            </div>
            <div className="col-md-12">
              <FormControl sx={{ m: 1, width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Email"
                  multiline
                  variant="outlined"
                  value={itemDetails.email}
                  // onChange={(e) => {
                  //   const id = e.target.value
                  //     .replace(/^\s+/, "")
                  //     .replace(/\s{2,}/g, " ")
                  //     .replace(/[^a-zA-Z0-9 ]/g, "");
                  //   // const id = e.target.value.trim().replace(/\s{2,}/g, ' ').replace(/[^a-zA-Z0-9 ]/g, '')
                  //   setItemDetails({ ...itemDetails, email: id });
                  // }}
                  onChange={(e) => {
                    const emailValue = e.target.value
                      .replace(/[^a-zA-Z0-9@.]/g, "")
                      .replace(/\.com.*$/, ".com");
                      setItemDetails({ ...itemDetails, email: emailValue });
                  }}
                  size="small"
                  onBlur={onBlurItemDetails("email")}
                  error={!!errors.itemDetails.email}
                  helperText={errors.itemDetails.email}
                  inputProps={{ maxLength: 50 }}
                />
              </FormControl>
            </div>

            <div className="col-md-12">
              <FormControl
                sx={{ m: 1, width: "100%" }}
                variant="outlined"
                size="small"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onBlur={onBlurItemDetails("password")}
                  value={itemDetails.password}
                  onChange={(e) => {
                    const id = e.target.value
                      .replace(/^\s+/, "")
                      .replace(/\s{2,}/g, " ")
                      .replace(/[^a-zA-Z0-9 ]/g, "");
                    // const id = e.target.value.trim().replace(/\s{2,}/g, ' ').replace(/[^a-zA-Z0-9 ]/g, '')
                    setItemDetails({ ...itemDetails, password: id });
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              {errors.itemDetails.password && <FormHelperText error>{errors.itemDetails.password}</FormHelperText>}

              </FormControl>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="col-12">
        <FormControl sx={{ m: 1, width: "100%" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            <span>Log In</span>
          </button>
        </FormControl>
      </div>
    </div>
  );
};
