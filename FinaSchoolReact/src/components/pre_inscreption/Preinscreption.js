import React, { Component } from 'react'
import './preInscreption.css'

export class Preinscreption extends Component {
    render() {
        return (
            <div>
                <section className="inscriptionSection" id="inscriptionSection">
                    <div className="container">
                        <div className="contentTop text-center">
                            <h1 className="my-5">Pré Insciption</h1>
                            <hr className="lineHr" />
                        </div>

                        <div className="grid">
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
                                <form>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            className="inputtt"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="inputtt"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="inputtt"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="inputtt"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="City"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="inputtt"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Phone Number"
                                        />
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

export default Preinscreption