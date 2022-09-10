import React, { useState, useRef, useEffect } from 'react'
import './widget.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

export default function Widget() {
  const refContainer = useRef(null);

  const endPointNavbarHomePage = 'http://localhost:8000/api/img'
  const endPointHeaderHomePage = 'http://localhost:8000/api/img'

  // const [img, setImg] = useState('');
  const [imageHeader, setImageHeader] = useState('');
  const [titleHeader, setTitleHeader] = useState('');
  const [textHeader, setTextHeader] = useState('');
  const [buttonHeader, setButtonHeader] = useState('');
  let base64 = "";

  useEffect(() => {
    // setImageNavbar("hahahah")
    // console.log(imageNavbar)
  }, []);


  const clearForm = () => {
    // setImageNavbar("") ;
    setImageHeader("");
    setTitleHeader("");
    setTextHeader("");
    setButtonHeader("");

  }

  const handleChange = async (e) => {
    const file = e.target.files[0]
    base64 = await convertBase64(file);
    // console.log(base64)
    // setImg(base64)
    // console.log(img)
    // console.log(base64)

  }



  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const storeNavbar = async () => {
    await axios.put(`${endPointNavbarHomePage}`, {imageNavbar: base64 }).then((response) => {
      if (response.status === 200) {
        console.log("navbar data send")
      }
    })
  }

  const storeHeader = async () => {
    await axios.put(`${endPointHeaderHomePage}/1`, { imageHeader: imageHeader, titleHeader: titleHeader, textHeader: textHeader, buttonHeader: buttonHeader }).then((response) => {
      if (response.status === 200) {
        console.log("header data send")
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
        <h4 className="mt-2 mb-3">Navbar Logo :</h4>
        <input
          type="file"
          ref={refContainer}
          name="imageeee"
          id="fileUpload"
          className="form-control"
          // onChange={e => setImageNavbar(e.target.files[0])}
          onChange={handleChange}

        />
        <div className='selectdiv'>
          <label htmlFor='fileUpload' className='selectlabel'>select Logo...</label>
        </div>
        <br />
        <br />
        <Button variant="outlined" type="submit" onClick={() => { storeNavbar(); clearForm(); }} >
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
            ref={refContainer}
            name="image"
            className="form-control"
            onChange={event => setImageHeader(event.target.value)}
          />
        </div>
        <div className='inpuut'>
          <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
            <TextField
              required
              id="outlined-required"
              label="Titre :"
              ref={refContainer}
              value={titleHeader}
              onChange={event => this.setTitleHeader(event.target.value)}
            />
          </Box>
        </div>
        <div className='inpuut'>
          <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
            <TextField
              required
              id="outlined-required"
              label="Text :"
              ref={refContainer}
              value={textHeader}
              onChange={event => this.setTextHeader(event.target.value)}
            />
          </Box>
        </div>
        <div className='inpuut'>
          <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
            <TextField
              required
              id="outlined-required"
              label="Button :"
              ref={refContainer}
              value={buttonHeader}
              onChange={event => this.setButtonHeader(event.target.value)}
            />
          </Box>

          <br />
          <br />

          <Button variant="outlined" type="submit" onClick={() => { storeHeader(); clearForm(); }}>
            Sauvegarder
          </Button>
        </div>
      </div>
      {/* -------------end header-------------- */}

    </div >
  )
}