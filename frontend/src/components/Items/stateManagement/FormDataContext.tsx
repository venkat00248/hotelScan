/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
// FormDataContext.js
import  { createContext, useContext, useState } from "react";

const FormDataContext = createContext<any>(null);

export const useFormData = () => useContext(FormDataContext);

export const FormDataProvider = ({ children}:any) => {
  const [orderDetails, setOrderDetails] = useState({ orderId: "", amount: "" });
  const [itemDetails, setItemDetails] = useState({ itemName: "", amount: "" , offerPrice:"", cuponCode:""});
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
        orderDetails,
        mongoId,
        setMongoId,
        setOrderDetails,
        userDetails,
        setUserDetails,
        location,
        setLocation,
        checked,
        setChecked,
        itemDetails,
        setItemDetails
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
