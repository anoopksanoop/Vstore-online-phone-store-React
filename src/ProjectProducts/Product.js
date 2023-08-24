
import "./products.css";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { footContext } from "../Context";

const Product = () => {
const [Search, setSearch] = useState('')

const {products}=useContext(footContext)
console.log("context products:",products);


console.log(Search)
  
   const productsdlt = new useNavigate();

 function Productdis(id) {
    console.log("id: " + id);
      productsdlt(`/ProductDtls/${id}`)
   
   }
  
  return (
    <div>
      <div className="Input">
            <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            onChange={(e)=>setSearch(e.target.value)} />
      </div>

     <div class="slider" data-aos="zoom-in-down" data-aos-duration="1000">
       <div class="slides">
        <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1690335581_253.jpg" alt="Image1"/>
        <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1689756463_235.jpg" alt="Image2"/>
        <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1687768657_255.jpg" alt="Image3"/>
        <img src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1689399083_234.jpg" alt="Image4"/>
       </div>
     </div>

  <div className="mobile"  style={{justifyContent:"center"}}>

  
        <div className="product_tittle">
          <h1 className="head">Products</h1>
        </div>


        {products.filter((item)=>{
          return Search.toLowerCase()===''? item : item.model.toLowerCase().includes(Search) 
        })

        .map((item) => (
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
  );
};

export default Product;
