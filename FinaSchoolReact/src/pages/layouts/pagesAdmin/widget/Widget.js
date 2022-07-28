import React, { Component } from 'react'
import './widget.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import * as ReactDOM from 'react-dom';



export class Widget extends Component {
  constructor() {
    super();
    this.state = {
      imageNavbar: "",
      imageHeader: "",
      titleHeader: "",
      textHeader: "",
      buttonHeader: "",
    };
  }
  

render() {

  const endPointNavbarHomePage = 'http://localhost:8000/api/navbarHomePage'
  const endPointHeaderHomePage = 'http://localhost:8000/api/headerHomePage'

  const clearForm = () => {
    // this.imageNavbar = "",
    // this.state.imageNavbar.value = "";
  }

  const storeNavbar = async () => {
    await axios.put(`${endPointNavbarHomePage}/1`, { imageNavbar: this.state.imageNavbar }).then((response) => {
      if (response.status === 200) {
        console.log("done")
        clearForm();
      }
    })
  }

  const handleClick = () => {
    ReactDOM.findDOMNode(this.refs.form).value = "";
  }

  const storeHeader = async () => {
    await axios.put(`${endPointHeaderHomePage}/1`, { imageHeader: this.state.imageHeader, titleHeader: this.state.titleHeader, textHeader: this.state.textHeader, buttonHeader: this.state.buttonHeader }).then((response) => {
      if (response.status === 200) {
        console.log("done")
      }
    })
  }



  return (
    <div className="allContent" >
      {/* -------------start breadcrumb-------------- */}
      <h3 className="mt-2 mb-3" > Widget : </h3>
      {/* -------------end breadcrumb-------------- */}

      {/* -------------start navbar-------------- */}
      <div className='navbar_wg wdg'>
        <h4 className="mt-2 mb-3">Navbar :</h4>
        <label >Logo :</label>
        <input
          type="file"
          className="form-control"
          ref="form"
          value={this.state.imageNavbar}
          onChange={event => this.setState({ imageNavbar: event.target.value })}
        />
        <br />
        <br />
        <Button variant="outlined" type="submit" /* onClick={storeNavbar} */ onClick={() => { storeNavbar(); handleClick();}} >
          Sauvegarder
        </Button>
      </div>
      {/* -------------end navbar-------------- */}

      {/* -------------start header-------------- */}
      <div className='header_wg wdg'>
        <h4 className="mt-2 mb-3">Header : </h4>
        <div className='inpuut'>
          <label >Image :</label>
          <input
            type="file"
            className="form-control"
            value={this.state.imageHeader}
            onChange={event => this.setState({ imageHeader: event.target.value })}
          />
        </div>
        <div className='inpuut'>
          <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
            <TextField
              required
              id="outlined-required"
              label="Titre :"
              value={this.state.titleHeader}
              onChange={event => this.setState({ titleHeader: event.target.value })}
            />
          </Box>
        </div>
        <div className='inpuut'>
          <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
            <TextField
              required
              id="outlined-required"
              label="Text :"
              value={this.state.textHeader}
              onChange={event => this.setState({ textHeader: event.target.value })}
            />
          </Box>
        </div>
        <div className='inpuut'>
          <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
            <TextField
              required
              id="outlined-required"
              label="Button :"
              value={this.state.buttonHeader}
              onChange={event => this.setState({ buttonHeader: event.target.value })}
            />
          </Box>

          <br />
          <br />

          <Button variant="outlined" type="submit" onClick={storeHeader}>
            Sauvegarder
          </Button>
        </div>
      </div>
      {/* -------------end header-------------- */}

    </div >
  )
}
}

export default Widget