/** @format */

import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          adipisicing elit. Fugiat, (provident).
        </p>
        <p className="product__price">$30</p>
        <div className="product__rating">❤❤</div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
        alt=""
        srcset=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
