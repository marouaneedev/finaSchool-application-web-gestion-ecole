import React from "react";
import Button from '@mui/material/Button';

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

import DeleteIcon from '@mui/icons-material/Delete';

/* ------- table ------- */
function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

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
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Montant</TableCell>
                    <TableCell align="right">Année Scolaire</TableCell>
                    <TableCell align="right">Type Paiment</TableCell>
                    <TableCell align="right" >Action</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                      <TableCell>
                         <DeleteIcon />
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
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('said', 159, 6.0, 24, 4.0, 3.99),
  createData('samir', 237, 9.0, 37, 4.3, 4.99),
  createData('leila', 262, 16.0, 24, 6.0, 3.79),
  createData('farid', 305, 3.7, 67, 4.3, 2.5),
  createData('lamia', 356, 16.0, 49, 3.9, 1.5),
  createData('khadija', 356, 16.0, 49, 3.9, 1.5),
  createData('samira', 356, 16.0, 49, 3.9, 1.5),
  createData('farida', 356, 16.0, 49, 3.9, 1.5),
];
/* ------- table ------- */

function Revenu() {
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

  return (
    <div>
      <div className="allContent">
        {/* -------------start breadcrumb-------------- */}
        <h3 className="mt-2 mb-3">Revenu : </h3>
        {/* -------------end breadcrumb-------------- */}

        {/* -------------start barFiltrage-------------- */}
        <div className="bare d-flex justify-content-between">
          <div className="filter d-flex">
            {/* select */}
            <Box sx={{ minWidth: 120 }} className="mr-3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Etudiants</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={"yearOfFormation"}
                  label="Année"
                  onChange={"selectedYear"}
                >
                  <MenuItem value="tout">Tout</MenuItem>
                  <MenuItem value="1 année">1annee</MenuItem>
                  <MenuItem value="2 année">2annee</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* select */}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Année</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={"formation"}
                  label="formation"
                  onChange={"selectedFormation"}
                >
                  <MenuItem value='tout'>Tout</MenuItem>
                  <MenuItem value='Dev'>1 année</MenuItem>
                  <MenuItem value='Design'>2 année</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* date */}
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
            <Button variant="outlined" /* onClick={() => openAddDialog(null)} */ >ajouter un Revenu</Button>
          </div>
        </div>
        {/* -------------end barFiltrage-------------- */}
        <br />
        {/* -------------start table-------------- */}
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Nom et Prenom</TableCell>
                <TableCell align="right">Prix Total</TableCell>
                <TableCell align="right">Montant Payé</TableCell>
                <TableCell align="right">Montant Resté</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <Row key={row.name} row={row} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        {/* -------------end table-------------- */}

      </div>
    </div >
  )
}

export default Revenu
