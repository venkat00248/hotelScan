import { Card, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FileAttachment } from './FileAttachment';
import ExtensionInputs from './ExtensionInputs';
import React from 'react';
import "./fileattach.scss";
import { useTranslation } from 'react-i18next';
import { i18n } from '../../Translations/i18n';
export const FileExtension = () => {
    const {t}=useTranslation();
    const [bulkImport, setbulkimport] = useState(false);

    useEffect(()=>{
        i18n.changeLanguage(sessionStorage.langOption);
    },[])
    
    return (
        <div >
            <h3 className="title">          
                {t('Manage Extensions')}
            </h3>
            <div
                style={{ borderTop: "1px solid lightgrey"}}
            ></div>
            <div className='container-switch' >
                <div><p className='mt-5'>{t("Are you sure to add  Bulk Imports?")} </p>  </div>

                <div> <Form.Check type='switch'
                    name="import"
                    className="mt-5 md-4"
                    checked={bulkImport}
                    onChange={() => setbulkimport(!bulkImport)} />

                </div>


            </div>
            <div
                style={{ margin: "25px 0px" }}
            ></div>
            {!bulkImport &&
                <div style={{ float: "left", width: "100%" }}>

                    <Card >
                        <Card.Header style={{ backgroundColor: "lightgray" }}>
                            <h4>{t("File Extension")}</h4>
                        </Card.Header>
                        <Card.Body>
                            <ExtensionInputs />
                        </Card.Body>

                    </Card>
                </div>
            }

            {bulkImport &&
                <div style={{ float: "left", width: "100%" }}>
                    <Card>
                        <Card.Header style={{ backgroundColor: "lightgray" }}>
                            <h4>{t("Bulk Imports")}</h4>
                        </Card.Header>
                        <Card.Body>
                            <FileAttachment />

                        </Card.Body>
                    </Card>
                </div>

            }

        </div>
    )
}
export default FileExtension;
