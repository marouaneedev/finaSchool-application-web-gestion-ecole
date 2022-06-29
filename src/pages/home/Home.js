import React from "react";
import Formation from "../../components/formation/Formation.js";
import Schoolinfo from "../../components/school_info/Schoolinfo.js";
import Headerr from "../../components/headerComponent/Headerr.js";
import Contact from "../../components/contact/Contact.js";
import Preinscreption from "../../components/pre_inscreption/Preinscreption.js";


import "./home.css";
import { Link } from "react-scroll";

// import AppUrl from "../../AppUrl/AppUrl.js";
// import ResetApi from "../../AppUrl/RestApi.js";

function Home() {

// constructor(){
//   super();
//   this.state={
//     Title:"",
//     Description:"",
//     Button:""

    
//   }
// }



  return (
    <div>
      {/* start header */}
      <Headerr />
      {/* end header */}

      {/* start school section */}
      <Schoolinfo />
      {/* end school section */}

      {/* start formation section */}
      <Formation />
      {/* end formation section */}

      {/* start inscription section */}
      <Preinscreption/>
      {/* end inscription section */}

      {/* start contact section */}
      <Contact />
      {/* end contact section */}

      {/* start footer section */}
      <section className="footerSection">
        <div className="container">
          <div className="grid">
            <div className="col-12 md:col-12 lg:col-4 sm:flex-nowrap">
              <h1>EWA ECOLE DU DIGITAL</h1>
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
                  <a href="www.google.com">facebook</a>
                </li>
                <li>
                  <a href="www.google.com">instagram</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright text-center pt-5">
            <p>
              Copyright © 2022 <span>FinaSchool</span> - Tout droits réservés.
            </p>
          </div>
        </div>
        <Link to="sectionHeader" smooth={true} duration={200}>
          <img src="/images/arrowUp.png" alt="imgs" className="arrowUp" />
        </Link>
      </section>
      {/* end footer section */}
    </div>
  );
}

export default Home;
