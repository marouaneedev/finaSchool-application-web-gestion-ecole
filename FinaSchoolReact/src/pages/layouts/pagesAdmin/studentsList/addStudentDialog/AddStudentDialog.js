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
import "./AddStudentDialog"




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
        await axios.post(endPoint, {fullName:fullName, gender:gender, dateOfBirthday:dateOfBirthday, cin:cin, address:address, phoneNumber:phoneNumber, email:email, formation:formation, yearOfFormation:yearOfFormation, totatAmount:totatAmount, payrollAmount:payrollAmount, typePayment:typePayment}).then((response) => {
            if(response.status === 201){
                newStudent(response.data);
                closeDialog();
                clearFrom();
            }
        })
    }

    const update = async () => {
        await axios.put(`${endPoint}/${studentId}`, {fullName:fullName, gender:gender, dateOfBirthday:dateOfBirthday, cin:cin, address:address, phoneNumber:phoneNumber, email:email, formation:formation, yearOfFormation:yearOfFormation, totatAmount:totatAmount, payrollAmount:payrollAmount, typePayment:typePayment}).then((response) => {
            if(response.status === 200){
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
    React.useEffect(()=>{
        if(open && studentId){
            getStudentById(studentId);
        }
    },[open, studentId])

    return (
        <Dialog
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
                        <select value={formation} onChange={(e) => setFormation(e.target.value)}>
                            <option>Formation</option>
                            <option value="Dev">Dev</option>
                            <option value="Design">Design</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <select value={yearOfFormation} onChange={(e) => setYearOfFormation(e.target.value)}>
                            <option>Year Of Formation</option>
                            <option value="1 année">1 année</option>
                            <option value="2 année">2 année</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">totat Amount</label>
                        <input value={totatAmount} onChange={(e) => setTotatAmount(e.target.value)} type='number' className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Payroll Amount</label>
                        <input value={payrollAmount} onChange={(e) => setPayrollAmount(e.target.value)} type='number' className="form-control" />
                    </div>
                    <div className="mb-3">
                        <select value={typePayment} onChange={(e) => setTypePayment(e.target.value)}>
                            <option>Type Payment</option>
                            <option value="espace">espace</option>
                            <option value="chéque">chéque</option>
                        </select>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            {!studentId
                ?<Button onClick={store} type="submit" className="btn btn-primary"> Ajouter </Button>
                :<Button onClick={update} type="submit" className="btn btn-primary"> Modifier </Button>
            }
            </DialogActions>
        </Dialog>
    )
}
