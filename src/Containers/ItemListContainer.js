import React, {useEffect, useState} from "react";
import  './itemListContainer.css'
import Itemlist from "./Itemlist/Itemlist";
import { useParams } from "react-router-dom";
import {RaceBy} from '@uiball/loaders'


// import { ItemCount } from "../Components/ItemCount/ItemCount";


const productoStock = [
    
    {
        id: 1,
        titulo: "Bleach",
        categoria:"Mangas",
        imagen: "https://api-cdn.myanimelist.net/images/manga/3/180031.jpg",
        imagenDetail: "https://i.pinimg.com/originals/77/bd/49/77bd4950d0fc874cf5d235f3e337d2be.jpg",
        precio: 750,
        stock: 15,
        descripcion: "Volumen 1 del manga Bleach"
    },
    {
        id: 2,
        titulo: "Kimetsu no Yaiba",
        categoria:"Mangas",
        imagen: "https://api-cdn.myanimelist.net/images/manga/3/179023.jpg",
        precio: 750,
        stock: 10,
        descripcion: "Volumen 1 del manga Kimetsu no Yaiba"
    },
    {
        id: 3,
        titulo: "Boku no Hero Academia",
        categoria:"Mangas",
        imagen: "https://api-cdn.myanimelist.net/images/manga/1/209370.jpg",
        precio: 750,
        stock: 5,
        descripcion: "Volumen 1 del manga Boku no Hero"
    },
    {
        id: 4,
        titulo: "Black Clover",
        categoria:"Mangas",
        imagen: "https://api-cdn.myanimelist.net/images/manga/2/166254.jpg",
        precio: 750,
        stock: 5,
        descripcion: "Volumen 1 del manga Black Clover"
    },
    {
        id: 5,
        titulo: "One Piece",
        categoria:"Mangas",
        imagen: "https://api-cdn.myanimelist.net/images/manga/2/253146.jpg",
        precio: 850,
        stock: 20,
        descripcion: "Volumen 1 del manga One Piece"
    },
    { 
        id: 6,
        titulo: "LOS CUATRO FANTASTICOS",
        categoria: "Comics",
        imagen: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_586,h_896/https://www.tutopiaplace.com.ar/wp-content/uploads/2022/10/9786076363898.jpg",
        precio: 3150,
        stock: 20,
        descripcion: "¡UN EVENTO INTERGALÁCTICO QUE CAMBIARÁ AL UNIVERSO MARVEL!.Con los Kree y los Skrulls unidos bajo un nuevo emperador, sus flotas de guerra marcan su curso… ¡directo hacia la Tierra! Los Avengers están listos para luchar, mientras que los Cuatro Fantásticos buscan una solución diplomática. Pero si no pueden trabajar juntos, entonces el mundo quizás no sobreviva. ¡Pase lo que pase, ambos equipos serán llevados al límite como nunca antes! ¡La nueva era espacial de Marvel comienza aquí!"
    },
    { 
        id: 7,
        titulo: "COMIC BATMAN: EL DETECTIVE",
        categoria: "Comics",
        imagen: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_558,h_754/https://www.tutopiaplace.com.ar/wp-content/uploads/2022/06/detec.jpg",
        precio: 3250,
        stock: 20,
        descripcion: "Una tragedia en el Reino Unido lleva al Caballero Oscuro a Europa para investigar. Una organización adversaria y misterosa se está encargando de asesinar a cada persona cuya vida alguna vez fue salvada por Batman. ¡Con la ayuda de Caballero, la Escudera y antiguos aliados de su pasado, Batman tendrá que resolver este misterio antes de que todo sea consumido por las llamas!"
    },
    { 
        id: 8,
        titulo: "MASTERS OF THE UNIVERSE: REVELATION",
        categoria: "Comics",
        imagen: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://www.tutopiaplace.com.ar/wp-content/uploads/2022/09/mastersoftheuniverse.jpg",
        precio:2950,
        stock: 20,
        descripcion: "Después de un salvaje ataque del Orlax sobre su padre, el Rey Randor, He-Man descubre que la criatura está vinculada al origen de la Espada de Poder. Para salvar a Randor y ponerle fin al caos, He-Man se embarca en un épico viaje que lo enfrenta a sus eternos enemigos Skeletor y Evil-Lyn, e incita a Teela a tomar las riendas de un poderoso legado."
    },
    { 
        id: 9,
        titulo: "SENSACIONAL WONDER WOMAN",
        categoria: "Comics",
        imagen: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_600,h_848/https://www.tutopiaplace.com.ar/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-16-at-4.28.54-PM.jpeg",
        precio:3650,
        stock: 20,
        descripcion: "Celebrando el 80 aniversario de Wonder Woman, Sensacional Wonder Woman explora todo lo que vuelve a la Amazona la sensacional heroína amada por el mundo. ¡Incluye historias de Stephanie Phillips, Meghan Hetrick, Andrea Shea, Meghan Hetrick, Colleen Doran, Dani Strips, Alyssa Wong y muchos otros increíbles dibujantes!"
    },
    { 
        id: 10,
        titulo: "FIGURA MONKEY D LUFFY ONE PIECE",
        categoria: "Merchandising",
        imagen: "https://kurogami.com/med/img/productos/42/85/FIGURA_MONKEY_D_LUFFY_ONE_PIECE_DXF_THE_GRANDLINE_MEN_WANOKUNI_VOL_24_2.webp",
        precio:8500,
        stock: 20,
        descripcion: "¡Monkey D. Luffy pone rumbo hacia una nueva aventura !Fantástica figura de Monkey D. Luffy del anime y manga One Piece, dentro de la linea DXF The Grandline Men Wanokuni Vol 24. Esta figura mide 16 cms y ha sido fabricada por Banpresto en PVC y ABS de alta calidad."
    },
    { 
        id: 11,
        titulo: "FIGURA DEKU IZUKU MIDORIYA MY HERO ACADEMIA",
        categoria: "Merchandising",
        imagen: "https://kurogami.com/med/img/productos/42/85/FIGURA_DEKU_IZUKU_MIDORIYA_MY_HERO_ACADEMIA_THE_AMAZING_HEROES_PLUS_VOL_2_2.webp",
        precio:10500,
        stock: 20,
        descripcion: "Increíble figura de Izuku Midoriya del anime y manga My Hero Academia, dentro de la linea The Amazing Heroes Plus, Esta figura mide 13 cms y ha sido fabricada por Banpresto en PVC y ABS de alta calidad."
    },
    { 
        id: 12,
        titulo: "FIGURA SATORU GOJO II JUJUTSU KAISEN JUKON NO KATA",
        categoria: "Merchandising",
        imagen: "https://kurogami.com/med/img/productos/42/85/FIGURA_SATORU_GOJO_II_JUJUTSU_KAISEN_JUKON_NO_KATA_2.webp",
        precio:13500,
        stock: 20,
        descripcion: "Genial figura de Satoru Gojo del anime y manga Jujutsu Kaisen, dentro de la linea Jukon no Kata, Esta figura mide 17cms y ha sido fabricada por Banpresto en PVC y ABS de alta calidad."
    },
    { 
        id: 13,
        titulo: "FIGURA NEZUKO KAMADO KIMESTU NO YAIBA KIZUNA NO SOU",
        categoria: "Merchandising",
        imagen: "https://kurogami.com/med/img/productos/42/85/FIGURA_NEZUKO_KAMADO_KIMETSU_NO_YAIBA_KIZUNA_NO_SOU_2.webp",
        precio:11500,
        stock: 20,
        descripcion: "Preciosa figura de Nezuko Kamado anime y manga Kimetsu no Yaiba, dentro de la linea Kizuna no Sou, Esta figura mide 15 cms y ha sido fabricada por Banpresto en PVC y ABS de alta calidad."
    },



]


const obtenerDatos= () => { 
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(productoStock);
        },2000)
        
})}


export const ItemListContainer = ({greeting}) => {

    const {idCategoria} = useParams();
    console.log(idCategoria);
 

    const [listaProductos, setListaProductos] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        obtenerDatos()
        .then((data)=>{
            if(idCategoria){
                setListaProductos(data.filter(productos=>productos.categoria===idCategoria))
            }else {
                setListaProductos(data)
            }
        })
        .catch((error)=>{
            console.log("error");
        })
        .finally(()=> setLoader(false))

    },[idCategoria])
    
    // const onAdd = (cantidad) => {
    //     console.log(`Agregaste ${cantidad} producto/s` )
    // };
    

    return (
        <>
        <h1 className="tituloSaludo">{greeting}</h1>
        {<>
            {loader ? <main className="loader__itemList"><RaceBy zise ={200} lineWeight={5} speed={1.5} color={"#0cc9a7"} /></main>:<Itemlist listaProductos={listaProductos}/>} 
        </> }
            
        </>

    );
    
};

