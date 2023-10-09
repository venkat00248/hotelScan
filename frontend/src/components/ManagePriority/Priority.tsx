import React, { useEffect, useState } from 'react';
import { Col, OverlayTrigger, Row, Tooltip, Modal } from "react-bootstrap";
import { conditionalRowStyles, customStyles, inputValidation } from "../Utils/Utils";
import  "./Admin.scss";
import { i18n } from "../../Translations/i18n";
import moment from "moment";
import { ManagePriorityForm } from './ManagePriorityForm';
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next';
import FilterComponent from './../molecules/FilterComponent/filterComponent'
// import {
//     DataTable,
//     Button,
//     Select,
//     TicketTypeService,
//     useTranslation,
//     useSelector,
//     config,
//     handleDownload,
//     CustomExport,
//     IndexedDbService,
//     FilterComponent,
//     MappedTicketsData,
//     ColumnsData,
// } from "../uidashboard/Imports";
import { useNavigate } from 'react-router-dom';
export const Priority = () => {
    const [formValues, setFormValues] = useState({
        priorityId: '',
        priority: '',
        foregroundColor: '#000000',
        backgroundColor: '#ffffff',
    });
    const [formErrors, setFormErrors] = useState({
        priorityId: '',
        priority: ''
    });
    const [tableData, setTableData]  = useState<any>([]);
    const { t } = useTranslation();
 
    const [selectedRows, setSelectedRows] = useState<any>([]);
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const navigate=useNavigate();
    const [merge, setMerge] = useState(0);
    const [filterText, setFilterText] = useState("");
  let filteredData = tableData || [];
  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
        if (filterText) {
            setFilterText("");
        }
    };

    return (
        <FilterComponent
            onFilter={(e: any) => {
                setFilterText(inputValidation(e.target.value, /[^\w]/g));
            }}
            onClear={handleClear}
            filterText={filterText}
        />
    );
}, [filterText]);
  if (filterText) {
    filteredData = filteredData.filter((row: any) => {
      const createdOnString = moment(row?.createdon).format( "Do MMMM YYYY h:mm A");
      const searchData = `${row.priorityId} ${row.priority} ${row.foregroundColor} ${row.backgroundColor}`.toUpperCase();
      const filterData = filterText.toUpperCase();
      return searchData.includes(filterData);
    });
  }
 
 useEffect(()=>{
 
   i18n.changeLanguage(sessionStorage.langoption);
 },[i18n])
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        setFormErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };
    const paginationComponentOptions = {
        rowsPerPageText: t("Pages"),
        rangeSeparatorText: t("of"),
        selectAllRowsItem: true,
        selectAllRowsItemText: t("All"),
    };
    const validateForm = () => {
        let errors = {
            priorityId: '',
            priority: ''
        };

        if (formValues.priorityId.trim() === '') {
            errors.priorityId = 'Priority ID is required';
        }

        if (formValues.priority.trim() === '') {
            errors.priority = 'Priority Title is required';
        }

        setFormErrors(errors);

        // Return true if there are no errors
        return Object.values(errors).every(error => error === '');
    };
    const HandleEdit=(row:any)=>{
        setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
        
    setFormValues({
        priorityId: row.priorityId,
        priority: row.priority,
        foregroundColor: row.foregroundColor,
        backgroundColor: row.backgroundColor,
    })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formValues)
        validateForm();

        if (validateForm()) {
            const newData: any = {
                priorityId: formValues.priorityId,
                priority: formValues.priority,
                foregroundColor: formValues.foregroundColor,
                backgroundColor: formValues.backgroundColor
            };
            const editedRowIndex = tableData.findIndex(
                (row: any) => row.priorityId === newData.priorityId
              );
           
              // Replace the edited row with the updated values
              if (editedRowIndex !== -1) {
                setTableData((prevData: any) => {
                  const newDataArray = [...prevData];
                  newDataArray[editedRowIndex] = newData;
                  return newDataArray;
                });
               
              }

              else {
                // Add the new row to the table data
                setTableData((prevData: any) => [...prevData, newData]);
              }


            // Reset form values
            setFormValues({
                priorityId: '',
                priority: '',
                foregroundColor: '#000000',
                backgroundColor: '#ffffff',
            });
        }
      
    };

  
    const handleDelete = (id: any) => {
        console.log(`Deleting row with ID: ${id}`);
        
        setTableData((prevData: any) => {
          const updatedData = prevData.filter((row: any) => row.priorityId !== id);
          return updatedData;
        });
     
      };
      
    const [columns, setColumns]: any = useState([
        {
            name: t("Priority ID"),
            selector: (row:any) => row.priorityId,
            sortable: true,
        },
        {
            name: t("Priority Title"),
          //  selector: (row:any) => row.priority,
            sortable: true,
            cell: (row: any) => (
                <div
                  style={{
                    backgroundColor: row.backgroundColor,
                    color: row.foregroundColor,
                    padding:"5px",
                    borderRadius: "5px"

                  }}
                >
                  {row.priority}
                </div>
              ),
        },
        {
            name: t("Background Color"),
            selector: (row:any) => row.backgroundColor,
            sortable: true,

        },
        {
            name: t("Foreground Color"),
            selector: (row:any) => row.foregroundColor,
            sortable: true,

        },
        {
            name: t('Action'),
            cell: (row: any) => (
                <div>
                      <OverlayTrigger
                      placement="top"
                       overlay={<Tooltip id={`tooltip-edit`}>{t("Edit")}</Tooltip>}
            >
                <i className='fa-solid fa-pencil' onClick={()=>HandleEdit(row)}></i>
                </OverlayTrigger>
                <OverlayTrigger
                      placement="top"
                       overlay={<Tooltip id={`tooltip-delete`}>{t("Delete")}</Tooltip>}
            >
               <i className=" fa-solid fa-trash" onClick={()=>handleDelete(row.priorityId)} style={{marginLeft:"20px"}}></i>
               </OverlayTrigger>
               </div>
            ),
            button: true,
        },
      
    ]);

    return (
        <div className={"priorityform"} data-test-id="div_pri_main" >
        <ManagePriorityForm
        formValues={formValues}
        formErrors={formErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        />
         <div className='border-bottom my-4'></div>
            <div>
                <DataTable
                    title=""
                    columns={columns}
                    data={filteredData}
                    defaultSortAsc={false}
                    customStyles={customStyles}
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    highlightOnHover
                    pointerOnHover
                    pagination
                    noDataComponent={"There are no records to display"}
                    paginationRowsPerPageOptions={[10, 20, 30, 50, 100]}
                    paginationResetDefaultPage={resetPaginationToggle}
                    paginationServer
                    paginationComponentOptions={paginationComponentOptions}

                />
            </div>
        </div>


    );
};

export default Priority;
