import React from "react";
import Item from "../Item/Item";

const Itemlist = ({listaProductos}) => {
    return (
    <main>
        {listaProductos.map((items) => {
            return <Item key={items.id} item={items}/>;
        })}
    </main>
    );
};

export default Itemlist;