import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"
import Button from '@mui/material/Button';
import * as moment from 'moment'
import axios from 'axios'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import "./ajouterSalarie.css"




const endPoint = 'http://localhost:8000/api/employee'

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

export default function AjouterSalarieDialog(props) {
    const { employeeId, open, onClose, newStudent, updatedStudent } = props

    const closeDialog = () => {
        clearFrom();
        props.onClose();
    };

    const [fullName, setfullName] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirthday, setDateOfBirthday] = useState(null)
    const [cin, setCin] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [typeEmployee, setTypeEmployee] = useState('')
    const [typeWork, setTypeWork] = useState('')

    const clearFrom = () => {
        setfullName('');
        setGender('');
        setDateOfBirthday('');
        setCin('');
        setAddress('');
        setPhoneNumber('');
        setEmail('');
        setTypeEmployee('');
        setTypeWork('');
    }

    const store = async () => {
        await axios.post(endPoint, { fullName: fullName, gender: gender, dateOfBirthday: moment(dateOfBirthday).format('YYYY-MM-DD'), cin: cin, address: address, phoneNumber: phoneNumber, email: email, typeEmployee: typeEmployee, typeWork: typeWork }).then((response) => {
            if (response.status === 201) {
                newStudent(response.data);
                closeDialog();
                clearFrom();
            }
        })
    }

    const update = async () => {
        await axios.put(`${endPoint}/${employeeId}`, { fullName: fullName, gender: gender, dateOfBirthday: moment(dateOfBirthday).format('YYYY-MM-DD'), cin: cin, address: address, phoneNumber: phoneNumber, email: email, typeEmployee: typeEmployee, typeWork: typeWork }).then((response) => {
            if (response.status === 200) {
                updatedStudent(response.data)
                closeDialog();
                clearFrom();
            }
        })
    }

    const getStudentById = async (id) => {
        await axios.get(`${endPoint}/${id}`).then((response) => {
            const employee = response.data
            setfullName(employee.fullName);
            setGender(employee.gender);
            setDateOfBirthday(employee.dateOfBirthday);
            setCin(employee.cin);
            setAddress(employee.address);
            setPhoneNumber(employee.phoneNumber);
            setEmail(employee.email);
            setTypeEmployee(employee.typeEmployee);
            setTypeWork(employee.typeWork);
        })
    }

    /** Update */
    React.useEffect(() => {
        if (open && employeeId) {
            getStudentById(employeeId);
        }
    }, [open, employeeId])

    return (
        <Dialog
            className="dialoog"
            fullWidth
            maxWidth="sm"
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={closeDialog}>
                Ajouter un Salarier :
            </BootstrapDialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">

                    <div className="mb-3">
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '100%' }, }}
                            noValidate
                            autoComplete="off"
                            onChange={(e) => setfullName(e.target.value)}
                        >
                            <TextField value={fullName} id="outlined-basic" type='text' label="Nom et Prenom :" variant="outlined" />
                        </Box>
                    </div>

                    <div className="mb-3">
                        <Box sx={{ '& > :not(style)': { m: 1, width: '100%' } }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sexe :</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    label="Sexe"
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <MenuItem value="Homme">Homme</MenuItem>
                                    <MenuItem value="Femme">Femme</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    <div className="mb-3 pad-date">
                        {/* <label className="form-label">Date Of Nissance</label>
                        <input value={dateOfBirthday} onChange={(e) => setDateOfBirthday(e.target.value)} type='date' className="form-control" /> */}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                inputFormat="yyyy-MM-dd"
                                label="Date Of Nissance :"
                                value={dateOfBirthday}
                                // type='date'
                                onChange={(e) => setDateOfBirthday(e)}
                                renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} />}
                            />
                        </LocalizationProvider>
                    </div>

                    <div className="mb-3">
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '100%' }, }}
                            noValidate
                            autoComplete="off"
                            onChange={(e) => setCin(e.target.value)}
                        >
                            <TextField value={cin} id="outlined-basic" type='text' label="CIN :" variant="outlined" />
                        </Box>
                    </div>

                    <div className="mb-3">
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '100%' }, }}
                            noValidate
                            autoComplete="off"
                            onChange={(e) => setAddress(e.target.value)}
                        >
                            <TextField value={address} id="outlined-basic" type='text' label="Address :" variant="outlined" />
                        </Box>
                    </div>

                    <div className="mb-3">
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '100%' }, }}
                            noValidate
                            autoComplete="off"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        >
                            <TextField value={phoneNumber} id="outlined-basic" type='text' label="Télephone :" variant="outlined" />
                        </Box>
                    </div>

                    <div className="mb-3">
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '100%' }, }}
                            noValidate
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                        >
                            <TextField value={email} id="outlined-basic" type='email' label="Email :" variant="outlined" />
                        </Box>
                    </div>

                    <div className="mb-3">
                        <Box sx={{ '& > :not(style)': { m: 1, width: '100%' } }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type de Salarier :</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={typeEmployee}
                                    label="TypeDeSalarier"
                                    onChange={(e) => setTypeEmployee(e.target.value)}
                                >
                                    <MenuItem value="Formateur">Formateur</MenuItem>
                                    <MenuItem value="Secrétaire">Secrétaire</MenuItem>
                                    <MenuItem value="Auter">Auter</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    <div className="mb-3">
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '100%' }, }}
                            noValidate
                            autoComplete="off"
                            onChange={(e) => setTypeWork(e.target.value)}
                        >
                            <TextField value={typeWork} id="outlined-basic" type='text' label="Type de Travail :" variant="outlined" />
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
