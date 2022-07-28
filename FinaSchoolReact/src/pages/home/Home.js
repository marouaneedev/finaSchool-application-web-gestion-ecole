import React from "react";
import Formation from "../../components/formation/Formation.js";
import Schoolinfo from "../../components/school_info/Schoolinfo.js";
import Headerr from "../../components/headerComponent/Headerr.js";
import Contact from "../../components/contact/Contact.js";
import Footer from "../../components/footer/Footer.js";
import Preinscreption from "../../components/pre_inscreption/Preinscreption.js";


import "./home.css";

function Home() {
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
      <Footer/>
      {/* end footer section */}
    </div>
  );
}

export default Home;
