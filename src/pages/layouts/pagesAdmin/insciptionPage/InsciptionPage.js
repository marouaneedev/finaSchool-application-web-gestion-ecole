import React from "react";
// import { TableContainer, TablePagination, Table, TableHead, TableRow, TableBody, TableCell, Paper } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'EmailAdress', headerName: 'Email Adress', width: 200 },
  { field: 'firstName', headerName: 'First Name', width: 200 },
  { field: 'lastName', headerName: 'Last Name', width: 200 },
  { field: 'city', headerName: 'City', width: 200 },
  { field: 'phoneNumber', headerName: 'Phone Number', width: 200 },
];

const rows = [
  { id: 1, EmailAdress: 'Jon@gmail.com', firstName: 'lolo',lastName: 'snow', city: "agadir", phoneNumber: "0643526622" },
  { id: 1, EmailAdress: 'Jon@gmail.com', firstName: 'lolo',lastName: 'snow', city: "agadir", phoneNumber: "0643526622" },
  { id: 1, EmailAdress: 'Jon@gmail.com', firstName: 'lolo',lastName: 'snow', city: "agadir", phoneNumber: "0643526622" },
  { id: 1, EmailAdress: 'Jon@gmail.com', firstName: 'lolo',lastName: 'snow', city: "agadir", phoneNumber: "0643526622" },
  { id: 1, EmailAdress: 'Jon@gmail.com', firstName: 'lolo',lastName: 'snow', city: "agadir", phoneNumber: "0643526622" },
  { id: 1, EmailAdress: 'Jon@gmail.com', firstName: 'lolo',lastName: 'snow', city: "agadir", phoneNumber: "0643526622" },

];

export default function InsciptionPage() {
  return (
    <div className="allContent">
      {/* -------------start breadcrumb-------------- */}
      <h1 className="mt-4">Pré Insciption</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Pré Insciption</li>
      </ol>
      {/* -------------end breadcrumb-------------- */}

      {/* -------------start table-------------- */}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
      {/* -------------end table-------------- */}
    </div>
  )


}

