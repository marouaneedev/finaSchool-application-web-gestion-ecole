import React from "react";
import Navbar from "../../components/navbar/Navbar.js";
import Contact from "../../components/contact/Contact.js";
import Preinscreption from "../../components/pre_inscreption/Preinscreption.js";


import "./home.css";
import { Link } from "react-scroll";
import { Flip, Bounce } from "react-reveal";
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <div>
      {/* start header */}
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
                  <h1>Welcom To FinaShool</h1>
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
      {/* end header */}

      {/* start school section */}
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
      {/* end school section */}

      {/* start formation section */}
      <section className="formationSection" id="formationSection">
        <div className="container">
          <div className="contentTop text-center">
            <h1>Formation</h1>
            <hr className="lineHr" />
          </div>

          <div className="grid cards">
            <div className="col-12 md:col-6 lg:col-3 sm:flex-nowrap">
              <div className="card">
                <img
                  src="/images/card.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="www.google.com" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <div className="card">
                <img
                  src="/images/card.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="www.google.com" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <div className="card">
                <img
                  src="/images/card.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="www.google.com" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <div className="card">
                <img
                  src="/images/card.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="www.google.com" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end formation section */}

      {/* start slider section */}
      <div className="container sliderSection">
        <div className="contentTop text-center">
          <h1>Gallery</h1>
          <hr className="lineHr" />
        </div>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/slide/1.png"
                className="d-block w-100"
                alt="img"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/slide/2.jpeg"
                className="d-block w-100"
                alt="img"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/slide/3.jpeg"
                className="d-block w-100"
                alt="img"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* end slider section */}

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
