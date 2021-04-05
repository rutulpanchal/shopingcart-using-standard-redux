import React from "react";
import { useSelector } from "react-redux";
import "./shop.css";

import CartItems from "./CartItems";
const Shop = () => {
  const totalPrice = useSelector((state) => state.total);

  return (
    <div>
      <table className="table">
        <tr>
          <th>name</th>
          <th>image</th> <th>Quantity</th> <th>price</th>
          <th></th>
        </tr>
      </table>
      <table>
        <CartItems />
        <p>total:{totalPrice} $</p>
      </table>
    </div>
  );
};

export default Shop;
