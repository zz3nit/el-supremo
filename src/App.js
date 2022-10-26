import React from "react";
import './App.css';
import Navbar from "./Components/Header/Navbar";
import { ItemListContainer } from "./Containers/ItemListContainer";
import Cart from "./Containers/CartView/Cartview";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";





const App = () => {
  const mensaje = "Bienvenidos a El Supremo"
  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting = {mensaje}/>}/>
        <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting = {mensaje}/>} />
        <Route path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<ItemListContainer/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
    
  );
};

export default App


/* <ItemListContainer greeting = {mensaje}/>
    <ItemDetailContainer/>*/