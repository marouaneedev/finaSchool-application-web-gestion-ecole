import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios'
import Button from '@mui/material/Button';
import AjouterSalarieDialog from './ajouterSalarie/AjouterSalarieDialog'
import BorderColorIcon from '@mui/icons-material/BorderColor';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './salariesList.css'


const endPoint = 'http://localhost:8000/api'

export default function SalariesList() {

  /* get data */
  let [filtredEmployees, setFiltredEmployees] = useState([])
  let [employees, setEmployees] = useState([])

  useEffect(() => {
    getAllEmployees()
  }, [])

  const getAllEmployees = async () => {
    const response = await axios.get(`${endPoint}/employees`)
    setEmployees(response.data)
    setFiltredEmployees(response.data)
  }
  /* end get data */

  /* delet row Employee */
  const deletEmployee = async (id) => {
    await axios.delete(`${endPoint}/employee/${id}`).then((response) => {
      if (response.status === 200) {
        setFiltredEmployees(employees.filter(student => student.id !== id))
      }
    })
  }
  /* end delet row Employee */


  /*----- table header -----*/
  const columns = [
    { field: 'fullName', headerName: 'Nom et Prénom', width: 150 },
    { field: 'gender', headerName: 'Sexe', width: 80 },
    { field: 'dateOfBirthday', headerName: "Date De Naissance", width: 140 },
    { field: 'cin', headerName: 'CIN', width: 100 },
    { field: 'address', headerName: 'Adresse', width: 150 },
    { field: 'phoneNumber', headerName: 'Téléphone', width: 105 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'typeEmployee', headerName: 'Type de Salarier', width: 130 },
    { field: 'typeWork', headerName: 'Type de Travail', width: 150 },
    {
      field: 'action', headerName: 'Actions', width: 100, renderCell: (params) => {
        return [
          <IconButton aria-label="update" onClick={() => openAddDialog(params.row.id)}> <BorderColorIcon className="color_icon"/> </IconButton>,
          <IconButton aria-label="delete" onClick={() => deletEmployee(params.row.id)}> <DeleteIcon className="color_icon"/> </IconButton>
        ]
      }
    },
  ];
  /*----- end table header -----*/

   /* --------- Dialog --------- */
   const [addDialogIsOpen, setAddDialogIsOpen] = React.useState(false);
   const [employeeId, setEmployeeId] = React.useState(null);
 
   const openAddDialog = (studentId) => {
     setAddDialogIsOpen(true);
     setEmployeeId(studentId)
   };
 
   const closeAddDialog = () => {
     setAddDialogIsOpen(false);
   };

   const newEmployee = (employee) => {
    setFiltredEmployees([...employees, employee]);
  };

  const updatedEmployee = (employee) => {
    let updateEmployee = [...employees]
    const index = employees.findIndex(data => data.id === employee.id)
    updateEmployee[index] = employee;
    setFiltredEmployees(updateEmployee);
  };
   /* --------- end Dialog --------- */

   /* --------- Filtrage --------- */
  const [typeEmployee, setTypeEmployee] = useState('')

   const selectedTypeEmployee = (event) => {
    setTypeEmployee(event.target.value);
    filterTable(event.target.value)
  };

  const filterTable = (type) => {
    if(type === 'Tout') {
      setFiltredEmployees(employees)
    } else {
      let newEmpl = employees.filter(employee => employee.typeEmployee === type)
      setFiltredEmployees(newEmpl)
    }
  }
   /* --------- End Filtrage --------- */



  return (
    <div className="allContent">
      <div className="settingContent">
        {/* -------------start breadcrumb-------------- */}
        <h3 className="mt-2 mb-3">Liste des Salaries :</h3>
        {/* -------------end breadcrumb-------------- */}
        {/* -------------start barFiltrage-------------- */}
        <div className="bare d-flex justify-content-between">
          <div className="filter d-flex">
            <Box sx={{ minWidth: 160 }} className="mr-3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type de Salarié</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={typeEmployee}
                  label="TypeSalarie"
                  onChange={selectedTypeEmployee}
                >
                  <MenuItem value="Tout">Tout</MenuItem>
                  <MenuItem value="Formateur">Formateur</MenuItem>
                  <MenuItem value="Secrétaire">Secrétaire</MenuItem>
                  <MenuItem value="Autre">Autre</MenuItem>

                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="add">
            <Button variant="outlined" onClick={() => openAddDialog(null)} >ajouter un Salarier</Button>
          </div>
        </div>
        {/* -------------end barFiltrage-------------- */}
        <br />
        {/* -------------start table-------------- */}
        <div style={{ height: 400, width: '100%', background: "#E3F0FC" }}>
          <DataGrid
            rows={filtredEmployees}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
        {/* -------------start table-------------- */}

        {/* -------------start dialog-------------- */}
        <AjouterSalarieDialog employeeId={employeeId} open={addDialogIsOpen} onClose={closeAddDialog} newStudent={newEmployee} updatedStudent={updatedEmployee} />
        {/* -------------start dialog-------------- */}

      </div>
    </div>
  )
}
