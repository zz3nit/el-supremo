import React from "react";
import  './itemList.css'

export const ItemListContainer = ({greeting}) => {
    

    return (
        <>
        <h1 className="tituloSaludo">{greeting}</h1>
        </>
    );
};