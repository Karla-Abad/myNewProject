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
            
            <h2>{product.title}</h2>
            <div>Price: ${product.price}</div>
            <div>Description: {product.description}</div>
            <button>Delete</button>
        </div>
    )
}

export default Detail;