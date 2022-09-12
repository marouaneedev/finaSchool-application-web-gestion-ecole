import React from "react";
import Button from '@mui/material/Button';
import AddDialogRevenu from './addDialogRevenu/AddDialogRevenu'
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
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { red } from '@mui/material/colors';
import './revenu.css'

import DeleteIcon from '@mui/icons-material/Delete';

const endPoint = 'http://localhost:8000/api'




/* ------- table ------- */
function Row(props) {
  const { row, onUpdate } = props;
  const [open, setOpen] = React.useState(false);
  // 
  /*  delet revenu row  */
  const deletRevenu = async (id) => {
    await axios.delete(`${endPoint}/revenu/${id}`).then((response) => {
      if (response.status === 200) {
        onUpdate()
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
        <TableCell align="right">{row.totatAmount.toFixed(2)} DH</TableCell>
        <TableCell align="right">{row.payrollAmount2 ? row.payrollAmount2.toFixed(2) : 0} DH</TableCell>
        <TableCell align="right">{row.totatAmount - row.payrollAmount2} DH</TableCell>
        <TableCell align="right">{row.totatAmount - row.payrollAmount2 === 0 ? <PriceCheckIcon fontSize="large" color="success" /> : <PriceCheckIcon fontSize="large" sx={{ color: red['A700'] }} />} </TableCell>
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
                    <TableCell>Année Scolaire</TableCell>
                    <TableCell align="right">Montant</TableCell>
                    <TableCell align="right">Type Paiment</TableCell>
                    <TableCell align="right" >Action</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody className="bg_table_body">
                  {row.revenus.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.created_at}
                      </TableCell>
                      <TableCell>{historyRow.anneeScolaire}</TableCell>
                      <TableCell align="right">{historyRow.montantPaye.toFixed(2)} DH</TableCell>
                      <TableCell align="right">{historyRow.typePaiment}</TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="delete" onClick={() => deletRevenu(historyRow.id)} > <DeleteIcon /> </IconButton>
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
    totatAmount: PropTypes.number.isRequired,
    payrollAmount: PropTypes.number.isRequired,
    revenus: PropTypes.arrayOf(
      PropTypes.shape({
        montantPaye: PropTypes.number.isRequired,
        studentId: PropTypes.string.isRequired,
        typePaiment: PropTypes.string.isRequired,
        anneeScolaire: PropTypes.string.isRequired,
      }),
    ).isRequired,
    // name: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired,
    // protein: PropTypes.number.isRequired,
  }).isRequired,
};
/* ------- table ------- */


/* ------------------------------------------- Function ------------------------------------------ */
/* ------------------------------------------- Function ------------------------------------------ */
function Revenu() {
  /* ------------------------------------------- Function ------------------------------------------ */
  /* ------------------------------------------- Function ------------------------------------------ */


  let [students, setStudents] = useState([])
  let [filtredStudents, setFiltredStudents] = useState([])
  let [selectedAnnee, setSelectedAnnee] = useState('')
  let [selectedStudentId, setSelectedStudentId] = useState('')
  const invoiceTotal = getTotal(filtredStudents)
  const invoiceTotalPaye = getTotalPaye(filtredStudents)

  useEffect(() => {
    getAllStudents()
  }, [])

  const getAllStudents = async () => {
    const response = await axios.get(`${endPoint}/students`)
    setStudents(response.data)
    setFiltredStudents(response.data)
  }


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

  /* --------- Dialog --------- */

  const [addDialogIsOpen, setAddDialogIsOpen] = React.useState(false);
  const [revenuId, setRevenuId] = React.useState(null);


  const openAddDialog = (revenuId) => {
    setAddDialogIsOpen(true);
    setRevenuId(revenuId)
  };

  const closeAddDialog = () => {
    setAddDialogIsOpen(false);
  };
  /* --------- end Dialog --------- */

  function getTotal(items) {
    return items.map(({ totatAmount }) => totatAmount).reduce((sum, i) => sum + i, 0);
  }

  function getTotalPaye(items) {
    return items.map(({ payrollAmount2 }) => payrollAmount2).reduce((sum, i) => sum + i, 0);
  }



  /* --------- start Filtrage ----------- */
  const selectedStudent = (event) => {
    setSelectedStudentId(event.target.value);
    filterTable(event.target.value, selectedAnnee)
  };

  const selectedAnne = (event) => {
    setSelectedAnnee(event.target.value);
    filterTable(selectedStudentId, event.target.value)
  };

  const filterTable = (studentId, year) => {
    if (studentId !== '' && year === '') {
      if (studentId === 'Tout') {
        setFiltredStudents(students)
      } else {
        let newStud = students.filter(student => student.id === studentId)
        setFiltredStudents(newStud)
      }
    } else if (studentId === '' && year !== '') {
      if (year === 'Tout') {
        setFiltredStudents(students)
      } else {
        let newStud = students.map(student => {
          student.revenus = student.revenus.filter(revenu => revenu.anneeScolaire === year)
          return student;
        })
        setFiltredStudents(newStud)
      }
    } else if (studentId !== '' && year !== '') {
      if (year === 'Tout' && studentId === 'Tout') {
        setFiltredStudents(students)
      }
      else if (year === 'Tout' && studentId !== 'Tout') {
        let newStud = students.filter(student => student.id === studentId)
        setFiltredStudents(newStud)
      }
      else if (year !== 'Tout' && studentId === 'Tout') {
        let newStud = students.filter(student => student.yearOfFormation === year)
        setFiltredStudents(newStud)
      } else {
        let newStud = students.filter(student => student.yearOfFormation === year && student.id === studentId)
        setFiltredStudents(newStud)
      }
    }
  }
  /* --------- end Filtrage ----------- */




  return (
    <div>
      <div className="allContent">
        {/* -------------start breadcrumb-------------- */}
        <h3 className="mt-2 mb-3">Revenu : </h3>
        {/* -------------end breadcrumb-------------- */}

        {/* -------------start barFiltrage-------------- */}
        <div className="bare grid">
          <div className="filter_one d-flex  col-12 md:col-12 lg:col-4 sm:flex-nowrap">
            {/* select Etudiants*/}
            <Box sx={{ minWidth: 200 }} className="mr-3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Etudiants :</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Etudiants :"
                  id="demo-simple-select"
                  value={selectedStudentId}
                  onChange={selectedStudent}
                >
                  <MenuItem value='Tout'>Tout</MenuItem>
                  {students.map(function (student, i) {
                    return <MenuItem key={i} value={student.id}>{student.fullName}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Box>
            {/* end select Etudiants*/}


            {/* select Année*/}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Année :</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Année :"
                  id="demo-simple-select"
                  value={selectedAnnee}
                  onChange={selectedAnne}
                >
                  <MenuItem value='Tout'>Tout</MenuItem>
                  <MenuItem value='1 année'>1 année</MenuItem>
                  <MenuItem value='2 année'>2 année</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* end date Année */}
          </div>


          <div className="filter_two  col-12 md:col-12 lg:col-4">
            {/* select Année*/}
            <div className="datee">
              <Stack spacing={3}>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  localeText={{ start: 'Date start', end: 'Date end' }}
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
            {/* select Année*/}
          </div>

          <div className="filter_three col-12 md:col-12 lg:col-4 bgggg text-center">
            {/* button ajouter un Revenu */}
            <div className="add">
              <Button variant="outlined" onClick={() => openAddDialog(null)} >ajouter un Revenu</Button>
            </div>
            {/* button ajouter un Revenu */}
          </div>

        </div>
        {/* -------------end barFiltrage-------------- */}
        <br />
        {/* -------------start table-------------- */}
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow className="bg_revenuheader">
                <TableCell />
                <TableCell>Nom et Prenom</TableCell>
                <TableCell align="right">Prix Total</TableCell>
                <TableCell align="right">Montant Payé</TableCell>
                <TableCell align="right">Montant Resté</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtredStudents
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <Row key={row.name} row={row} onUpdate={getAllStudents} />
                ))}
              <TableRow className="bg_revenufooter">
                <TableCell rowSpan={2} />
                <TableCell rowSpan={2} />
                <TableCell rowSpan={2} />
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{invoiceTotal > 0 ? invoiceTotal.toFixed(2) : 0} DH</TableCell>
              </TableRow>
              <TableRow className="bg_revenufooter">
                <TableCell>Total Payé</TableCell>
                <TableCell align="right">{`${((invoiceTotalPaye * 100) / invoiceTotal).toFixed(2)} %`}</TableCell>
                <TableCell align="right">{invoiceTotalPaye > 0 ? invoiceTotalPaye.toFixed(2) : 0} DH</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={filtredStudents.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        {/* -------------end table-------------- */}

        {/* -------------start dialog-------------- */}
        <AddDialogRevenu employeeId={revenuId} open={addDialogIsOpen} onClose={closeAddDialog} onUpdate={getAllStudents} />
        {/* -------------start dialog-------------- */}

      </div>
    </div >
  )
}

export default Revenu
