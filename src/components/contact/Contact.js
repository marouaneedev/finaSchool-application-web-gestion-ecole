import React, { Component } from 'react'
import("./contact.css")

export class Contact extends Component {
  render() {
    return (
      <div>
          <section className="contactSection" id="contactSection">
        <div className="container">
          <div className="contentTop text-center">
            <h1>Contact Us</h1>
            <hr className="lineHr mb-5" />
          </div>

          <div className="grid">
            <div className="col-12 md:col-6 lg:col-6 sm:flex-nowrap p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                rerum fuga fugit illum at atque placeat ipsum nesciunt, eligendi
                quibusdam?
              </p>
              <p>+212643527228</p>
              <p>265 Avenue Hassan II 80020 agadir</p>
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
                <div className="form-floating mb-3">
                  <input
                    type="textarea"
                    className="textarea"
                    id="exampleInputEmail1"
                    placeholder="Your Message :"
                  />
                  {/* <label className="opacity-50 mt-0">Your Message :</label> */}
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

export default Contact