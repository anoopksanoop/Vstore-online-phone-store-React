import React from 'react'
import { useContext } from 'react';
import { Card,Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { footContext } from "../Context";

const Samsung = () => {
    const {products}=useContext(footContext)
    console.log("context products:",products);
    
    const filterProducts =
      
    products.filter((product) => product.model.includes("SAMSUNG"));
      
    
      console.log("Samsung",filterProducts)
    
      
      const productsdlt = new useNavigate();
    
      function Productdis(id) {
         console.log("id: " + id);
           productsdlt(`/ProductDtls/${id}`)
        
        }
  return (
    <div style={{marginTop:"130px"}}>
         <div>
    {  filterProducts.map((item) => (
          <div className="d-inline-flex" key={item.id}>
            <Card 
              className="shadow p-3 mb-2 bg-body-tertiary rounded"
              style={{ width: "15rem", color: "black"}}>

              <Card.Img  data-aos="zoom-in-up"
                style={{ height: "15rem" }}
                className="p-2"
                variant="top"
                src={item.image}
                alt="img"
                />

              <Card.Body className="pdtDlt">
                <Card.Title data-aos="zoom-in-right">{item.model}</Card.Title>
                <h5 data-aos="zoom-in-left">₹{item.price}</h5>
                <div>
                 
                </div>
                <Button data-aos="fade-up" variant="primary" onClick={()=>Productdis(item.id)}>
                  View
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
    </div>
  )
}

export default Samsung