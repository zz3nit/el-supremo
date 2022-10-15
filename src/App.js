import React from "react";
import './App.css';
import Navbar from "./Components/Header/Navbar";
import { ItemListContainer } from "./Containers/ItemListContainer";
import Cart from "./Containers/CartView/Cartview";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";





const App = () => {
  const mensaje = "Pagina en construccion"
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting = {mensaje}/>}/>
      <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting = {mensaje}/>} />
      <Route path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
};

export default App


/* <ItemListContainer greeting = {mensaje}/>
    <ItemDetailContainer/>*/