import React, { Component } from 'react'
import { Link } from "react-scroll";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ProtectedRoute from '../protectedRoute/ProtectedRoute';

export class Footer extends Component {
    render() {
        return (
            <div><section className="footerSection">
                <div className="container">
                    <div className="grid">
                        <div className="col-12 md:col-12 lg:col-4 sm:flex-nowrap">
                            <h1>FINASCHOOL ECOLE DU DIGITAL</h1>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <label>A PROPOS</label>
                            <hr />
                            <ul>
                                <li>
                                    <a href="www.google.com">A PROPOS DE LÉCOLE</a>
                                </li>
                                <li>
                                    <a href="www.google.com">ENSEIGNER A EWA</a>
                                </li>
                                <li>
                                    <a href="www.google.com">MENTIONS LÉGALES</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <label>MÉTIERS DU DIGITAL</label>
                            <hr />
                            <ul>
                                <li>
                                    <a href="www.google.com">INTERFACES CRÉATION</a>
                                </li>
                                <li>
                                    <a href="www.google.com">GRAPHIQUE</a>
                                </li>
                                <li>
                                    <a href="www.google.com">PROGRAMMATION INFORMATIQUE</a>
                                </li>
                                <li>
                                    <a href="www.google.com">COMMUNICATION MARKETING</a>
                                </li>
                                <li>
                                    <a href="www.google.com">RÉSEAUX CLOUDS</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 md:col-6 lg:col-2">
                            <label>SUIVEZ-NOUS</label>
                            <hr />
                            <ul>
                                <li>
                                    <a href="www.google.com"> <FacebookIcon/> <span>Facebook</span> </a> 
                                </li>
                                <li>
                                    <a href="www.google.com"> <InstagramIcon/> Instagram</a>
                                </li>
                                <li>
                                    <a href="www.google.com"> <TwitterIcon/> Twitter</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="copyright text-center pt-5">
                        <p>
                            Copyright © 2022 <span>FinaSchool</span> - Tout droits réservés.
                        </p>
                        <ProtectedRoute/>
                    </div>
                </div>
                <Link to="sectionHeader" smooth={true} duration={200}>
                    <img src="/images/arrowUp.png" alt="imgs" className="arrowUp" />
                </Link>
            </section></div>
        )
    }
}

export default Footer