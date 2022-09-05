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
      imageNavbarr: "",
      imageHeader: "",
      titleHeader: "",
      textHeader: "",
      buttonHeader: "",
    };
  }

  handleChange = (e) =>{
    this.setState({
      imageNavbarr: e.target.files
    })
  }

  submitForm = (e) =>{
    e.preventDefault();
    const url = 'http://localhost:8000/api/navbarHomePage';
    const data = new FormData();
    data.append('imageNavbar', this.state.imageNavbar);
    axios.post(url, data ).then(res => {
      console.log("all its good", res.data)
    })
  }
  

render() {

  const endPointNavbarHomePage = 'http://localhost:8000/api/logoImage'
  const endPointHeaderHomePage = 'http://localhost:8000/api/headerHomePage'


  const storeNavbar = async () => {
    await axios.put(`${endPointNavbarHomePage}/1`, { imageNavbar: this.state.imageNavbarr }).then((response) => {
      if (response.status === 200) {
        console.log("done")
        console.log(this.state.imageNavbarr)
        clearForm();
      }
    })
  }
  

  const clearForm = () => {
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
          // value={this.state.imageNavbar}
          onChange={event => this.setState({ imageNavbarr: event.target.files[0] })}
        />
        <br />
        <br />
        <Button variant="outlined" type="submit"  onClick={() => { storeNavbar(); clearForm();}} >
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
            ref="form"
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
              ref="form"
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
              ref="form"
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
              ref="form"
              value={this.state.buttonHeader}
              onChange={event => this.setState({ buttonHeader: event.target.value })}
            />
          </Box>

          <br />
          <br />

          <Button variant="outlined" type="submit"  onClick={() => { storeHeader(); clearForm();}}>
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