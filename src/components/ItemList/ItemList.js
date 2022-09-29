import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <>
      <h1>Item list</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {items.map((producto) => (
            <Item key={producto.id} item={producto} />
          ))}
        </div>
    </>
  );
};

export default ItemList;
