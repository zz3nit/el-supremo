import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { getDoc, collection, doc } from "firebase/firestore";
import { dataBase } from "../../firebase/firebase";
import { Jelly } from "@uiball/loaders";


const ItemDetailContainer = () => {
  const [product, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const { idProducto } = useParams();

  useEffect(() => {
    const productosCollection = collection(dataBase, 'productos');
    const productoDoc = doc(productosCollection, idProducto);

    getDoc(productoDoc)
    .then(result => {
      setProducto({
        id:result.id,
        ...result.data()
      })
    })
    .catch((error)=>{
      console.log("error");
    })
    .finally(() => setLoading(false));

  }, [idProducto]);

  return (
    <>
      <div>
        {" "}
        {loading ? 
          <section className="loader__itemdetail">
            <Jelly size={100} speed={0.9} color="#0cc9a7" />
          </section>
         : 
          <ItemDetail product={product} />
        }
      </div>
    </>
  );
};

export default ItemDetailContainer;
