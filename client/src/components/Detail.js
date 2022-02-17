import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import DeleteButton from './DeleteButton';


const Detail = (props)=>{
    const [product, setProduct] = useState({})
    const[products, setProducts]=useState([])
    const {id} = props;
    
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
      }

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products/" + id)
        .then(res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            
            <h2>{product.title}</h2>
            <div>Price: ${product.price}</div>
            <div>Description: {product.description}</div>
            <DeleteButton productId={product._id} successCallback = {()=> navigate("/products")} />
            
        </div>
    )
}

export default Detail;