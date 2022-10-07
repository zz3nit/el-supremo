import React from "react";
import './App.css';
import Navbar from "./Components/Header/Navbar";
import { ItemListContainer } from "./Containers/ItemListContainer";




const App = () => {
  const mensaje = "Pagina en construccion"
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting = {mensaje}/>
    </>
  );
};

export default App