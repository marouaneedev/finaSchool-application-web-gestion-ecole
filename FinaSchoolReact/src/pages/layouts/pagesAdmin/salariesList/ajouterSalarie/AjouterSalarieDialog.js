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
import "./AjouterSalarieDialog"




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
    const [dateOfBirthday, setDateOfBirthday] = useState('')
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
        await axios.post(endPoint, { fullName: fullName, gender: gender, dateOfBirthday: dateOfBirthday, cin: cin, address: address, phoneNumber: phoneNumber, email: email, typeEmployee: typeEmployee, typeWork: typeWork }).then((response) => {
            if (response.status === 201) {
                newStudent(response.data);
                closeDialog();
                clearFrom();
            }
        })
    }

    const update = async () => {
        await axios.put(`${endPoint}/${employeeId}`, { fullName: fullName, gender: gender, dateOfBirthday: dateOfBirthday, cin: cin, address: address, phoneNumber: phoneNumber, email: email, typeEmployee: typeEmployee, typeWork: typeWork }).then((response) => {
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
            fullWidth
            maxWidth="sm"
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={closeDialog}>
                XXXXXXXX
            </BootstrapDialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div className="mb-3">
                        <label className="form-label">Nom et Prenom</label>
                        <input value={fullName} onChange={(e) => setfullName(e.target.value)} type='text' className="form-control" />
                    </div>
                    <div className="mb-3">
                        {/* <label className="form-label">Sexe</label>
                        <input value={gender} onChange={(e) => setGender(e.target.value)} type='text' className="form-control" /> */}
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option>Sexe</option>
                            <option value="man">man</option>
                            <option value="woman">woman</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date Of Nissance</label>
                        <input value={dateOfBirthday} onChange={(e) => setDateOfBirthday(e.target.value)} type='date' className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">CIN</label>
                        <input value={cin} onChange={(e) => setCin(e.target.value)} type='text' className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type='text' className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Télephone</label>
                        <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type='number' className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' className="form-control" />
                    </div>
                    <div className="mb-3">
                        {/* <label className="form-label">Formation</label>
                        <input value={formation} onChange={(e) => setFormation(e.target.value)} type='text' className="form-control" /> */}
                        <select value={typeEmployee} onChange={(e) => setTypeEmployee(e.target.value)}>
                            <option>Type de Salarier</option>
                            <option value="Formateur">Formateur</option>
                            <option value="Secretera">Secretera</option>
                            <option value="Auter">Auter</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Type de Travail</label>
                        <input value={typeWork} onChange={(e) => setTypeWork(e.target.value)} type='text' className="form-control" />
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {!employeeId
                    ? <Button onClick={store} type="submit" className="btn btn-primary"> Ajouter </Button>
                    : <Button onClick={update} type="submit" className="btn btn-primary"> Modifier </Button>
                }
            </DialogActions>
        </Dialog>
    )
}
