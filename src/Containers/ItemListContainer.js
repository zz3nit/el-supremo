import React from "react";
import  './itemList.css'
import { ItemCount } from "../Components/ItemCount/ItemCount";

export const ItemListContainer = ({greeting}) => {

    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} producto/s` )
    };
    

    return (
        <>
        <h1 className="tituloSaludo">{greeting}</h1>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </>
    );
};