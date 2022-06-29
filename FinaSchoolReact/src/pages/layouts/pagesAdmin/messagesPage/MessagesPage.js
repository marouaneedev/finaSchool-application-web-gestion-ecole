import React, { Component } from "react";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  
  { field: 'Email', headerName: 'Email', width: 250 },
  { field: 'Message', headerName: 'Message', width: 600 },
  {
    field: 'Edit',
    headerName: 'Edit',
    width: 150,
  },
];

const rows = [
  { id: 1,Email: 'bllw@gmail.com', Message: 'Snow dkkdkeldeldmelmdlemdmeldmlemdmeld'},
  { id: 2, Email: 'Lannister@', Message: 'Cersei' },
  { id: 3, Email: 'Lannister@', Message: 'Jaime' },
  { id: 4, Email: 'Stark@', Message: 'Arya'},
  { id: 5, Email: 'Targaryen@', Message: 'Daenerys' },
  { id: 6, Email: 'Melisandre@', Message: 'nulfrl' },
  { id: 7, Email: 'Clifford@', Message: 'Ferrara'},
  { id: 8, Email: 'Frances@', Message: 'Rossini' },
  { id: 9, Email: 'Roxie@', Message: 'Harvey' },
];

class MessagesPage extends Component {
  render() {
    return (
      <div className="allContent">
        {/* -------------start breadcrumb-------------- */}
        <h1 className="mt-4">Messages</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Messages</li>
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
    );
  }
}

export default MessagesPage;
