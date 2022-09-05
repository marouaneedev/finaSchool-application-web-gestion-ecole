import React, { useState, useEffect } from "react";
import "./settingPage.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { useSnackbar } from 'notistack'
import { useNavigate } from "react-router-dom";




function SettingPage() {

  const [user, setUser] = useState({});
  let [updateUserName, setUpdateUserName] = useState({
    oldUserName: "",
    newUserName: "",
    confirmUserName: ""
  });
  let [updatePassword, setUpdatePassword] = useState({
    oldpassword: "",
    newpassword: "",
    confirmPassword: ""
  });
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();


  const handelChange = (e) => {
    e.persist();
    setUpdateUserName({ ...updateUserName, [e.target.name]: e.target.value })
    setUpdatePassword({ ...updatePassword, [e.target.name]: e.target.value })


  }

  const updateUser = async (e) => {
    e.preventDefault();
    if (updateUserName.oldUserName === user.userName && updateUserName.newUserName === updateUserName.confirmUserName) {
      await axios.put(`http://localhost:8000/api/user/1`, { userName: updateUserName.confirmUserName }).then((response) => {
        if (response.status === 200) {
          enqueueSnackbar('Your userName updated', { variant: 'success' });
          setUpdateUserName({ oldUserName: "", newUserName: "", confirmUserName: "" })
        }
      })
    } else {
      enqueueSnackbar('Oops ! please try again', { variant: 'error' });
      setUpdateUserName({ oldUserName: "", newUserName: "", confirmUserName: "" })

    }
  }

  const updatePssw = async (e) => {
    e.preventDefault();
    if (updatePassword.oldpassword === user.password && updatePassword.newpassword === updatePassword.confirmPassword) {
      await axios.put(`http://localhost:8000/api/user/1`, { password: updatePassword.confirmPassword }).then((response) => {
        if (response.status === 200) {
          enqueueSnackbar('Your password updated', { variant: 'success' });
          setUpdateUserName({ oldpassword: "", newpassword: "", confirmPassword: "" })
          navigate("/login");

        }
      })
    } else {
      enqueueSnackbar('Oops ! please try again', { variant: 'error' });
      setUpdateUserName({ oldpassword: "", newpassword: "", confirmPassword: "" })

    }
  }


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
    <div className="allContent">
      {/* -------------start breadcrumb-------------- */}
      <h3 className="mt-2 mb-3">Setting : </h3>
      {/* -------------end breadcrumb-------------- */}

      <div className="ChangeUserName">
        <form>
          <h4>Change UserName</h4>
          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}

          >
            <TextField
              label="Old UserName"
              value={updateUserName.oldUserName}
              onChange={handelChange}
              name="oldUserName"
            />
          </Box>
          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
          >
            <TextField
              label="New UserName"
              value={updateUserName.newUserName}
              onChange={handelChange}
              name="newUserName"

            />
          </Box>

          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
          >
            <TextField
              label="Confirm New UserName"
              value={updateUserName.confirmUserName}
              onChange={handelChange}
              name="confirmUserName"

            />
          </Box>
          <Button variant="contained" onClick={updateUser}>Update</Button>
        </form>
      </div>

      <div className="ChangePassword">
        <form>
          <h4>Change Password</h4>
          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
          >
            <TextField
              id="outlined-name"
              label="Old Password"
              value={updatePassword.oldpassword}
              onChange={handelChange}
              name="oldpassword"

            />
          </Box>
          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
          >
            <TextField
              id="outlined-name"
              label="New Password"
              value={updatePassword.newpassword}
              onChange={handelChange}
              name="newpassword"

            />
          </Box>

          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
          >
            <TextField
              id="outlined-name"
              label="Confirm New Password"
              value={updatePassword.confirmPassword}
              onChange={handelChange}
              name="confirmPassword"

            />
          </Box>
          <Button variant="contained" onClick={updatePssw}>Update</Button>
        </form>
      </div>

    </div >
  );
}

export default SettingPage
