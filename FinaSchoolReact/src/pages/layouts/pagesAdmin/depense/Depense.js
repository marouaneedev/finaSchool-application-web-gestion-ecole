import React from "react";
import Button from '@mui/material/Button';
import DepenseDialog from './depenseDialog/DepenseDialog'
import { useState, useEffect } from "react"
import axios from 'axios'


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';
import TextField from '@mui/material/TextField';


import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TablePagination from '@mui/material/TablePagination';
import './depense.css'

import DeleteIcon from '@mui/icons-material/Delete';

const endPoint = 'http://localhost:8000/api'




/* ------- table ------- */
function Row(props) {
  const { row, onUpdate } = props;
  const [open, setOpen] = React.useState(false);

  /*  delet revenu row  */
  const deletDepense = async (id) => {
    await axios.delete(`${endPoint}/depense/${id}`).then((response) => {
      if (response.status === 200) {
        onUpdate();
      }
    })
  }
  /*  end delet revenu row  */


  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row"> {row.fullName} </TableCell>
        <TableCell align="right">{row.typeEmployee}</TableCell>
        <TableCell align="right">{row.typeWork}</TableCell>
        <TableCell align="right">{row.payrollAmount.toFixed(2)} DH</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead className="bg_table_head">
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Type Paiment</TableCell>
                    <TableCell align="right">Montant Payé</TableCell>
                    <TableCell align="right" >Action</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody className="bg_table_body">
                  {row.depenses.map((depense) => (
                    <TableRow key={depense.date}>
                      <TableCell component="th" scope="row"> {depense.created_at} </TableCell>
                      <TableCell>{depense.typePaiment}</TableCell>
                      <TableCell align="right">{depense.montantPaye.toFixed(2)} DH </TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="delete" onClick={() => deletDepense(depense.id)}  > <DeleteIcon /> </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    fullName: PropTypes.number.isRequired,
    typeEmployee: PropTypes.number.isRequired,
    typeWork: PropTypes.number.isRequired,
    payrollAmount: PropTypes.number.isRequired,
    depenses: PropTypes.arrayOf(
      PropTypes.shape({
        montantPaye: PropTypes.number.isRequired,
        employeetId: PropTypes.string.isRequired,
        typePaiment: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
/* ------- table ------- */


/* ------------------------------------------- Function ------------------------------------------ */
/* ------------------------------------------- Function ------------------------------------------ */
function Depense() {
  /* ------------------------------------------- Function ---------------------------------------- */
  /* ------------------------------------------- Function ---------------------------------------- */


  let [employees, setEmployees] = useState([])
  let [filtredEmployees, setFiltredEmployees] = useState([])
  let [selectedEmployeeType,  setSelectedEmployeeType ] = useState('')
  let [selectedEmployeesId, setSelectedEmployeesId ] = useState('')
  const invoiceTotal = getTotal(filtredEmployees)

  /* get employees list  */
  useEffect(() => {
    getAllEmployees()
  }, [])

  const getAllEmployees = async () => {
    const response = await axios.get(`${endPoint}/employees`)
    setEmployees(response.data)
    setFiltredEmployees(response.data)
  }
  /* get employees list  */


  /* --------table-------- */
  const [value, setValue] = React.useState([null, null]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  /* --------table-------- */



  /* --------- Dialog --------- */

  const [addDialogIsOpen, setAddDialogIsOpen] = React.useState(false);
  const [depenseId, setRevenuId] = React.useState(null);


  const openAddDialog = (depenseId) => {
    setAddDialogIsOpen(true);
    setRevenuId(depenseId)
  };

  const closeAddDialog = () => {
    setAddDialogIsOpen(false);
  };
  /* --------- end Dialog --------- */

  function getTotal(items) {
    return items.map(({ payrollAmount }) => payrollAmount).reduce((sum, i) => sum + i, 0);
  }

  /* --------- start Filtrage ----------- */
  const selectedEmployee = (event) => {
    setSelectedEmployeesId(event.target.value);
    filterTable(selectedEmployeeType, event.target.value)
  };

  const selectedTypeDeSalarie = (event) => {
    setSelectedEmployeeType(event.target.value);
    filterTable(event.target.value, selectedEmployeesId)
  };

  const filterTable = (employeeType, employeesId) => {
    if (employeeType !== '' && employeesId === '') {
      if (employeeType === 'Tout') {
        setFiltredEmployees(employees)
      } else {
        let newStud = employees.filter(student => student.employeeType === employeeType)
        setFiltredEmployees(newStud)
      }
    } else if (employeeType === '' && employeesId !== '') {
      if (employeesId === 'Tout') {
        setFiltredEmployees(employees)
      } else {
        let newStud = employees.filter(student => student.selectedEmployeesId === employeesId)
        setFiltredEmployees(newStud)
      }
    } else if (employeeType !== '' && employeesId !== '') {
      if (employeesId === 'Tout' && employeeType === 'Tout') {
        setFiltredEmployees(employees)
      }
      else if (employeesId === 'Tout' && employeeType !== 'Tout') {
        let newStud = employees.filter(student => student.employeeType === employeeType)
        setFiltredEmployees(newStud)
      }
      else if (employeesId !== 'Tout' && employeeType === 'Tout') {
        let newStud = employees.filter(student => student.selectedEmployeesId === employeesId)
        setFiltredEmployees(newStud)
      } else {
        let newStud = employees.filter(student => student.selectedEmployeesId === employeesId && student.employeeType === employeeType)
        setFiltredEmployees(newStud)
      }
    }
  }

  // const filterTable = (studentId, year) => {
  //   if (studentId !== '' && year === '') {
  //     if (studentId === 'Tout') {
  //       setFiltredEmployees(employees)
  //     } else {
  //       let newStud = employees.filter(student => student.id === studentId)
  //       setFiltredEmployees(newStud)
  //     }
  //   } else if (studentId === '' && year !== '') {
  //     if (year === 'Tout') {
  //       setFiltredEmployees(employees)
  //     } else {
  //       let newStud = employees.map(student => {
  //         student.depenses = student.depenses.filter(revenu => revenu.anneeScolaire === year)
  //         return student;
  //       })
  //       setFiltredEmployees(newStud)
  //     }
  //   } else if (studentId !== '' && year !== '') {
  //     if (year === 'Tout' && studentId === 'Tout') {
  //       setFiltredEmployees(employees)
  //     }
  //     else if (year === 'Tout' && studentId !== 'Tout') {
  //       let newStud = employees.filter(student => student.id === studentId)
  //       setFiltredEmployees(newStud)
  //     }
  //     else if (year !== 'Tout' && studentId === 'Tout') {
  //       let newStud = employees.filter(student => student.yearOfFormation === year)
  //       setFiltredEmployees(newStud)
  //     } else {
  //       let newStud = employees.filter(student => student.yearOfFormation === year && student.id === studentId)
  //       setFiltredEmployees(newStud)
  //     }
  //   }
  // }
  /* --------- end Filtrage ----------- */


  /* -------------------------------------------- return ------------------------------------------ */
  return (
    <div>
      <div className="allContent">
        {/* -------------start breadcrumb-------------- */}
        <h3 className="mt-2 mb-3">Depense : </h3>
        {/* -------------end breadcrumb-------------- */}

        {/* -------------start barFiltrage-------------- */}
        <div className="bare d-flex justify-content-between">
          <div className="filter d-flex">
            {/* select */}
            <Box sx={{ minWidth: 200 }} className="mr-3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Salaries :</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Salaries :"
                  value={selectedEmployeesId}
                  onChange={selectedEmployee}
                >
                  <MenuItem value='Tout'>Tout</MenuItem>
                  {employees.map(function (employee, i) {
                    return <MenuItem key={i} value={employee.id}>{employee.fullName}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Box>

            {/* select */}
            <Box sx={{ minWidth: 180 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type De Salaries :</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedEmployeeType}
                  label="Type De Salaries :"
                  onChange={selectedTypeDeSalarie}
                >
                  <MenuItem value='Tout'>Tout</MenuItem>
                  <MenuItem value='Fourmateur'>Fourmateur</MenuItem>
                  <MenuItem value='Secrétaire'>Secrétaire</MenuItem>
                  <MenuItem value='Autre'>Autre</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          {/* date */}
          <div className="datee">
            <Stack spacing={3}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                localeText={{ start: 'Mobile start', end: 'Mobile end' }}
              >
                <MobileDateRangePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                localeText={{ start: 'Desktop start', end: 'Desktop end' }}
              >
              </LocalizationProvider>
            </Stack>
          </div>
          {/* button */}
          <div className="add">
            <Button variant="outlined" onClick={() => openAddDialog(null)} >ajouter une Dépense</Button>
          </div>
        </div>
        {/* -------------end barFiltrage-------------- */}
        <br />
        {/* -------------start table-------------- */}
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead className="bg_headd">
              <TableRow>
                <TableCell />
                <TableCell>Nom et Prenom</TableCell>
                <TableCell align="right">Type de Salarie</TableCell>
                <TableCell align="right">Type de Travail</TableCell>
                <TableCell align="right">Montant Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtredEmployees
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <Row key={row.name} row={row} onUpdate={getAllEmployees} />
                ))}
              <TableRow className="bg_total">
                <TableCell rowSpan={2} />
                <TableCell rowSpan={2} />
                <TableCell rowSpan={2} />
                <TableCell colSpan={1}> Total :</TableCell>
                <TableCell align="right">{invoiceTotal > 0 ? invoiceTotal.toFixed(2) : 0} DH</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={filtredEmployees.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        {/* -------------end table-------------- */}

        {/* -------------start dialog-------------- */}
        <DepenseDialog employeeId={depenseId} open={addDialogIsOpen} onClose={closeAddDialog} onUpdate={getAllEmployees} />
        {/* -------------start dialog-------------- */}

      </div>
    </div >
  )
}

export default Depense