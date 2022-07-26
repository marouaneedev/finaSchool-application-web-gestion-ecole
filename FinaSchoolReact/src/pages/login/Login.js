import React, { Component } from "react";
import "./login.css";
import HeadShake from "react-reveal/HeadShake";

class Login extends Component {
  render() {
    return <div className="loginn">
      <div className="login-page text-center">
        <HeadShake>
          <img src="/images/login_logo.png" className="logoImg" alt="img" />
          <div className="form">
            <form className="login-form">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>login</button>
              <p className="message">
                <a href="fdf">Forget My Password?</a>
              </p>
            </form>
          </div>
        </HeadShake>
      </div>
    </div>;
  }
}

export default Login;
