import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "@reach/router"

const ProductList = (props) => {
  const {products, setProducts, removeFromDom} = props;

  
  const handleDelete = (productId) => {
    axios
    .delete("http://localhost:8000/api/products/"+productId)
    .then(res => {
      removeFromDom(productId)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data.allProducts);
        setProducts(res.data.allProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <div>
      <h2>All Products</h2>
      {
      products.map((product, index) => {
        return <div key={index}>
          {/* <div >
            {product.title}, {product.price}, {product.description}
          </div> */}
          <div className="flex"> 
          <Link to={`/products/${product._id}`}>{product.title}</Link>
          
          <div>
            <button onClick={(e)=>{handleDelete(product._id)}}>Delete</button>
          </div>
          </div>
          <div className="edit">
            <Link to={"/products/edit/"+product._id}>Edit</Link>
          </div>
          <hr className="list"/>
        </div>;
      })}
    </div>
  );
};

export default ProductList;
