import React, { Component } from 'react'
import './preInscreption.css'
import axios from 'axios'
// import { useState } from "react"


const endPoint = 'http://localhost:8000/api/inscreption'


export class Preinscreption extends Component {


    state = {
        email: '',
        firstName: '',
        LastName: '',
        city: '',
        phoneNumber: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveInscreption = async (e) => {
        e.preventDefault();
        console.log(this.state)
        await axios.post(endPoint, this.state).then((res) => {
            console.log(res.data)
            if (res.data.status === 200) {
                this.setState({
                    email: '',
                    firstName: '',
                    LastName: '',
                    city: '',
                    phoneNumber: '',
                });
            }
        });
    }




    render() {
        return (
            <div>
                <section className="inscriptionSection" id="inscriptionSection">
                    <div className="container">
                        <div className="contentTop text-center">
                            <h1 className="my-5">Pré Insciption</h1>
                            <hr className="lineHr" />
                        </div>

                        <div className="grid" >
                            <div className="col-12 md:col-6 lg:col-6 sm:flex-nowrap p-3">
                                <h2>Pré-inscription</h2>
                                <h3>en ligne à eWA</h3>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                                    rerum fuga fugit illum at atque placeat ipsum nesciunt, eligendi
                                    quibusdam?
                                </p>
                            </div>
                            <div className="col-12 md:col-6 lg:col-6 p-3">
                                <form onSubmit={this.saveInscreption}>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            className="inputtt"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            name="email"
                                            placeholder="Email address"
                                            onChange={this.handleInput}
                                            value={this.state.email}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="inputtt"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            name="firstName"
                                            placeholder="First Name"
                                            onChange={this.handleInput}
                                            value={this.state.firstName}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="inputtt"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            name="LastName"
                                            placeholder="Last Name"
                                            onChange={this.handleInput}
                                            value={this.state.LastName}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="inputtt"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            name="city"
                                            placeholder="City"
                                            onChange={this.handleInput}
                                            value={this.state.city}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="inputtt"
                                            name="phoneNumber"
                                            placeholder="Phone Number"
                                            onChange={this.handleInput}
                                            value={this.state.phoneNumber}
                                        />
                                    </div>

                                    <button type="submit" className="bttn" >
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

export default Preinscreption


