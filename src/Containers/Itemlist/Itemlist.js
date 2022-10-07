import React from "react";
import Item from "../Item/Item";

const Itemlist = ({listaManga}) => {
    return (
    <main>
        {listaManga.map((items) => {
            return <Item key={items.id} item={items}/>;
        })}
    </main>
    );
};

export default Itemlist;