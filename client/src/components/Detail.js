import axios from 'axios';
import React, {useState, useEffect} from 'react';


const Detail = (props)=>{
    const [product, setProduct] = useState({})
    const {id} = props;

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
            <h2>Show One Product By Id</h2>
            <div>Title: {product.title}</div>
            <div>Price: {product.price}</div>
            <div>Description: {product.description}</div>
        </div>
    )
}

export default Detail;