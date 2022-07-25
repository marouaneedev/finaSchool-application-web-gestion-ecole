import React, { Component } from 'react'
import './preInscreption.css'
import axios from 'axios'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';


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
        await axios.post(endPoint, this.state).then((res) => {
            if (res.data.status === 200) {
                console.log("good")
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
                                <h3>en ligne à FinaSchool</h3>
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
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1 },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <Input
                                                type="email"
                                                className="inputtt"
                                                name="email"
                                                placeholder="Email address"
                                                onChange={this.handleInput}
                                                value={this.state.email}
                                            />
                                        </Box>
                                    </div>
                                    <div className="mb-3">
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1 },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <Input
                                                type="text"
                                                className="inputtt"
                                                name="firstName"
                                                placeholder="First Name"
                                                onChange={this.handleInput}
                                                value={this.state.firstName}
                                            />
                                        </Box>
                                    </div>
                                    <div className="mb-3">
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1 },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <Input
                                                type="text"
                                                className="inputtt"
                                                name="LastName"
                                                placeholder="Last Name"
                                                onChange={this.handleInput}
                                                value={this.state.LastName}
                                            />
                                        </Box>
                                    </div>
                                    <div className="mb-3">
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1 },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <Input
                                                type="text"
                                                className="inputtt"
                                                name="city"
                                                placeholder="City"
                                                onChange={this.handleInput}
                                                value={this.state.city}
                                            />
                                        </Box>
                                    </div>
                                    <div className="mb-3">
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1 },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <Input
                                                type="number"
                                                className="inputtt"
                                                name="phoneNumber"
                                                placeholder="Phone Number"
                                                onChange={this.handleInput}
                                                value={this.state.phoneNumber}
                                            />
                                        </Box>
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


