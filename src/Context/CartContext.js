import React, {createContext, useState, useContext, useEffect} from "react";  


const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);

const storageCarrito = () => {
    const carritoLista = localStorage.getItem('listaCarrito')
    return carritoLista ? JSON.parse(carritoLista) : []
}

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(storageCarrito);
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState (0)


    useEffect(()=>{
        localStorage.setItem('listaCarrito', JSON.stringify(carrito))
        let cantidad = 0;
        let totalC = 0;
        carrito.forEach(item => {
            cantidad += item.cantidad
            totalC += (item.precio * item.cantidad)
            });
            setCantidad(cantidad)
            setTotal(totalC)
    },[carrito])



    const agregarItem = (item, cantidad) => {
    if (IsInCart(item.id)) {
        const carritoModificado = carrito.map ((producto=> {
            if (producto.id === item.id) {
            producto.cantidad += cantidad
        }
            return producto;
        }))
        setCarrito(carritoModificado)
        }else {
            setCarrito([...carrito, {...item, cantidad:cantidad}])
            
        }
        }   

    const IsInCart = (id) => {
            return carrito.some((item)=>item.id === id )
        }

    const borrarItem = (id) => {
        setCarrito(carrito.filter(item=> item.id !==id))
    }

    const vaciarCarrito = () =>{
        setCarrito([])
        setCantidad(0)
        setTotal(0)
    }

    return <CartContext.Provider value={{carrito, cantidad, total, IsInCart, agregarItem, borrarItem, vaciarCarrito}}>
        {children}
        </CartContext.Provider>

}
