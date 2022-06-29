import React, { Component } from 'react'
import "./formation.css"
import { GiDuration } from "react-icons/gi"  
import { RiMoneyDollarCircleFill } from "react-icons/ri"
import { IoPeopleCircleSharp } from "react-icons/io5"  




export class Formation extends Component {
  render() {
    return (
      <div>
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
                  <h5 className="card-title">Formation Name</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <hr/>
                  <div class="details">
                    <div> <GiDuration className="iconReact"/>  <span>Duration</span>  </div>
                    <div>6 months</div>
                  </div>
                  <hr/>
                  <div class="details">
                    <div> <RiMoneyDollarCircleFill className="iconReact"/>  <span>Fees</span>  </div>
                    <div>2000$</div>
                  </div>
                  <hr/>
                  <div class="details">
                    <div> <IoPeopleCircleSharp className="iconReact"/>  <span>Students</span>  </div>
                    <div>+45</div>
                  </div>
                 

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
                  <h5 className="card-title">Formation Name</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <hr/>
                  <div class="details">
                    <div> <GiDuration className="iconReact"/>  <span>Duration</span>  </div>
                    <div>6 months</div>
                  </div>
                  <hr/>
                  <div class="details">
                    <div> <RiMoneyDollarCircleFill className="iconReact"/>  <span>Fees</span>  </div>
                    <div>2000$</div>
                  </div>
                  <hr/>
                  <div class="details">
                    <div> <IoPeopleCircleSharp className="iconReact"/>  <span>Students</span>  </div>
                    <div>+45</div>
                  </div>
                 

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
                  <h5 className="card-title">Formation Name</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <hr/>
                  <div class="details">
                    <div> <GiDuration className="iconReact"/>  <span>Duration</span>  </div>
                    <div>6 months</div>
                  </div>
                  <hr/>
                  <div class="details">
                    <div> <RiMoneyDollarCircleFill className="iconReact"/>  <span>Fees</span>  </div>
                    <div>2000$</div>
                  </div>
                  <hr/>
                  <div class="details">
                    <div> <IoPeopleCircleSharp className="iconReact"/>  <span>Students</span>  </div>
                    <div>+45</div>
                  </div>
                 

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
                  <h5 className="card-title">Formation Name</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <hr/>
                  <div class="details">
                    <div> <GiDuration className="iconReact"/>  <span>Duration</span>  </div>
                    <div>6 months</div>
                  </div>
                  <hr/>
                  <div class="details">
                    <div> <RiMoneyDollarCircleFill className="iconReact"/>  <span>Fees</span>  </div>
                    <div>2000$</div>
                  </div>
                  <hr/>
                  <div class="details">
                    <div> <IoPeopleCircleSharp className="iconReact"/>  <span>Students</span>  </div>
                    <div>+45</div>
                  </div>
                 

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}

export default Formation