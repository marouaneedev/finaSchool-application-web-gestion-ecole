import React, { Component } from 'react'
import './widget.css'

export class Widget extends Component {
  render() {
    return (
      <div className="allContent">
        {/* -------------start breadcrumb-------------- */}
        <h3 className="mt-2 mb-3">Widget : </h3>
        {/* -------------end breadcrumb-------------- */}

        {/* -------------start navbar-------------- */}
        <div className='navbar_wg wdg'>
          <h4 className="mt-2 mb-3">Navbar :</h4>
          <label>Logo :</label>
          <input type="file" />
        </div>
        {/* -------------end navbar-------------- */}

        {/* -------------start header-------------- */}
        <div className='header_wg wdg'>
          <h4 className="mt-2 mb-3">Header : </h4>
          <div className='inpuut'>
            <label>Image :</label>
            <input type="file" />
          </div>
          <div className='inpuut'>
            <label>Titre :</label>
            <input type="text" />
          </div>
          <div className='inpuut'>
            <label>Text :</label>
            <textarea></textarea>
          </div>
          <div className='inpuut'>
            <label>Button :</label>
            <input type="text" />
          </div>
        </div>
        {/* -------------end header-------------- */}

        {/* -------------start school info-------------- */}
        <div className='header_wg wdg'>
          <h4 className="mt-2 mb-3">École Information : </h4>
          <div className='inpuut'>
            <label>Titre :</label>
            <input type="text" />
          </div>
          <div className='inpuut'>
            <label>Text :</label>
            <textarea></textarea>
          </div>
          <div className='inpuut'>
            <label>Image :</label>
            <input type="file" />
          </div>
          <div className='inpuut'>
            <label>Titre 2 :</label>
            <input type="text" />
          </div>
        </div>
        {/* -------------end school info-------------- */}

        {/* -------------start Service-------------- */}
        <div className='header_wg wdg'>
          <h4 className="mt-2 mb-3">Services : </h4>
          <div className='inpuut'>
            <label>Titre 1 :</label>
            <input type="text" />
          </div>
          <div className='row'>
            <div className='card col-lg-3'>
              <div className='card-body'>
                <div className='inpuut'>
                  <label>Titre 2 :</label>
                  <input type="text" />
                </div>
                <div className='inpuut'>
                  <label>Image :</label>
                  <input type="file" />
                </div>
                <div className='inpuut'>
                  <label>Titre 2 :</label>
                  <input type="text" />
                </div>
                <div className='inpuut'>
                  <label>Text :</label>
                  <textarea></textarea>
                </div>
              </div>
            </div>

            <div className='card col-lg-3'>
              <div className='card-body'>
                <div className='inpuut'>
                  <label>Titre 2 :</label>
                  <input type="text" />
                </div>
                <div className='inpuut'>
                  <label>Image :</label>
                  <input type="file" />
                </div>
                <div className='inpuut'>
                  <label>Titre 2 :</label>
                  <input type="text" />
                </div>
                <div className='inpuut'>
                  <label>Text :</label>
                  <textarea></textarea>
                </div>
              </div>
            </div>

            <div className='card col-lg-3'>
              <div className='card-body'>
                <div className='inpuut'>
                  <label>Titre 2 :</label>
                  <input type="text" />
                </div>
                <div className='inpuut'>
                  <label>Image :</label>
                  <input type="file" />
                </div>
                <div className='inpuut'>
                  <label>Titre 2 :</label>
                  <input type="text" />
                </div>
                <div className='inpuut'>
                  <label>Text :</label>
                  <textarea></textarea>
                </div>
              </div>
            </div>

            <div className='card col-lg-3'>
              <div className='card-body'>
                <div className='inpuut'>
                  <label>Titre 2 :</label>
                  <input type="text" />
                </div>
                <div className='inpuut'>
                  <label>Image :</label>
                  <input type="file" />
                </div>
                <div className='inpuut'>
                  <label>Titre 2 :</label>
                  <input type="text" />
                </div>
                <div className='inpuut'>
                  <label>Text :</label>
                  <textarea></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------end Service-------------- */}

        {/* -------------start Footer-------------- */}
        <div className='header_wg wdg'>
          <h4 className="mt-2 mb-3">Footer : </h4>
          <div className='inpuut'>
            <label>Titre :</label>
            <input type="text" />
          </div>
          <div className='inpuut'>
            <label>Text :</label>
            <textarea></textarea>
          </div>
          <div className='inpuut'>
            <label>Image :</label>
            <input type="file" />
          </div>
          <div className='inpuut'>
            <label>Titre 2 :</label>
            <input type="text" />
          </div>
        </div>
        {/* -------------end Footer-------------- */}

      </div>
    )
  }
}

export default Widget

