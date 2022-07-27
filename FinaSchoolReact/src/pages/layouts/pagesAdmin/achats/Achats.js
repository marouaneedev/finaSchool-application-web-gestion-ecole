import React from "react";
import { useEffect, useState } from "react"
import axios from 'axios'
// import { TableContainer, TablePagination, Table, TableHead, TableRow, TableBody, TableCell, Paper } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
// import DialogAchat from './dialogAchat/DialogAchat'


const endPoint = 'http://localhost:8000/api'


export default function Achats() {

    const columns = [
        { field: 'idArticle', headerName: 'ID Article', width: 120 },
        { field: 'nomArticle', headerName: 'Nom Article', width: 200 },
        { field: 'nomFrss', headerName: "Nom de Fournisseur", width: 200 },
        { field: 'teleFrss', headerName: 'Télephon de Fournisseur', width: 200 },
        { field: 'prixDachat', headerName: "Prix D'achat", width: 200 },
        {
            field: 'action', headerName: 'Actions', width: 100, renderCell: (params) => {
                return [
                    <IconButton aria-label="delete" onClick={() => deletRowPursh(params.row.id)}> <DeleteIcon /> </IconButton>

                ]
            }
        },
    ];

    /* get data */
    /* filtredAchats */
    let [filtredAchats, setFiltredAchats] = useState([])

    useEffect(() => {
        getAllPurchases()
    }, [])

    const getAllPurchases = async () => {
        const response = await axios.get(`${endPoint}/achats`)
        setFiltredAchats(response.data)
    }

    console.log(filtredAchats)
    /* end get data */

    /* --------- Dialog --------- */
    // const [addDialogIsOpen, setAddDialogIsOpen] = React.useState(false);
    // const [employeeId, setEmployeeId] = React.useState(null);

    // const openAddDialog = (studentId) => {
    //     setAddDialogIsOpen(true);
        // setEmployeeId(studentId)
    // };

    // const closeAddDialog = () => {
    //     setAddDialogIsOpen(false);
    // };

    // const newEmployee = (employee) => {
    //     setFiltredEmployees([...employees, employee]);
    // };

    // const updatedEmployee = (employee) => {
    //     let updateEmployee = [...employees]
    //     const index = employees.findIndex(data => data.id === employee.id)
    //     updateEmployee[index] = employee;
    //     setFiltredEmployees(updateEmployee);
    // };
    /* --------- end Dialog --------- */


    /* delet row inscreption */
    const deletRowPursh = async (id) => {
        // await axios.delete(`${endPoint}/inscreption/${id}`).then((response) => {
        //     if (response.status === 200) {
        //         setFiltredInscreptions(inscreptions.filter(inscr => inscr.id !== id))
        //     }
        // })
    }
    /* end delet row inscreption */


    return (
        <div className="allContent">
            {/* -------------start breadcrumb-------------- */}
            <h3 className="mt-2 mb-3">Les Achats : </h3>
            {/* -------------end breadcrumb-------------- */}

            {/* -------------start header-------------- */}
            <div className="add">
                <Button variant="outlined"  /* onClick={() => openAddDialog(null)} */  >ajouter un Achat</Button>
            </div>
            <br/>
            {/* -------------start header-------------- */}


            {/* -------------start table-------------- */}
            <div style={{ height: 400, width: '100%', background: "#F2F2F2" }}>
                <DataGrid
                    rows={filtredAchats}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
            {/* -------------end table-------------- */}

            {/* -------------start dialog-------------- */}
            {/* <DialogAchat  employeeId={employeeId}   open={addDialogIsOpen}  onClose={closeAddDialog}    newStudent={newEmployee} updatedStudent={updatedEmployee}   /> */}
            {/* -------------start dialog-------------- */}
        </div>
    )


}

