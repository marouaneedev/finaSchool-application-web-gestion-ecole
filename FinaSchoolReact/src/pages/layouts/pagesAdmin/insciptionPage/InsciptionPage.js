import React from "react";
import { useEffect, useState } from "react"
import axios from 'axios'
// import { TableContainer, TablePagination, Table, TableHead, TableRow, TableBody, TableCell, Paper } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const endPoint = 'http://localhost:8000/api'


export default function InsciptionPage() {

  const columns = [
    { field: 'email', headerName: 'Email Adress', width: 250 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'city', headerName: 'City', width: 100 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 200 },
    {
      field: 'action', headerName: 'Actions', width: 100, renderCell: (params) => {
        return [
          <IconButton aria-label="delete" onClick={() => deletInscreption(params.row.id)}> <DeleteIcon /> </IconButton>
  
        ]
      }
    },
  ];

  /* get data */
  let [filtredInscreptions, setFiltredInscreptions] = useState([])
  let [inscreptions, setInscreptions] = useState([])

  useEffect(() => {
    getAllInscreptions()
  }, [])

  const getAllInscreptions = async () => {
    const response = await axios.get(`${endPoint}/inscreptions`)
    setInscreptions(response.data)
    setFiltredInscreptions(response.data)
  }
  /* end get data */

  /* delet row inscreption */
const deletInscreption = async (id) => {
  await axios.delete(`${endPoint}/inscreption/${id}`).then((response) => {
    if (response.status === 200) {
      setFiltredInscreptions(inscreptions.filter(inscr => inscr.id !== id))
    }
  })
}
/* end delet row inscreption */


  return (
    <div className="allContent">
      {/* -------------start breadcrumb-------------- */}
      <h3 className="mt-2 mb-3">Inscription : </h3>
        {/* -------------end breadcrumb-------------- */}

      {/* -------------start table-------------- */}
      <div style={{ height: 400, width: '100%', background: "#F2F2F2" }}>
        <DataGrid
          rows={filtredInscreptions}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
      {/* -------------end table-------------- */}
    </div>
  )


}

