import React, { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { dataBase } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {ToastContainer, toast} from 'react-toastify'
import './Cartview.css'
import { TextField, Typography } from "@mui/material";


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

const styleButton = {
    fontSize: '15px',
    bgcolor: 'rgb(9, 255, 0)',
    color: 'black',
    fontWeight: '700',
    p: '15px 25px',
    borderRadius: '8px',

}






const Cart = () => {
    const { carrito, total, cantidad, vaciarCarrito, borrarItem } = useCartContext()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   
    
    const [datosUsuario, setDatosUsuario] = useState({
        nombre: '',
        correo: '',
    })

 

    const finalizarCompra = () => {
        const ventasCollection = collection(dataBase, 'ventas')
        addDoc(ventasCollection,{
            datosUsuario,
            item: carrito,
            total,
            fechaDeCompra: serverTimestamp()
        })
        .then(result=>{
            console.log(result);
        })
        .finally(vaciarCarrito)
    }   

    const handleInputChange = (e) => {
        setDatosUsuario({
            ...datosUsuario, 
            [e.target.name] : e.target.value
        })
    }

    return (
        <>
            {carrito.length === 0 ? (
                <div>
                <h1>No hay elementos en el carrito aun, puedes volver a <Link to="/">COMPRAR</Link>
                </h1>
                </div>
            ) : (
                <>
                    {carrito.map((producto) => {
                        return (
                            <section key={producto.id} className="item__cart">
                                <img src={producto.imagen} alt="" />
                                <p>Nombre: {producto.titulo}</p>
                                <p>Precio: ${producto.precio}</p>
                                <p>Cantidad: {producto.cantidad}</p>
                                <p>Subtotal: ${producto.cantidad * producto.precio}</p>
                                <button className="boton__borrar" onClick={() => borrarItem(producto.id)}>
                                    < DeleteForeverIcon />
                                </button>
                            </section>
                        )
                    })}
                    <div className="cart__compra">
                            <p className="detalle__titulo">Precio Total: ${total}</p>
                    <div className="vista__botones">
                            <button className="boton__vaciar" onClick={() => vaciarCarrito()} >Vaciar Carrito</button>
                            <div>
                                <Button sx={styleButton} onClick={handleOpen}>Checkout</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    >
                                    <Box sx={style}>
                                        <div className='modal__vista'>
                                            <h1 className='modal__vista'>Pasos Finales...</h1>
                                            <h5>Productos: {cantidad}</h5>
                                            <h5>Total: ${total}</h5>
                                            <h6>Completa este formulario para finalizar</h6>
                                            <form onSubmit={finalizarCompra}>
                                            <Typography/>
                                            <TextField
                                                helperText="Ingrese su nombre"
                                                name="nombre"
                                                type="text"
                                                label="Nombre"
                                                value={datosUsuario.nombre}
                                                onChange={handleInputChange}
                                                />
                                            <TextField
                                                helperText="Ingrese su Email"
                                                name="correo"
                                                type="email"                                                   
                                                label="Correo"
                                                required
                                                value={datosUsuario.correo}
                                                onChange={handleInputChange}
                                                />
                                                <Button sx={styleButton} onClick={finalizarCompra}>Finalizar Compra</Button>
                                        </form>
                                    </div>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                    </div>
                </>
            )}

        </>
    )
}


export default Cart