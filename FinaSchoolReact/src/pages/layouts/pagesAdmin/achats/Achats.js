import React from "react";
import { useEffect, useState } from "react"
import axios from 'axios'
// import { TableContainer, TablePagination, Table, TableHead, TableRow, TableBody, TableCell, Paper } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import DialogAchat from './dialogAchat/DialogAchat'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { CustomFooterTotalComponent } from "./CustomFooter"



const endPoint = 'http://localhost:8000/api'


export default function Achats() {

    // const [pageSize, setPageSize] = React.useState(5);
    let [filtredAchats, setFiltredAchats] = useState([])
    let [achats, setAchats] = useState([])
    const [total, setTotal] = React.useState(0);


    /* ----------columns---------- */
    const columns = [
        { field: 'idArticle', headerName: 'ID Article', width: 120 },
        { field: 'nomArticle', headerName: 'Nom Article', width: 200 },
        { field: 'nomFrss', headerName: "Nom de Fournisseur", width: 200 },
        { field: 'teleFrss', headerName: 'Télephon de Fournisseur', width: 200 },
        { field: 'prixDachat', headerName: "Prix D'achat (DH)", width: 200 },
        {
            field: 'action', headerName: 'Actions', width: 100, renderCell: (params) => {
                return [
                    <IconButton aria-label="delete" onClick={() => openAddDialog(params.row.id)}> <BorderColorIcon /> </IconButton>,
                    <IconButton aria-label="delete" onClick={() => deletRowPursh(params.row.id)}> <DeleteIcon /> </IconButton>

                ]
            }
        },
    ];
    /* ----------end columns---------- */


    /* ----------get data---------- */
    useEffect(() => {
        getAllPurchases()
    }, [])

    const getAllPurchases = async () => {
        const response = await axios.get(`${endPoint}/achats`)
        setAchats(response.data)
        setFiltredAchats(response.data)
    }
    /* ----------end get data---------- */

    /* --------- Dialog --------- */
    const [addDialogIsOpen, setAddDialogIsOpen] = React.useState(false);
    const [achatId, setAchatId] = React.useState(null);

    const openAddDialog = (achatId) => {
        setAddDialogIsOpen(true);
        setAchatId(achatId)
    };

    const closeAddDialog = () => {
        setAddDialogIsOpen(false);
    };
    /* --------- end Dialog --------- */


    /* deletRowPursh */
    const deletRowPursh = async (id) => {
        await axios.delete(`${endPoint}/achat/${id}`).then((response) => {
            if (response.status === 200) {
                setFiltredAchats(achats.filter(inscr => inscr.id !== id))
            }
        })
    }
    /* deletRowPursh */

    const newPurchase = (purch) => {
        setFiltredAchats([...achats, purch]);
    };

    const updatedPurchase = (purch) => {
        
        let updatePurchase = [...achats]
        const index = achats.findIndex(data => data.id === purch.id)
        console.log(achats)
        updatePurchase[index] = purch;
        setFiltredAchats(updatePurchase);
    };



    return (
        <div className="allContent">
            {/* -------------start breadcrumb-------------- */}
            <h3 className="mt-2 mb-3">Les Achats : </h3>
            {/* -------------end breadcrumb-------------- */}

            {/* -------------start header-------------- */}
            <div className="add">
                <Button variant="outlined" onClick={() => openAddDialog(null)}  >ajouter un Achat</Button>
            </div>
            <br />
            {/* -------------start header-------------- */}


            {/* -------------start table-------------- */}
            <div style={{ height: 400, width: '100%', background: "#F2F2F2" }}>
                <DataGrid
                    // pageSize={pageSize}
                    // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    // rowsPerPageOptions={[5, 10, 25]}
                    rows={filtredAchats}
                    columns={columns}
                    // pagination
                    // {...filtredAchats}
                    components={{
                        Toolbar: GridToolbar,
                        Footer: CustomFooterTotalComponent
                    }}
                    componentsProps={{
                        footer: { total }
                    }}
                    onStateChange={(state) => {
                        const visibleRows = state.filter.visibleRowsLookup;
                        let visibleItems = [];
                        for (const [id, value] of Object.entries(visibleRows)) {
                          if (value === true) {
                            visibleItems.push(id);
                          }
                        }
                        const total = filtredAchats.map(({ prixDachat }) => prixDachat).reduce((sum, i) => sum + i, 0)
                        setTotal(total);
                      }}

                />

            </div>
            {/* -------------end table-------------- */}

            {/* -------------start dialog-------------- */}
            <DialogAchat achatId={achatId} open={addDialogIsOpen} onClose={closeAddDialog} newPurchase={newPurchase} updatedPurchase={updatedPurchase} />
            {/* -------------start dialog-------------- */}
        </div>
    )


}

