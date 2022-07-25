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
import "./AddDialogRevenu"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';




// const endPoint = 'http://localhost:8000/api/employee'
const endPointRevenu = 'http://localhost:8000/api/revenu'
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
export default function AjouterSalarieDialog(props) {

    /* get data student */
    let [students, setStudents] = useState([])
    const [selectedStudent, setSelectedStudent] = useState('');
    const [methodPaymment, setMethodPaymment] = useState('');
    const [montantPaye, setMontantPaye] = useState('')


    useEffect(() => {
        getAllStudents()
    }, [])

    const getAllStudents = async () => {
        const response = await axios.get(`${endPointApi}/students`)
        setStudents(response.data)
    }
    /* get data student */

    const { employeeId, open, onClose, /* updatedStudent */ } = props

    const closeDialog = () => {
        clearFrom();
        props.onClose();
    };

    const clearFrom = () => {
        setSelectedStudent('');
        setMethodPaymment('');
        setMontantPaye('');
    }

    const store = async () => {
        
        await axios.post(endPointRevenu, { montantPaye: montantPaye, typePaiment: methodPaymment, anneeScolaire: selectedStudent.yearOfFormation, student_id:  selectedStudent.id}).then((response) => {
            if (response.status === 201) {
                // newStudent(response.data);
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
                Ajouter Un Revenu :
            </BootstrapDialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div className="mb-3">
                        <br />
                        {/* <label className="form-label">Etudiant :</label> */}
                        <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }} className="mr-3">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Etudiants</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedStudent}
                                    onChange={event =>setSelectedStudent(event.target.value)}
                                    
                                >
                                    {students.map(function (student, i) {
                                        return <MenuItem key = {i} value={student}>{student.fullName}</MenuItem>
                                    })}

                                </Select>
                            </FormControl>
                        </Box>
                        {/* <input value={fullName} onChange={(e) => setfullName(e.target.value)} type='text' className="form-control" /> */}
                    </div>
                    <div className="mb-3">
                        {/* <label className="form-label">Sexe</label>
                        <input value={gender} onChange={(e) => setGender(e.target.value)} type='text' className="form-control" /> */}
                        <label className="form-label">Année Scolaire :</label>
                        <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
                            <TextField
                                disabled
                                id="outlined-disabled"
                                value={selectedStudent.yearOfFormation}
                            />
                        </Box>
                        {/* <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option>Sexe</option>
                            <option value="man">man</option>
                            <option value="woman">woman</option>
                        </select> */}
                    </div>
                    <div className="mb-3">
                        {/* <label className="form-label">Date Of Nissance</label>
                        <input value={dateOfBirthday} onChange={(e) => setDateOfBirthday(e.target.value)} type='date' className="form-control" /> */}
                        {/* <label className="form-label">Montant Total :</label> */}
                        <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
                            <TextField
                                disabled
                                id="outlined-disabled"
                                value={selectedStudent.totatAmount}
                            />
                        </Box>

                    </div>
                    <div className="mb-3">
                        {/* <label className="form-label">Date Of Nissance</label>
                        <input value={dateOfBirthday} onChange={(e) => setDateOfBirthday(e.target.value)} type='date' className="form-control" /> */}
                        {/* <label className="form-label">Montant Payé :</label> */}
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
                                <InputLabel id="demo-simple-select-label">Type Paymment</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={event => setMethodPaymment(event.target.value)}
                                >
                                    <MenuItem value="espace">espace</MenuItem>
                                    <MenuItem value="chéque">chéque</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        {/* <input value={fullName} onChange={(e) => setfullName(e.target.value)} type='text' className="form-control" /> */}
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
