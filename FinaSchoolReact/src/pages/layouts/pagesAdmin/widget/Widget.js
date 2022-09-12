import React, { useState, useRef } from 'react'
import './widget.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useSnackbar } from 'notistack'


export default function Widget() {
  const refContainer = useRef(null);

  const endPointHeaderHomePage = 'http://localhost:8000/api/headerWidejet/1'

  const [titleHeader, setTitleHeader] = useState('');
  const [textHeader, setTextHeader] = useState('');
  const [buttonHeader, setButtonHeader] = useState('');
  const { enqueueSnackbar } = useSnackbar();


  const clearForm = () => {
    setTitleHeader("");
    setTextHeader("");
    setButtonHeader("");

  }
  

  const storeHeader = async () => {
    if (titleHeader.length === 0 && textHeader.length === 0 && buttonHeader.length === 0) {
      enqueueSnackbar('Oops ! Try Again', { variant: 'error' });
    } else {
      await axios.put(`${endPointHeaderHomePage}`, { titleHeader: titleHeader, textHeader: textHeader, buttonHeader: buttonHeader }).then((response) => {
        if (response.status === 200) {
          enqueueSnackbar('Updated successfully', { variant: 'success' });
        }
      })
    }

  }


  return (
    <div className="allContent" >
      {/* -------------start breadcrumb-------------- */}
      <h3 className="mt-2 mb-3" > Widget : </h3>
      {/* -------------end breadcrumb-------------- */}

      {/* -------------start header-------------- */}
      <div className='header_wg wdg'>
        <div className='grid'> {/* all_cnt */}
          <div className='inpts left_s col-12 md:col-12 lg:col-6'>
            <h4 className="mt-2 mb-3">Header : </h4>
            <div className='inpuut'>
              <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
                <TextField

                  id="outlined-required"
                  label="Titre :"
                  // ref={refContainer}
                  value={titleHeader}
                  onChange={e => setTitleHeader(e.target.value)}
                />
              </Box>
            </div>
            <div className='inpuut'>
              <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
                <TextField

                  id="outlined-required"
                  label="Text :"
                  ref={refContainer}
                  value={textHeader}
                  onChange={e => setTextHeader(e.target.value)}
                />
              </Box>
            </div>
            <div className='inpuut'>
              <Box sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}>
                <TextField

                  id="outlined-required"
                  label="Button :"
                  ref={refContainer}
                  value={buttonHeader}
                  onChange={e => setButtonHeader(e.target.value)}
                />
              </Box>

              <br />
              <br />

              <Button variant="outlined" type="submit" onClick={() => { storeHeader(); clearForm(); }}>
                Sauvegarder
              </Button>
            </div>
          </div>
          <div className='img right_s col-12 md:col-12 lg:col-6'>
            <img src="/images/support.png" className="support_img" alt="img" />
          </div>
        </div>
      </div>
      {/* -------------end header-------------- */}

    </div >
  )
}