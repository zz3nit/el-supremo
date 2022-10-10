import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";



const mangaStock = [
    
    {
        id: 1,
        titulo: "Bleach",
        imagen: "https://api-cdn.myanimelist.net/images/manga/3/180031.jpg",
        imagenDetail: "https://i.pinimg.com/originals/77/bd/49/77bd4950d0fc874cf5d235f3e337d2be.jpg",
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
    resolve(mangaStock[0]);
})


const ItemDetailContainer = () => {


    const [listaMangaUno, setListaMangaUno] = useState([]);
    

    useEffect(()=>{
        obtenerDatos
        .then((data)=>{
            setListaMangaUno(data)})
        .catch((error)=>{
            console.log("error");
        })
        console.log(fetch);
    },[])



    return(
        <div>
           <ItemDetail listaMangaUno={listaMangaUno}/>
        </div>
    )
}


export default ItemDetailContainer;