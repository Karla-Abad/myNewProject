import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import DeleteButton from '../components/DeleteButton';
import ProductForm from '../components/ProductForm';

const Update = (props)=> {
    const {id} = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded]= useState(false);

    useEffect(()=> {
        axios
            .get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    },[]);

    const updateProduct = (product) => {   
        axios
            .put("http://localhost:8000/api/products/" + id, product) 
            .then((res) => {
                console.log(res);
                console.log(res.data);  
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit Product</h1>
            {loaded && (
                <div>
                    <ProductForm 
                        onSubmitProp = {updateProduct} 
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription = {product.description}
                    />
                    <div className='deleteButton'>
                        <DeleteButton productId={product._id} successCallback = {()=> navigate("/products")} />
                    </div>
                </div>
            )}
            
        </div>
    )
}
export default Update;