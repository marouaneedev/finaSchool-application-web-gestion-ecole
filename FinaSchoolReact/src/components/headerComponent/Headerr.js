import React from 'react'
import Navbar from "../navbar/Navbar.js";
import { Bounce } from "react-reveal";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import axios from 'axios'
import { useEffect, useState } from "react"

const endPoint = 'http://localhost:8000/api'

function Headerr() {

    /* ----------get data---------- */
    let [data, setData] = useState([])

    useEffect(() => {
        getAlldata()
    }, [])

    const getAlldata = async () => {
        const response = await axios.get(`${endPoint}/headerHomePage/1`)
        setData(response.data)
    }

    console.log(data.imageNavbar)
    /* ----------end get data---------- */

    return (
        <div>
            <header id="sectionHeader">
                {/* start navbar */}
                <Navbar />
                {/* end navbar */}

                {/* start fieldes */}
                <div className="container">
                    <div className="grid content_s">
                        <div className="left_s col-12 md:col-12 lg:col-6 sm:flex-nowrap text-center mt-2">
                            <Bounce left>
                                <div className="contentt">
                                    <h1>{data.titleHeader}</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Incidunt laboriosam consequuntur iusto corporis unde beatae
                                        Incidunt laboriosam consequuntur iusto corporis unde beatae
                                    </p>
                                    <Link to="inscriptionSection" smooth={true} duration={300}>
                                        <button className="bttn">Pre Inscription</button>
                                    </Link>
                                </div>
                            </Bounce>
                        </div>
                        <div className="right_s col-12 md:col-12 lg:col-6 text-center mt-2">
                            <Fade>
                                <img src="/images/bg.png" className="myimg" alt="img" />
                            </Fade>
                        </div>
                    </div>
                </div>
                {/* end fieldes */}

                {/* arrow */}
                <div className="arrowDiv">
                    <Link to="schoolSection" smooth={true} duration={200}>
                        <img src="/images/arrow.png" alt="img" className="mt-4 arrowImg" />
                    </Link>
                </div>
                {/* end arrow */}
            </header>
        </div>
    )
}

export default Headerr