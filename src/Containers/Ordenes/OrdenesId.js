import React from "react";
import Navbar from "../../Components/Header/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import Typography from '@mui/material/Typography';
import {doc, getDoc, collection} from "firebase/firestore";
import { dataBase } from "../../firebase/firebase";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import './OrdenesId.css'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const OrdenesId = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
//     const [loading, setLoading] = useState(true)
//     const [ordenDatos, setOrdenDatos] = useState({})

//     const {idDoc} = useParams()

//     useEffect(() => {
//         const idCollection = collection(dataBase, 'ventas');
//         const idVenta = doc(idCollection, idDoc);
    
//         getDoc(idVenta)
//         .then(result => {
//           setOrdenDatos({
//             id:result.id,
//             ...result.data()
//           })
//         })
//         .catch((error)=>{
//           console.log("error");
//         })
//         .finally(() => setLoading(false));
    
//       }, [idDoc]);



    return (
        <div>
            <button className="boton__id" onClick={handleOpen}>Busca tu pedido <ManageSearchIcon/></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
