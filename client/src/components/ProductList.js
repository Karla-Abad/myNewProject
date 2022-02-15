import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

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
      <h2>Test Product List</h2>
      {
      products.map((product, index) => {
        return <div key={index}>
          <div >
            {product.title}, {product.price}, {product.description}
          </div>
        </div>;
      })}
    </div>
  );
};

export default ProductList;
