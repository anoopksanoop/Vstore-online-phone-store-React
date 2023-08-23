
import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { footContext } from "../Context";
import { useNavigate } from "react-router-dom";
import './Admin.css'

const AdminAddProducts = ({handleAddProduct}) => {
  const {products,setProducts}=useContext(footContext)

  const [newProduct, setNewProduct] = useState({
    id: "",
    image: "",
    model: "",
    decs: "",
    price: 0,
    Qty: 1
  });

  const navigate=useNavigate()

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    console.log(updatedProducts);

    setNewProduct({
      id: "",
      image: "",
      model: "",
      decs: "",
      price: 0,
      Qty: 1
    });
    navigate('/admin/products')

  };


  return (
    <div className="form">
        <Form onSubmit={handleSubmit} className="top">
      <Form.Group controlId="title">
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.id}
            onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.model}
            onChange={(e) => setNewProduct({ ...newProduct, model: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.decs}
            onChange={(e) => setNewProduct({ ...newProduct, decs: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: parseInt(e.target.value) })}
            required
          />
        </Form.Group>
        <Form.Group controlId="qty">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            value={newProduct.Qty}
            onChange={(e) => setNewProduct({ ...newProduct, Qty: parseInt(e.target.value) })}
            required
          />
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  )
}

export default AdminAddProducts