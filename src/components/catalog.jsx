import "./catalog.css";
import Product from "./product";
import React, { useEffect, useState } from "react";
import DataService from "../services/dataService";

const Catalog = () => {
  // state vars are IMMUTABLES
  let [products, setProducts] = useState([]);

  const loadCatalog = () => {
    console.log("Catalog cmp loaded");
    let service = new DataService();
    let data = service.getCatalog();
    setProducts(data);
    console.log("Retrieved", data);
  };

  
  useEffect(() => {
    loadCatalog();
  }, []);

  return (
    <div className="catalog">
      <h1>This is my awesome Catalog</h1>
      <h3>We have {products.length} amazing products for you</h3>

      {products.map((prod) => (
        <Product key={prod._id} info={prod}></Product>
      ))}
    </div>
  );
};

export default Catalog;
