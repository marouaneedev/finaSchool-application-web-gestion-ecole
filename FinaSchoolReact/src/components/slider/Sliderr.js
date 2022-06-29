/* eslint-disable no-undef */
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

class Sliderr extends Component {
  render() {
    return (
      <div className="sliderSection">
        <h1> Gallery</h1>
        <Slider {...settings}>
          <div>
            <img src="images/slide/1.jpeg" alt="img" />
          </div>
          <div>
            <img src="images/slide/2.jpeg" alt="img" />
          </div>
          <div>
            <img src="images/slide/3.jpeg" alt="img" />
          </div>
          <div>
            <img src="images/slide/4.jpeg" alt="img" />
          </div>
          <div>
            <img src="images/slide/3.jpeg" alt="img" />
          </div>
          <div>
            <img src="images/slide/4.jpeg" alt="img" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Sliderr;
