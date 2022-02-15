import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import React, { useState } from "react";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <h2>Main</h2>
      <ProductForm />
      <hr />
      <ProductList />
    </div>
  );
};

export default Main;
