import React from "react";
import './App.css';
import Navbar from "./Components/Header/Navbar";
import { ItemListContainer } from "./Components/Containers/ItemListContainer";




const App = () => {
  const mensaje = "Estas por descubrir la magia de la lectura"
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting = {mensaje}/>
    </>
  );
};

export default App