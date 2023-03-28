import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  console.log(Product);
  const { name, id, img, seller, price, quantity, ratings } = props.product;
  const handelerAddToCart = props.handelerAddToCart;
   
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4 className="product-name">Name : {name}</h4>
        <p>price : {price}</p>
        <p>MenuFacturer : {seller}</p>
        <p>Rating : {ratings} sters</p>
      </div>
      <button
        onClick={() => handelerAddToCart(props.product)}
        className="btn-cut"
      >
        Add to cart <FontAwesomeIcon icon={faCoffee} />
      </button>
    </div>
  );
};

export default Product;
