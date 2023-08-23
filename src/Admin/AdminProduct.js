import React, { useContext } from "react";
import "./Admin.css";
import { Button, Card } from "react-bootstrap";
import { footContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.css";


const AdminProducts = () => {
  const { setProducts, products } = useContext(footContext);
  const navigate = useNavigate();


  const handleAddProduct = () => {
    navigate("/admin/addProduct");
  };
  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="top">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2 className="list">Product List</h2>
        <Button className="addproduct" onClick={handleAddProduct}>
          Add New Product
        </Button>
      </div>

      <ul style={{ display: "flex", flexDirection: "column" }}>

        {products.map((product) => (
          <div className="d-inline-flex" key={product.id}>
            <Card
              className="shadow p-3 mb-2 bg-body-tertiary rounded"
              style={{ width: "15rem", color: "black" }}
            >
              <Card.Img
                data-aos="zoom-in-up"
                style={{ height: "15rem" }}
                className="p-2"
                variant="top"
                src={product.image}
                alt={product.model}
              />

              <Card.Body className="pdtDlt">
                <Card.Title data-aos="zoom-in-right">
                  {product.model}
                </Card.Title>
                <h5 data-aos="zoom-in-left">{product.price}</h5>
                <div></div>
                <Button
                  data-aos="fade-up"
                  variant="primary"
                  onClick={() => handleDelete(product.id)}>
                  Delete
                </Button>
                {/* <Button onClick={() => handleEdit(product.id)}>Edit</Button> */}
                <Link to={`/edit/${product.id}`}>Edit</Link>

              </Card.Body>
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AdminProducts;
