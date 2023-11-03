/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
// FormDataContext.js
import  { createContext, useContext, useState } from "react";

const FormDataContext = createContext<any>(null);

export const useFormData = () => useContext(FormDataContext);

export const FormDataProvider = ({ children}:any) => {
  const [tenantDetails, setTenantDetails] = useState({ tenantName: "", email: "" });
  const [userDetails, setUserDetails] = useState({ name: "", email: "", contact: "" });
  const [location, setLocation] = useState({
    address: "",
    country: "",
    city: "",
    state: "",
    postalCode: "",
  });
const [checked, setChecked]= useState(false)
const [mongoId, setMongoId]= useState("")

  return (
    <FormDataContext.Provider
      value={{
        tenantDetails,
        mongoId,
        setMongoId,
        setTenantDetails,
        userDetails,
        setUserDetails,
        location,
        setLocation,
        checked,
        setChecked,
       
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
