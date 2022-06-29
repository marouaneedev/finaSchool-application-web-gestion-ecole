import React, { Component } from 'react'
import { Flip } from "react-reveal";
import { Link } from "react-scroll";



export class Schoolinfo extends Component {
    render() {
        return (
            <div>
                <section className="schoolSection" id="schoolSection">
                    <div className="container ">
                        <div className="contentTop text-center">
                            <h3>FinaSchool</h3>
                            <hr className="lineHr" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatem omnis eveniet, quas animi culpa cumque, nostrum odio ut
                                quaerat reprehenderit quasi fuga! Ab, suscipit dicta odio ut
                                quaerat reprehenderit quasi fuga! Ab, suscipit dicta!
                            </p>
                        </div>

                        <div className="grid contentBottom">
                            <div className="left_ col-12 md:col-12 lg:col-6 sm:flex-nowrap">
                                <Flip left>
                                    <img src="/images/bg1.jpg" alt="img" className="mt-2" />
                                </Flip>
                            </div>
                            <div className="right_ col-12 md:col-12 lg:col-6">
                                <h3>Caption :</h3>
                                <ul>
                                    <li>quaerat reprehenderit</li>
                                    <li>Lorem ipsum dolor sit amet consectetur</li>
                                    <li>dolor sit amet consectetur</li>
                                    <li>amet consectetur</li>
                                    <li>Lorem ipsum dolor sit amet consectetur</li>
                                    <li>Lorem ipsum dolor sit amet consectetur</li>
                                </ul>
                                <Link to="formationSection" smooth={true} duration={200}>
                                    <button className="bttn">Formations</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Schoolinfo