import React, {useEffect, useState} from "react";
import  './itemListContainer.css'
import Itemlist from "./Itemlist/Itemlist";
import { useParams } from "react-router-dom";
import {JellyTriangle} from '@uiball/loaders'
import { getDocs, collection, query, where } from "firebase/firestore"
import { dataBase } from "../firebase/firebase" 


export const ItemListContainer = ({greeting}) => {
    
    const {idCategoria} = useParams();
    

    const [listaProductos, setListaProductos] = useState([]);
    const [loader, setLoader] = useState(true);


    const productosCollection = collection(dataBase, 'productos')
    const q = idCategoria ? query(productosCollection, where('categoria', '==', idCategoria )) : productosCollection


    useEffect(()=> {
        getDocs(q)
        .then((result) => { 
            const listaStock = result.docs.map((items) => {
                return {
                    ...items.data(),
                    id: items.id,
                };
            });
            setListaProductos(listaStock);
        })
        .catch((error)=>{
            console.log("error");
        })
        .finally(()=> setLoader(false))


    },[idCategoria])
    

    

    return (
        <>
        <h1 className="tituloSaludo">{greeting}</h1>
        {<>
            {loader ? <main className="loader__itemList"><JellyTriangle zise ={100} lineWeight={5} speed={1.5} color={"#0cc9a7"} /></main>:<Itemlist listaProductos={listaProductos}/>} 
        </> }
            
        </>

    );
    
};

