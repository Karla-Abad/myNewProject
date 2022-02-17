import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import React, { useEffect, useState } from "react";
import axios from "axios";


const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded]= useState(false);

  useEffect(()=> {
    axios
    .get("http://localhost:8000/api/products")
    .then((res) => {
      console.log(res)
      setProducts(res.data.allProducts)
      setLoaded(true);
    })
    .catch(err => console.log(err))
  },[]);

  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId));
  }

  const createProduct = product => {
    axios
    .post("http://localhost:8000/api/products", product)
    .then(res => {
      setProducts([...products, res.data])
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
      <ProductForm onSubmitProp={createProduct} initialTitle ="" initialPrice="" initialDescription="" />
      <hr />
      {loaded && <ProductList products={products}  setProducts ={setProducts} removeFromDom={removeFromDom} />}
    </div>
  )
}

export default Main;
