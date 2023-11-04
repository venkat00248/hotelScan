/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useFormData } from "./stateManagement/FormDataContext";
export const Form = () => {
  const {
    itemDetails ,
    setItemDetails
  } = useFormData();
  const [fileSrc, setFileSrc] = useState("http://i.pravatar.cc/500?img=7");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = (e: any) => {
      const src = e.target.result;
      setFileSrc(src);
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  };
  const [errors, setErrors] = useState({
    itemDetails: { itemName: "", amount: "" },
  
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

  
 

  const handleSubmit = async (event: any) => {
    let isFormFieldValid = false;
    event.preventDefault();

    // Perform onBlur validation for all fields
    onBlurItemDetails("itemName")();
    onBlurItemDetails("amount")();

    // If there are any validation errors, prevent form submission
    if (
      errors.itemDetails.itemName ||
      errors.itemDetails.amount
    ) {
      // return;
      isFormFieldValid = false;
    } else {
      isFormFieldValid = true;
    }
    // setReview(false)
    try {
      // Frame the formData object based on the form field values
    } catch (error) {
      console.error("Error posting or updating data:", error);
      // Handle errors while posting or updating data
    }
  };

  return (
    <div className="register-form p-5 needs-validation" id="register-form">
        <fieldset className="scheduler-border">
        <legend className="scheduler-border">Item Details</legend>
        <div className="control-group">
          <div className="row g-3">
            <div className="col-md-6">
              <FormControl sx={{ m: 1, width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Item Name"
                  multiline
                  variant="outlined"
                  value={itemDetails.itemName}
                  onChange={(e) => {
                    const id = e.target.value
                      .replace(/^\s+/, "")
                      .replace(/\s{2,}/g, " ")
                      .replace(/[^a-zA-Z0-9 ]/g, "");
                    // const id = e.target.value.trim().replace(/\s{2,}/g, ' ').replace(/[^a-zA-Z0-9 ]/g, '')
                    setItemDetails({ ...itemDetails, itemName: id });
                  }}
                  size="small"
                  onBlur={onBlurItemDetails("itemName")}
                  error={!!errors.itemDetails.itemName}
                  helperText={errors.itemDetails.itemName}
                  inputProps={{ maxLength: 50 }}
                />
              </FormControl>
            </div>
            <div className="col-md-6">
              <FormControl sx={{ m: 1, width: "100%" }}>
              <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Item Price"
                  multiline
                  variant="outlined"
                  value={itemDetails.amount}
                  onChange={(e) => {
                    const amount = e.target.value.replace(
                      /^0+|[^0-9]/g,
                      ""
                    );
                    setItemDetails({ ...itemDetails, amount: amount });

                  }}
                  // onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                  size="small"
                  onBlur={onBlurItemDetails("amount")}
                  error={!!errors.itemDetails.amount}
                  helperText={errors.itemDetails.amount}
                  inputProps={{ maxLength: 5 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </div>
            <div className="col-md-6">
              <FormControl sx={{ m: 1 }}>
                <div className="avatar-upload">
                  <div className="avatar-edit">
                    <input
                      type="file"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="imageUpload"></label>
                  </div>
                  <div className="avatar-preview">
                    {/* <div id="imagePreview" style={{background: "url(http://i.pravatar.cc/500?img=7);"}}> */}
                    {fileSrc && (
                      <img
                        src={fileSrc}
                        id="imagePreview"
                        alt="Selected file"
                      />
                    )}
                    {/* </div> */}
                  </div>
                </div>
              </FormControl>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="col-12">
        <div className="submit">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
