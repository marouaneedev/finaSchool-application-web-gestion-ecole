import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { useState } from "react"
import axios from 'axios'


const endPointAchat = 'http://localhost:8000/api/achat'
// const endPoint = 'http://localhost:8000/api'



/* -------- dialog header -------- */
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
/* -------- end dialog header -------- */


/* --------------------------------------- function start ----------------------------------------------- */
/* --------------------------------------- function start ----------------------------------------------- */
function DialogAchat(props) {

    const [idArticle, setIdArticle] = useState('');
    const [nomArticle, setNomArticle] = useState('');
    const [nomFrss, setNomFrss] = useState('')
    const [teleFrss, setTeleFrss] = useState('')
    const [prixDachat, setPrixDachat] = useState('')

    const { achatId, open, onClose, updatedPurchase, newPurchase } = props

    const closeDialog = () => {
        clearFrom();
        props.onClose();
    };

    const clearFrom = () => {
        setIdArticle('');
        setNomArticle('');
        setNomFrss('');
        setTeleFrss('');
        setPrixDachat('');
    }

    const store = async () => {
        
        await axios.post(endPointAchat, { idArticle: idArticle, nomArticle: nomArticle, nomFrss: nomFrss, teleFrss: teleFrss, prixDachat: prixDachat}).then((response) => {
            if (response.status === 201) {
                newPurchase(response.data);
                closeDialog();
                clearFrom();
            }
        })
    }

    const update = async () => {
        await axios.put(`${endPointAchat}/${achatId}`,{ idArticle: idArticle, nomArticle: nomArticle, nomFrss: nomFrss, teleFrss: teleFrss, prixDachat: prixDachat}).then((response) => {
            if (response.status === 200) {
                updatedPurchase(response.data)
                closeDialog();
                clearFrom();
            }
        })
    }

     /** Update */
     React.useEffect(() => {
        if (open && achatId) {
            getPurshId(achatId);
        }
    }, [open, achatId])


    const getPurshId = async (id) => {
        await axios.get(`${endPointAchat}/${id}`).then((response) => {
            const achat = response.data
            setIdArticle(achat.idArticle);
            setNomArticle(achat.nomArticle);
            setNomFrss(achat.nomFrss);
            setTeleFrss(achat.teleFrss);
            setPrixDachat(achat.prixDachat);
        })
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
                Ajouter un Achat :
            </BootstrapDialogTitle>
                <br/>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">

                    <div className="mb-3">
                        <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="ID Article :"
                                value={idArticle}
                                onChange={event => setIdArticle(event.target.value)}
                            />
                        </Box>
                    </div>
                    <div className="mb-3 ">
                        <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Nom Article :"
                                value={nomArticle}
                                onChange={event => setNomArticle(event.target.value)}
                            />
                        </Box>
                    </div>
                    <div className="mb-3 ">
                        <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Nom de Fournisseur"
                                value={nomFrss}
                                onChange={event => setNomFrss(event.target.value)}
                            />
                        </Box>
                    </div>

                    <div className="mb-3">
                        <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Telephon de Fournisseur :"
                                value={teleFrss}
                                onChange={event => setTeleFrss(event.target.value)}
                            />
                        </Box>
                    </div>

                    <div className="mb-3">
                        <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Prix D'achat :"
                                value={prixDachat}
                                onChange={event => setPrixDachat(event.target.value)}
                            />
                        </Box>
                    </div>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {!achatId
                    ? <Button onClick={store} type="submit" variant="outlined"> Ajouter </Button>
                    : <Button onClick={update} type="submit" variant="outlined"> Modifier </Button>
                }
            </DialogActions>
        </Dialog>
    )
}

export default DialogAchat