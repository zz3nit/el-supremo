import React, { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { dataBase } from "../../firebase/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify'
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
    const [ordenId, setOrdenId] = useState('')
   
    

    const finalizarCompra = () => {
        if (datosUsuario.nombre !== "" && datosUsuario.correo !== "" ){
        const ventasCollection = collection(dataBase, 'ventas')
        const fechaDeCompra = new Date().toLocaleDateString()
        addDoc(ventasCollection,{
            datosUsuario,
            item: carrito,
            total,
            fechaDeCompra: fechaDeCompra
        })
        .then(result=>{
            setOrdenId(result.id);
            
        })
        .finally(actualizarStock)
        vaciarCarrito()
        toast.success('Compra exitosa! Generando ID de compra no se olvide de guardarlo', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    } else {
        toast.error('COMPLETE TODOS LOS CAMPOS', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
    } 
    } 

    const actualizarStock = () => {
        carrito.forEach(item => {
        const cambioStock = doc(dataBase, "productos", item.id )
        updateDoc(cambioStock,{stock: item.stock - item.cantidad}) 
        });
        
    }


    const valoresIniciales = { nombre:"", correo:""}
    const [datosUsuario, setDatosUsuario] = useState(valoresIniciales)
    const [erroresDatos, setErroresDatos] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosUsuario({ ...datosUsuario, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErroresDatos(validacion(datosUsuario));
        if(Object.keys(erroresDatos).length===0){
            setIsSubmit(true)
        }
        setErroresDatos(validacion(datosUsuario));
    };



    const validacion = (valores) => {
        const errores = {};
        const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!valores.nombre) {
            errores.nombre = "Escribe tu nombre completo!";
        }
        if (!valores.correo) {
            errores.correo = "Correo es requerido!";
        } else if (!regex.test(valores.correo)) {
            errores.correo = "Este no es un correo valido!";
        }
        return errores;
    };

    return (
        <>
            {carrito.length === 0 ? (
                <div className="carrito__final">
                <h1>No hay elementos en el carrito aun, puedes volver a <Link to="/">COMPRAR</Link>
                </h1>
                <h2>
                    {ordenId && <p>Este es el id de su compra:<span className="orden__id"> {ordenId} </span></p>}
                </h2>
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
                                        <form onSubmit={handleSubmit}>
                                            <Typography/>
                                            <TextField
                                                helperText="Ingrese su nombre"
                                                name="nombre"
                                                type="text"
                                                label="Nombre"
                                                value={datosUsuario.nombre}
                                                onChange={handleChange}
                                                />
                                                <p>{erroresDatos.nombre}</p>
                                            <TextField
                                                helperText="Ingrese su Email"
                                                name="correo"
                                                type="email"                                                   
                                                label="Correo"
                                                required
                                                value={datosUsuario.correo}
                                                onChange={handleChange}
                                                />
                                                <p>{erroresDatos.correo}</p>
                                                {!isSubmit&&<button type="submit">Registrate</button>}
                                                {isSubmit&&<Button sx={styleButton} onClick={finalizarCompra}>Finalizar Compra</Button>}
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