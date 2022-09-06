import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../../../../assets/admin/js/scripts";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import './NavbarAdmin.css'
import Button from '@mui/material/Button';
import axios from 'axios'


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function NavbarAdmin() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState({});


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/user/1')
      .then(response => {
        setUser(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <nav className="sb-topnav navbar navbar-expand navbar-dark navv_bg">
        <Link className="navbar-brand ps-3" to="dashboard">
          <img src="/images/logo.png" className="logoImgg" alt="img" />
        </Link>

        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          to="#!"
        >
          <i className="fas fa-bars" />
        </button>

        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></form>

        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <span className="adminName">user : {user.userName}</span>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              to="to"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              
              <i className="fas fa-user fa-fw" />
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link className="dropdown-item" to="setting">
                  <SettingsIcon /> Settings
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="#"  onClick={handleClickOpen}>
                  <LogoutIcon /> Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="text-center py-5"
      >
        <DialogTitle id="alert-dialog-title" >
          {"Log out"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions className="m-auto">
          <Link onClick={()=> localStorage.removeItem('user-info')} autoFocus className="mx-3" to="/login">
          <Button variant="contained"> OK </Button> 
          </Link>
          <Button onClick={handleClose} variant="contained">Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NavbarAdmin
