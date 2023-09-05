import React, { useContext } from "react";
import "./products.css";
import "./pdtDeatils.css";
import { useNavigate, useParams } from "react-router-dom";
//import { phonesdata } from "./productData";
import { footContext } from "../Context";
import { Link } from "react-router-dom";

function PdtDeatils() {
const data=useContext(footContext);
const {cartItems,setCartItems,login,products}=data;
// const updatedCartItems=[...cartItems]
const navigate=useNavigate()

  const { id } = useParams();
  console.log("id=" + id);
  const productid = products.find((p) => parseInt(p.id)  === parseInt(id));
 
  console.log("hiiii",productid);

  if (!productid) {
    return <div>Phone not found.</div>;
  }

  const addTocart = (item) => {
    console.log(login);
    if(login) {
      const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      alert('Product is already in the cart');
    } else {
      if (login) {
        const updatedCart = [...cartItems, { ...item, quantity: 1 }];
        setCartItems(updatedCart);
        alert(`${item.model} successfully added to the cart!`);
      } else {
        navigate('/Login');
      }
    }}else{
      alert("please login first")
      navigate('/Login');

  }};

 const Order = new useNavigate();

 const productOrder = () => {
  if(login){
    Order(`/Order/${id}`);
  }else{
    alert("please login first")
    navigate('/Login')
  }
  
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
          <p className="product-price">₹{productid.price}</p>
          <button
            className="buy-button"
            onClick={() => productOrder(productid.id)}>
            Buy Now
          </button>

          <Link to={`/cart/${id}`}>
          <button
            className="buy-button"
            onClick={()=>{addTocart(productid)}}>
            Add to Cart
          </button>
            </Link>

        </div>
      </div>
    </div>
  );
}

export default PdtDeatils;
