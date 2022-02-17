import React, { useState } from "react";


const ProductForm = (props) => {
  // const {products, setProducts} = props
  const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProp({title, price, description});
    setTitle("");
    setPrice("");
    setDescription("");

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Product Manager</h1>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
