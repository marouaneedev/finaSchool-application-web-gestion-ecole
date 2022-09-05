import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import HeadShake from "react-reveal/HeadShake";
import axios from "axios";
import { useSnackbar } from 'notistack'


function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loginInput, setLogin] = useState({
    userName: "",
    password: "",
  });
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios.get('http://localhost:8000/api/user/1')
      .then(response => {
        setUser(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handelChange = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value })
  }


  const loginSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userName: loginInput.userName,
      password: loginInput.password,
    }
    if (data.userName === user.userName && data.password === user.password) {
      enqueueSnackbar('You are successfully logged in', { variant: 'success' });
      navigate("/dashboard");
    } else {
      enqueueSnackbar('Oops ! please try again', { variant: 'error' }); //Input is empty please type anything
      setLogin({ userName: "", password: "" });
    }

  }


  return (
      <div className="loginn">
        <div className="login-page text-center">
          <HeadShake>
            <img src="/images/login_logo.png" className="logoImg" alt="img" />
            <div className="form">
              <form className="login-form">
                <input type="text" placeholder="username" name="userName" value={loginInput.userName} onChange={handelChange} />
                <input type="password" placeholder="password" name="password" value={loginInput.password} onChange={handelChange} />
                <button onClick={loginSubmit}>login</button>
                <p className="message">
                  <a href="/login">Forget My Password?</a>
                </p>
              </form>
            </div>
          </HeadShake>
        </div>
      </div>
  )
}

export default Login
