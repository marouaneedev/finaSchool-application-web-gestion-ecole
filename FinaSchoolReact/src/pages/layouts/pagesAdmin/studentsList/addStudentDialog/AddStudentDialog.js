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
import axios from 'axios'
import * as moment from 'moment'
import "./AddStudentDialog"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';




const endPoint = 'http://localhost:8000/api/student'

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

export default function AddStudentDialog(props) {
    const { studentId, open, onClose, newStudent, updatedStudent } = props

    const closeDialog = () => {
        clearFrom();
        props.onClose();
    };

    const [fullName, setfullName] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirthday, setDateOfBirthday] = useState('')
    const [cin, setCin] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [formation, setFormation] = useState('')
    const [yearOfFormation, setYearOfFormation] = useState('')
    const [totatAmount, setTotatAmount] = useState('')
    const [payrollAmount, setPayrollAmount] = useState('')
    const [typePayment, setTypePayment] = useState('')

    const clearFrom = () => {
        setfullName('');
        setGender('');
        setDateOfBirthday('');
        setCin('');
        setAddress('');
        setPhoneNumber('');
        setEmail('');
        setFormation('');
        setYearOfFormation('');
        setTotatAmount('');
        setPayrollAmount('');
        setTypePayment('');
    }

    const store = async () => {
        await axios.post(endPoint, { fullName: fullName, gender: gender, dateOfBirthday: moment(dateOfBirthday).format('YYYY-MM-DD'), cin: cin, address: address, phoneNumber: phoneNumber, email: email, formation: formation, yearOfFormation: yearOfFormation, totatAmount: totatAmount, payrollAmount: payrollAmount, typePayment: typePayment }).then((response) => {
            if (response.status === 201) {
                newStudent(response.data);
                closeDialog();
                clearFrom();
            }
        })
    }

    const update = async () => {
        await axios.put(`${endPoint}/${studentId}`, { fullName: fullName, gender: gender, dateOfBirthday: moment(dateOfBirthday).format('YYYY-MM-DD'), cin: cin, address: address, phoneNumber: phoneNumber, email: email, formation: formation, yearOfFormation: yearOfFormation, totatAmount: totatAmount, payrollAmount: payrollAmount, typePayment: typePayment }).then((response) => {
            if (response.status === 200) {
                updatedStudent(response.data)
                closeDialog();
                clearFrom();
            }
        })
    }

    const getStudentById = async (id) => {
        await axios.get(`${endPoint}/${id}`).then((response) => {
            const student = response.data
            setfullName(student.fullName);
            setGender(student.gender);
            setDateOfBirthday(student.dateOfBirthday);
            setCin(student.cin);
            setAddress(student.address);
            setPhoneNumber(student.phoneNumber);
            setEmail(student.email);
            setFormation(student.formation);
            setYearOfFormation(student.yearOfFormation);
            setTotatAmount(student.totatAmount);
            setPayrollAmount(student.payrollAmount);
            setTypePayment(student.typePayment);
        })
    }

    /** Update */
    React.useEffect(() => {
        if (open && studentId) {
            getStudentById(studentId);
        }
    }, [open, studentId])

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
                Inscription :
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
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                inputFormat="yyyy-MM-dd"
                                label="Date Of Nissance :"
                                value={dateOfBirthday}
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
                                <InputLabel id="demo-simple-select-label">Formation :</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formation}
                                    label="Formation :"
                                    onChange={(e) => setFormation(e.target.value)}
                                >
                                    <MenuItem value="Dev">Dev</MenuItem>
                                    <MenuItem value="Design">Design</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="mb-3">
                        <Box sx={{ '& > :not(style)': { m: 1, width: '100%' } }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Année Scolaire :</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={yearOfFormation}
                                    label="Année Scolaire :"
                                    onChange={(e) => setYearOfFormation(e.target.value)}
                                >
                                    <MenuItem value="1 année">1 année</MenuItem>
                                    <MenuItem value="2 année">2 année</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="mb-3">
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '100%' }, }}
                            noValidate
                            label="Prix Total :"
                            autoComplete="off"
                            onChange={(e) => setTotatAmount(e.target.value)}
                        >
                            <TextField value={totatAmount} id="outlined-basic" type='text' label="Prix Total :" variant="outlined" />
                        </Box>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {!studentId
                    ? <Button onClick={store} type="submit" variant="outlined"> Ajouter </Button>
                    : <Button onClick={update} type="submit" variant="outlined"> Modifier </Button>
                }
            </DialogActions>
        </Dialog>
    )
}
