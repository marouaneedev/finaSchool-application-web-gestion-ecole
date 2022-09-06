import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import HeadShake from "react-reveal/HeadShake";
import { useSnackbar } from 'notistack'


function Login() {

  const { enqueueSnackbar } = useSnackbar();
  const [userName,setUserName]= useState("");
  const [password,setPassword]= useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user-info')){
      navigate("/dashboard");
    }
  }, [navigate] )

  async function login(e){
    console.warn(userName,password)
    e.preventDefault();
    let item={userName,password};
    let result= await fetch("http://localhost:8000/api/login",{
      method: "POST",
      headers:{
        "Content-type":"application/json",
        "Accept":"application/json"

      },
      body: JSON.stringify(item)
    });
    result= await result.json();
    if (result.userName){

      localStorage.setItem('user-info',JSON.stringify(result))
      navigate("/dashboard")
      enqueueSnackbar('You are successfully logged in', { variant: 'success' });

      
    }else{
      navigate("/login")
      setUserName('');
      setPassword('');
      enqueueSnackbar('Oops ! your username or password is wrong', { variant: 'error' });
    }

  }

  return (
      <div className="loginn">
        <div className="login-page text-center">
          <HeadShake>
            <img src="/images/login_logo.png" className="logoImg" alt="img" />
            <div className="form">
              <form className="login-form">
                <input type="text" placeholder="username" id="userName" name="userName"  value={userName} onChange={(e)=>setUserName(e.target.value)} />
                <input type="password" placeholder="password" id="password" name="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button onClick={login}>login</button>
                {/* <p className="message">
                  <a href="/login">Forget My Password?</a>
                </p> */}
              </form>
            </div>
          </HeadShake>
        </div>
      </div>
  )
}

export default Login


