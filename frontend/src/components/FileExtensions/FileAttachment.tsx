import { Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import FileUploader from '../createTicket/fileUpload';
import { useTranslation } from "react-i18next";
import axios from "axios";
import { config } from '../../config/config';
import errors from "../TicketView/emailerrors.json";
export const FileAttachment = () => {
    
    const allowedExtension: any = errors[5].allowedExtensionObj;
    const [fileError, setFileError] = useState(false);
    const [uploadedFiles, setUploadedFiles]: any = useState([]);
    const [progress, setProgress] = useState({});
    const { t } = useTranslation();

    const handleFileDeletion = (file: any) => {
        const updatedFiles = uploadedFiles.filter((f: any) => f.id !== file);
        setUploadedFiles(updatedFiles);
        if (updatedFiles.length === 1) {
            setFileError(false)
        }
    };
    const isAcceptedFile = (file: File) => {
        const extension: any = file.name.split(".").pop()?.toLowerCase();
        if (!extension) {
            return false;
        }
        if (allowedExtension?.length > 0 && !allowedExtension.includes(extension)) {
            setFileError(true)
            return false;
        }
        return true;
    };
    const handlesubmit = () => {
        console.log(uploadedFiles)
        if (uploadedFiles.length < 1) {
            setFileError(true)
        }
    }
    const handleFileUpload = (uplaodFile: any) => {
        console.log(uplaodFile, "fileeeeeeeeeeee")
        if (uplaodFile.length > 1 || uplaodFile.length === 0) {
            setFileError(true);
        } else if (uploadedFiles.length < 1) {
            setFileError(false);
            let idCounter = uploadedFiles.length > 0 ? uploadedFiles[uploadedFiles.length - 1].id + 1 : 1;
            for (let i = 0; i < uplaodFile.length && i < 10; i++) {
                const file = uplaodFile[i];
                if (!isAcceptedFile(file)) {
                    continue;
                }
                setFileError(false);
                const reader = new FileReader();
                reader.onload = async () => {
                    const base64: any = reader.result?.toString();
                    const extension = file.name.split(".").pop() || "";
                    const id = idCounter++;
                    try {
                        const response = await axios.post(`${config.ENV.API_URL}/upload`, { files: { id: id, base64: base64 } }, {         // http://localhost:3292/upload and ${config.ENV.API_URL} //
                            onUploadProgress: (progressEvent: any) => {
                                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                                setProgress(prevState => {
                                    return { ...prevState, [id]: percentCompleted };
                                });
                                setUploadedFiles((prevState: any) => [
                                    ...prevState,
                                    { id: id, name: file.name, size: file.size, base64: base64, extension: extension, progress: percentCompleted }
                                ]);
                            },
                        });
                    } catch (error) {
                        console.error(error);
                    }
                };
                reader.readAsDataURL(file);
            }
        } else {
            setFileError(true)
        }
    }
    return (
        <div>
            <div style={{ width: "50%",display:"flex" }}>
            <span className='text text-danger p-2'>*</span>
                <FileUploader
                    allowedExtensions={allowedExtension}
                    maxFileSize={`${2 * 1024 * 1024}`}
                    uploadedFiles={uploadedFiles}
                    fileError={fileError}
                    handleFileUpload={handleFileUpload}
                    handleFileDeletion={handleFileDeletion}
                    progress={progress} />

            </div>
            <Button style={{ float: "right" }} onClick={handlesubmit}>{t("Import")}</Button>
        </div>
    )
}