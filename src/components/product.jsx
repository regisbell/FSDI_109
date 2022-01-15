/* eslint-disable jsx-a11y/alt-text */
import "./product.css";
import { useState, useContext } from "react";
import QuanityPicker from "./quanityPicker";
import storeContext from "../context/storeContext";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const add2Cart = useContext(storeContext).addProductToCart

  const handleQuantityChange = (val) => {
    setQuantity(val);
  };

  const getTotal = () => {
    let total = quantity * props.info.price;

    return total.toFixed(2);
  }

  const handleAdd = () => {

    let prod = {
      ...props.info,
      quantity: quantity
    };

    add2Cart(prod); // call the function that exist in the context (check the import)
  };

  return (
    <div className="product">
      <label className="prod-category">{props.info.category}</label>
      <img src={"/images/" + props.info.image} alt="product"></img>
      <h2>{props.info.title}</h2>
      <div>
        <label className="price">${props.info.price.toFixed(2)}</label>
        <br></br>
        <label className="total">${getTotal()}</label>
      </div>
      <div>
        <QuanityPicker onChange={handleQuantityChange}></QuanityPicker>
        <button onClick={handleAdd} className="btn-add btn-sm btn-primary">Add to Cart</button>
        <i className="fa fa-cart-plus" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Product;
