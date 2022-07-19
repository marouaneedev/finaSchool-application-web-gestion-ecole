import React, { Component } from 'react'
import axios from 'axios'
import("./contact.css")


const endPoint = 'http://localhost:8000/api/message'


export class Contact extends Component {


  state = {
    email: '',
    message: '',
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  saveMessage = async (e) => {
    e.preventDefault();
    await axios.post(endPoint, this.state).then((res) => {
      console.log(res.data)
      if (res.data.status === 200) {
        this.setState({
          email: '',
          message: '',
        });
      }
    });
  }


  render() {
    return (
      <div>
        <section className="contactSection" id="contactSection">
          <div className="container">
            <div className="contentTop text-center">
              <h1>Contact Us</h1>
              <hr className="lineHr mb-5" />
            </div>

            <div className="grid">
              <div className="col-12 md:col-6 lg:col-6 sm:flex-nowrap p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  rerum fuga fugit illum at atque placeat ipsum nesciunt, eligendi
                  quibusdam?
                </p>
                <p>+212643527228</p>
                <p>265 Avenue Hassan II 80020 agadir</p>
              </div>
              <div className="col-12 md:col-6 lg:col-6 p-3">
                <form onSubmit={this.saveMessage}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="inputtt"
                      id="exampleInputEmail1"
                      name="email"
                      onChange={this.handleInput}
                      value={this.state.email}
                      aria-describedby="emailHelp"
                      placeholder="Email address"

                    />
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="textarea"
                      className="textarea"
                      id="exampleInputEmail1"
                      name="message"
                      onChange={this.handleInput}
                      value={this.state.message}
                      placeholder="Your Message :"
                    />
                    {/* <label className="opacity-50 mt-0">Your Message :</label> */}
                  </div>
                  <button type="submit" className="bttn">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Contact