import React, {useEffect, useState} from "react";
import  './itemListContainer.css'
import Itemlist from "./Itemlist/Itemlist";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";

// import { ItemCount } from "../Components/ItemCount/ItemCount";


const mangaStock = [
    
        {
            id: 1,
            titulo: "Bleach",
            imagen: "https://api-cdn.myanimelist.net/images/manga/3/180031.jpg",
            precio: 750,
            stock: 15,
            descripcion: "Volumen 1 del manga Bleach"
        },
        {
            id: 2,
            titulo: "Kimetsu no Yaiba",
            imagen: "https://api-cdn.myanimelist.net/images/manga/3/179023.jpg",
            precio: 750,
            stock: 10,
            descripcion: "Volumen 1 del manga Kimetsu no Yaiba"
        },
        {
            id: 3,
            titulo: "Boku no Hero Academia",
            imagen: "https://api-cdn.myanimelist.net/images/manga/1/209370.jpg",
            precio: 750,
            stock: 5,
            descripcion: "Volumen 1 del manga Boku no Hero"
        },
        {
            id: 4,
            titulo: "Black Clover",
            imagen: "https://api-cdn.myanimelist.net/images/manga/2/166254.jpg",
            precio: 750,
            stock: 5,
            descripcion: "Volumen 1 del manga Black Clover"
        },
        {
            id: 5,
            titulo: "One Piece",
            imagen: "https://api-cdn.myanimelist.net/images/manga/2/253146.jpg",
            precio: 850,
            stock: 20,
            descripcion: "Volumen 1 del manga One Piece"
        }
    
]

const obtenerDatos = new Promise((resolve, reject) => {
    resolve(mangaStock);
})


export const ItemListContainer = ({greeting}) => {

    const [listaManga, setListaManga] = useState([]);
    const [loader, setLoader] =useState(true);

    useEffect(()=>{
        obtenerDatos
        .then((data)=>{
            setListaManga(data)})
        .catch((error)=>{
            console.log("error");
        })
        .finally(
            setLoader(false)
        )
        console.log(fetch);
    },[])
    
    // const onAdd = (cantidad) => {
    //     console.log(`Agregaste ${cantidad} producto/s` )
    // };
    

    return (
        <>
        <h1 className="tituloSaludo">{greeting}</h1>
        {<>
            {loader ? <h1>Cargando...</h1>:<Itemlist listaManga={listaManga}/>} 
        </> }
            <ItemDetailContainer/>
        </>

    );
    
};

