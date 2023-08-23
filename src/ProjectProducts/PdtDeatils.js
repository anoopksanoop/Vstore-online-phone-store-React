import React, { useContext } from "react";
import "./products.css";
import "./pdtDeatils.css";
import { useNavigate, useParams } from "react-router-dom";
import { phonesdata } from "./productData";
import { footContext } from "../Context";
import { Link } from "react-router-dom";

function PdtDeatils() {

const data=useContext(footContext);
const {cartItems,setCartItems}=data;
// const updatedCartItems=[...cartItems]

const addToCart=(product)=>{

  setCartItems([...cartItems,product])
  console.log('update',cartItems)
}

  const { id } = useParams();
  console.log("id=" + id);
  const productid = phonesdata.find((p) => p.id === parseInt(id));
  console.log(productid);

  if (!productid) {
    return <div>Phone not found.</div>;
  }

 const Order = new useNavigate();

 const productOrder = () => {
    Order(`/Order/${id}`);
  }; 

  

  return (
    <div>
      <div className="product-container" key={productid.id}  >
        <div className="product-image">
          <img
            className="we"
            src={productid.image}
            alt="img"/>
        </div>

        <div className="product-info">
          <h1>{productid.model}</h1>
          <p>{productid.decs}</p>
          <p className="product-price">{productid.price}</p>
          <button
            className="buy-button"
            onClick={() => productOrder(productid.id)}>
            Buy Now
          </button>
          <Link to={`/cart/${id}`}>
          <button
            className="buy-button"
            onClick={()=>addToCart(productid)}>
            Add to Cart
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default PdtDeatils;
