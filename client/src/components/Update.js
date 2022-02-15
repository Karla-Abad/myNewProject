import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Update = (props)=> {
    const {id} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [headerTitle, setHeaderTitle] = useState("");

    useEffect(()=> {
        axios
        .get("http://localhost:8000/api/products/"+id)
        .then(res => {
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setHeaderTitle(res.data.title);
        })
        .catch(err => console.log(err))
    },[]);

    const updateProduct = (e) => {
        e.preventDefault();
        
        axios
        .put("http://localhost:8000/api/products/"+id, {
            title,
            price,
            description,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit {headerTitle}</h1>
            <form onSubmit={updateProduct}>
                <div className="form-fields">
                    <label>Title</label>
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-fields">
                    <label>Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="form-fields">
                    <label>Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
export default Update;