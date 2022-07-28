import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react"
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import AddStudentDialog from './addStudentDialog/AddStudentDialog';
import BorderColorIcon from '@mui/icons-material/BorderColor';
// import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const endPoint = 'http://localhost:8000/api'

export default function StudentsList() {

  const [pageSize, setPageSize] = React.useState(5);

  const columns = [
    { field: 'fullName', headerName: 'Nom et Prénom', width: 150 },
    { field: 'gender', headerName: 'Sexe', width: 100 },
    { field: 'dateOfBirthday', headerName: "Date De Naissance", width: 150 },
    { field: 'cin', headerName: 'CIN', width: 100 },
    { field: 'address', headerName: 'Adresse', width: 150 },
    { field: 'phoneNumber', headerName: 'Téléphone', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'formation', headerName: 'Formation', width: 100 },
    { field: 'yearOfFormation', headerName: 'Year Of Formation', width: 150 },
    {
      field: 'action', headerName: 'Actions', width: 100, renderCell: (params) => {
        return [
          <IconButton aria-label="update" onClick={() => openAddDialog(params.row.id)}> <BorderColorIcon className="color_icon" /> </IconButton>,
          <IconButton aria-label="delete" onClick={() => deletStudents(params.row.id)}> <DeleteIcon className="color_icon" /> </IconButton>
        ]
      }
    },
  ];
  let [students, setStudents] = useState([])
  let [filtredStudents, setFiltredStudents] = useState([])


  useEffect(() => {
    getAllStudents()
  }, [])

  const getAllStudents = async () => {
    const response = await axios.get(`${endPoint}/students`)
    setStudents(response.data)
    setFiltredStudents(response.data)
  }

  /* delet row Employee */
  const deletStudents = async (id) => {
    await axios.delete(`${endPoint}/student/${id}`).then((response) => {
      if (response.status === 200) {
        setFiltredStudents(students.filter(student => student.id !== id))
      }
    })
  }
  /* end delet row Employee */



  /* --------- Dialog --------- */
  const [addDialogIsOpen, setAddDialogIsOpen] = React.useState(false);
  const [studentId, setStudentId] = React.useState(null);

  const openAddDialog = (studentId) => {
    setAddDialogIsOpen(true);
    setStudentId(studentId)
  };

  const closeAddDialog = () => {
    setAddDialogIsOpen(false);
  };

  const newStudent = (student) => {
    setFiltredStudents([...students, student]);
  };

  const updatedStudent = (student) => {
    let updateStudent = [...students]
    const index = students.findIndex(data => data.id === student.id)
    updateStudent[index] = student;
    setFiltredStudents(updateStudent);
    
  };
  /* --------- end Dialog --------- */

  /* --------- Filtrage --------- */
  const [formation, setFormation] = useState('')
  const [yearOfFormation, setYearOfFormation] = useState('')

  const selectedYear = (event) => {
    setYearOfFormation(event.target.value);
    filterTable(formation, event.target.value)
  };

  const selectedFormation = (event) => {
    setFormation(event.target.value);
    filterTable(event.target.value, yearOfFormation)
  };

  const filterTable = (formation, year) => {
    if (formation !== '' && year === '') {
      if (formation === 'Tout') {
        setFiltredStudents(students)
      } else {
        let newStud = students.filter(student => student.formation === formation)
        setFiltredStudents(newStud)
      }
    } else if (formation === '' && year !== '') {
      if (year === 'Tout') {
        setFiltredStudents(students)
      } else {
        let newStud = students.filter(student => student.yearOfFormation === year)
        setFiltredStudents(newStud)
      }
    } else if (formation !== '' && year !== '') {
      if (year === 'Tout' && formation === 'Tout') {
        setFiltredStudents(students)
      }
      else if (year === 'Tout' && formation !== 'Tout') {
        let newStud = students.filter(student => student.formation === formation)
        setFiltredStudents(newStud)
      }
      else if (year !== 'Tout' && formation === 'Tout') {
        let newStud = students.filter(student => student.yearOfFormation === year)
        setFiltredStudents(newStud)
      } else {
        let newStud = students.filter(student => student.yearOfFormation === year && student.formation === formation)
        setFiltredStudents(newStud)
      }
    }
  }
  /* --------- end Filtrage --------- */

  return (
    <div className="allContent">
      <div className="settingContent">
        {/* -------------start breadcrumb-------------- */}
        <h3 className="mt-2 mb-3">Liste des étudiants :</h3>
        {/* -------------end breadcrumb-------------- */}
        {/* -------------start barFiltrage-------------- */}
        <div className="bare d-flex justify-content-between">
          <div className="filter d-flex">
            <Box sx={{ minWidth: 120 }} className="mr-3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Année :</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={yearOfFormation}
                  label="Année :"
                  onChange={selectedYear}
                >
                  <MenuItem value="Tout">Tout</MenuItem>
                  <MenuItem value="1 année">1annee</MenuItem>
                  <MenuItem value="2 année">2annee</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ minWidth: 130 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Formation :</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formation}
                  label="formation :"
                  onChange={selectedFormation}
                >
                  <MenuItem value='Tout'>Tout</MenuItem>
                  <MenuItem value='Dev'>Dev</MenuItem>
                  <MenuItem value='Design'>Design</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="add">
            <Button variant="outlined" onClick={() => openAddDialog(null)} >ajouter un étudiant</Button>
          </div>
        </div>
        {/* -------------end barFiltrage-------------- */}
        <br />
        {/* -------------start table-------------- */}
        <div style={{ height: 400, width: '100%', background: "#F2F2F2" }}>
          <DataGrid
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 25]}
            rows={filtredStudents}
            columns={columns}
            pagination
            {...filtredStudents}
          />
        </div>
        {/* -------------start table-------------- */}
        <AddStudentDialog studentId={studentId} open={addDialogIsOpen} onClose={closeAddDialog} newStudent={newStudent} updatedStudent={updatedStudent} />
      </div>
    </div>
  )
}