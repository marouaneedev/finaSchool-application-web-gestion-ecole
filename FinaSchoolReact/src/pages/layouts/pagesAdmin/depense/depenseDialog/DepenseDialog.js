import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import axios from 'axios'
import "./depenseDialog.css"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


const endPointdepense = 'http://localhost:8000/api/depense'
const endPointApi = 'http://localhost:8000/api'


const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};
/* -------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------- */
export default function DepenseDialog(props) {

    /* get data employee */
    let [employees, setEmployees] = useState([])
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [methodPaymment, setMethodPaymment] = useState('');
    const [montantPaye, setMontantPaye] = useState('')


    useEffect(() => {
        getAllEmployees()
    }, [])

    const getAllEmployees = async () => {
        const response = await axios.get(`${endPointApi}/employees`)
        setEmployees(response.data)
    }
    /* get data employee */

    const { employeeId, open, onClose, onUpdate } = props

    const closeDialog = () => {
        clearFrom();
        props.onClose();
    };

    const clearFrom = () => {
        setSelectedEmployee('');
        setMethodPaymment('');
        setMontantPaye('');
    }

    const store = async () => {
        
        await axios.post(endPointdepense, { montantPaye: montantPaye, typePaiment: methodPaymment, employee_id:  selectedEmployee.id}).then((response) => {
            if (response.status === 201) {
                onUpdate()
                closeDialog();
                clearFrom();
            }
        })
    }

    const update = async () => {
        /*await axios.put(`${endPoint}/${employeeId}`, { fullName: fullName, gender: gender, dateOfBirthday: dateOfBirthday, cin: cin, address: address, phoneNumber: phoneNumber, email: email, typeEmployee: typeEmployee, typeWork: typeWork }).then((response) => {
            if (response.status === 200) {
                updatedStudent(response.data)
                closeDialog();
                clearFrom();
            }
        })*/
    }

    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={closeDialog}>
            Ajouter une Dépense :
            </BootstrapDialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">

                    <div className="mb-3">
                        <br />
                        {/* <label className="form-label">Etudiant :</label> */}
                        <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }} className="mr-3">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Salaries :</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Salaries :"
                                    value={selectedEmployee}
                                    onChange={event =>setSelectedEmployee(event.target.value)}
                                    
                                >
                                    {employees.map(function (employee, i) {
                                        return <MenuItem key = {i} value={employee}>{employee.fullName}</MenuItem>
                                    })}

                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    <div className="mb-3 montant_paye">
                        <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Montant Payé"
                                value={montantPaye}
                                onChange={event => setMontantPaye(event.target.value)}
                            />
                        </Box>
                    </div>
                    <div className="mb-3">
                        {/* <label className="form-label">Type Paiment :</label> */}
                        <Box sx={{ minWidth: 300 }} className="mr-3">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type de Paiement :</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    label="Type de Paiement :"
                                    id="demo-simple-select"
                                    onChange={event => setMethodPaymment(event.target.value)}
                                >
                                    <MenuItem value="espèce">espèce</MenuItem>
                                    <MenuItem value="chéque">chéque</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {!employeeId
                    ? <Button onClick={store} type="submit" variant="outlined"> Ajouter </Button>
                    : <Button onClick={update} type="submit" variant="outlined"> Modifier </Button>
                }
            </DialogActions>
        </Dialog>
    )
}
