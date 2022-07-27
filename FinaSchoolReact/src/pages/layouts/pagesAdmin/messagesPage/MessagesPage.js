import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import { useEffect, useState } from "react"
import ReplyIcon from '@mui/icons-material/Reply';


const endPoint = 'http://localhost:8000/api'


function MessagesPage() {

  const columns = [

    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'message', headerName: 'Message', width: 720 },
    {
      field: 'action', headerName: 'Actions', width: 100, renderCell: (params) => {
        return [
          <IconButton aria-label="answer" onClick={() => sendEmail(params.row.id)}> <ReplyIcon /> </IconButton>,
          <IconButton aria-label="delete" onClick={() => deletMessage(params.row.id)}> <DeleteIcon /> </IconButton>
        ]
      }
    },
  ];

  /* get data */
  let [filtredMessages, setFiltredMessages] = useState([])
  let [messages, setMessages] = useState([])

  useEffect(() => {
    getAllMessages()
  }, [])

  const getAllMessages = async () => {
    const response = await axios.get(`${endPoint}/messages`)
    setMessages(response.data)
    setFiltredMessages(response.data)
  }
  /* end get data */

  /* delet row messages */
  const deletMessage = async (id) => {
    await axios.delete(`${endPoint}/message/${id}`).then((response) => {
      if (response.status === 200) {
        setFiltredMessages(messages.filter(student => student.id !== id))
      }
    })
  }
  /* end delet row messages */

  /* send email */
  const sendEmail = async (id) => { }
  /* end send email */


  return (
    <div className="allContent">
      {/* -------------start breadcrumb-------------- */}
      <h3 className="mt-2 mb-3">Messages : </h3>
      {/* -------------end breadcrumb-------------- */}

      {/* -------------start table-------------- */}
      <div style={{ height: 400, width: '100%', background: "#F2F2F2" }}>
        <DataGrid
          rows={filtredMessages}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}

        />
      </div>
      {/* -------------end table-------------- */}
    </div>
  )
}

export default MessagesPage