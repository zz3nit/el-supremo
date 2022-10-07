import React, {useState} from "react";
import imagen from '../../assets/demonslayer.jpg'
import  './itemCount.css'


export const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setcantidad] = useState(initial)

    const restarcantidad = () => {
        if (cantidad > 1 ){
            setcantidad (cantidad - 1)
        }
        
    }

    const sumarcantidad = () => {
        if (cantidad < stock) {
            setcantidad (cantidad + 1)
        }
        
    }

{/* <ItemCount stock={10} initial={1} onAdd={onAdd} /> */}

return (
    <div className="estiloContador">
    <h1>Contador productos</h1>
    <img src={imagen} alt="" />
    <div className="estiloCompra">
    <button onClick={restarcantidad}>-</button>
    <h2>{cantidad}</h2>
    <button onClick={sumarcantidad}>+</button>
    <button className="botonCompra" disabled={stock===0} onClick={()=>onAdd(cantidad)}>
        <span>{stock === 0 ? "No tenemos Stock" : "Agregar al carrito"}</span>
    </button>
    </div>
    </div>
)
}