import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ProductForm from '../components/ProductForm';



const Update = (props)=> {
    const {id} = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded]= useState(false);
    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");
    // const [headerTitle, setHeaderTitle] = useState("");

    useEffect(()=> {
        axios
            .get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                // console.log(res.data);
                // setTitle(res.data.title);
                // setPrice(res.data.price);
                // setDescription(res.data.description);
                // setHeaderTitle(res.data.title);
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
                <ProductForm 
                    onSubmitProp = {updateProduct} 
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription = {product.description}
                />
            )}
            
        </div>
    )
}
export default Update;