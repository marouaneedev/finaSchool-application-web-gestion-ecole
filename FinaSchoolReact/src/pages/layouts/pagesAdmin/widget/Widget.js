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

      </div>
    )
  }
}

export default Widget

