import React from 'react'
import { Row, Col, Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import PlusIcon from '@rsuite/icons/Plus';
import "./fileattach.scss";
import { useTranslation } from 'react-i18next';
const ExtensionInputs = () => {
    const [inputfields, setinputfields] = useState([{ file: '', id: 0 }]);
    const [formErrors, setFormErrors]: any = useState([]);
    const [counter, setCounter] = useState(1);
    const {t}=useTranslation();
    const addFields = () => {
        const newId = counter;
        setCounter((prevCounter) => prevCounter + 1);
        let newfield = { file: '', id: newId }
        setinputfields([...inputfields, newfield])
        setFormErrors([])
    }
    const removefields = (index: any) => {
        let data = [...inputfields];
        data.splice(index, 1);
        setinputfields(data);

    }
    function handlefileChange(event: any, index: any) {
        let data: any = [...inputfields];
        data[index][event.target.name] = event.target.value;
        setinputfields(data);
        clearError(index);
    }
    const clearError = (index: any) => {
        let errors: any = [...formErrors];
        errors[index] = '';
        setFormErrors(errors);
    }

    const validateForm = () => {
        let errors: any = [];
        inputfields.forEach((field, index) => {
            if (field.file.trim() === '') {
                errors[index] = 'File extension is required';
            }
        });
        setFormErrors(errors);
        return errors.length === 0;
    }
    const handlesubmit = () => {
        validateForm();
        console.log(inputfields)
    }
    return (
        <React.Fragment>
            <div>
                <label className='form-group m-2'>{t("File Extension Type")}</label>
                <span>:</span>
            </div>
            <div className='inputfield-obj'>
                <form></form>
                {
                    inputfields.map((file: any, index: any) => {
                        return (
                            <div style={{ padding: "8px" }}>
                                <div className='container d-flex' key={index}>
                                    <span className='text text-danger p-2'>*</span>
                                    <div>
                                        <input
                                            type="text"
                                            name="file"
                                            id={index}
                                            style={{ width: "300px" }}
                                            value={file.file}
                                            onChange={(event: any) => handlefileChange(event, index)}
                                            className={`form-control ${formErrors[index] ? `inputTextErr` : ``}`}
                                            placeholder={t("Enter the extension type") as any}

                                        // placeholder={index}
                                        /></div>


                                    {index === 0 ?
                                        <button onClick={addFields} className='add-icon' style={{ marginLeft: "8px", borderRadius: "50%" }}>
                                            <OverlayTrigger
                                                delay={{ hide: 0, show: 30 }}
                                                overlay={(props) => (
                                                    <Tooltip {...props}>
                                                        {t("Add")}
                                                    </Tooltip>
                                                )}
                                                placement="right"
                                            >
                                                <i className="mdi mdi-plus rounded-circle "></i>
                                            </OverlayTrigger>
                                        </button>
                                        // <Button variant="light" style={{ marginLeft: "8px", borderRadius: "35px", color: "green", borderColor: "green" }} onClick={addFields}>+</Button> :
                                        :
                                        // <Button style={{ marginLeft: "8px", borderRadius: "35px", color: "red", borderColor: "red" }} variant='light' onClick={() => removefields(index)}>-</Button>}

                                        <button
                                            onClick={() => removefields(index)}
                                            className='remove-icon'
                                            style={{ marginLeft: "8px", borderRadius: "50%" }}
                                        >
                                            <OverlayTrigger
                                                delay={{ hide: 0, show: 30 }}
                                                overlay={(props) => (
                                                    <Tooltip {...props}>
                                                        {t("Remove")}
                                                    </Tooltip>
                                                )}
                                                placement="right"
                                            >
                                                <i className="mdi mdi-minus rounded-circle " onClick={() => removefields(index)}></i>
                                            </OverlayTrigger>
                                        </button>
                                    }

                                </div>
                                <div>
                                    {formErrors[index] && <div className="container alert alert-danger  pt-0  text-align-center error-message">
                                        <i className="fa-sharp fa-solid fa-circle-exclamation ps-1 " style={{ marginRight: "6px" }}></i>
                                        {t(formErrors[index])}
                                    </div>}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Button style={{ float: "right" }} onClick={handlesubmit}>{t("Submit")}</Button>
        </React.Fragment>
    )
}

export default ExtensionInputs;