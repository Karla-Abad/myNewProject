import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "@reach/router";
import DeleteButton from "./DeleteButton";


const ProductList = (props) => {
  
  const {products, setProducts} = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data.allProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId))
  }

  return (
    <div>
      <h2>All Products</h2>
      
      {
        products.map((product, index) => {
          return (
          <div key={index}>
            <div className="flex"> 
              <Link to={`/products/${product._id}`}>{product.title}</Link>
              <div>
              <DeleteButton productId={product._id} successCallback = {()=> removeFromDom(product._id)} />
              </div>
            </div>
            <div className="edit">
              <Link to={"/products/edit/"+product._id}>Edit</Link>
            </div>
            <hr className="list"/>
          </div>)
      })}
    </div>
  );
};

export default ProductList;
