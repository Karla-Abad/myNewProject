import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import React, { useState } from "react";
import axios from "axios";


const Main = () => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      
      <ProductForm products={products} setProducts={setProducts} />
      <hr />
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

export default Main;
