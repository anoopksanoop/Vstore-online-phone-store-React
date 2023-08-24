import React, { useContext } from "react";
import { footContext } from "../Context";
import { Button } from "react-bootstrap";
import { useState } from "react";
import './Order.css'


const CartList = () => {
  const data=useContext(footContext)
  const { cartItems, setCartItems} = data;

  console.log("hyy",cartItems)

   
  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
 
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));

  const incrementQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decrementQuantity = (index) => {
    if (quantities[index] > 1) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };
  const calculateprice=(price,quantity)=>{
    return  price*quantity;
  }

  
  return (
    <section className="h-100" style={{marginTop:'3rem'}}>
    <div className="container h-100 py-5">
     <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i
                  className="fas fa-angle-down mt-1"></i></a></p>
          </div>
        </div>
        {cartItems.map((task,index) => (
        <div className="card rounded-3 mb-4" key={index}>
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2"  >
                <img
                  src={task.image}
                  className="img-fluid rounded-3" alt="Cotton T-shirt"/>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">{task.model}</p>
              </div>
              <div className=" class-md-3 col-lg-3 col-xl-3">
              <Button className="btn1" onClick={() => decrementQuantity(index)}>-</Button>
              <span>{quantities[index]}</span>
              <Button className="btn1" onClick={() => incrementQuantity(index)}>+</Button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">₹{calculateprice(task.price, quantities[index])}</h5>
              </div>
              <Button style={{width:'',margin:'2px', background: 'brown '}} onClick={()=>removeItemFromCart(task.id)}>Delete</Button>
              {/* <Button  style={{width:'50%',background:'cadetblue'}} onClick={productOrder}>Order</Button> */}
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
           ))}
        <div className="card mb-4">
          <div className="card-body p-4 d-flex flex-row">
            <div className="form-outline flex-fill">
              <input type="text" id="form1" className="form-control form-control-lg" />
              <label className="form-label" for="form1">Discound code</label>
            </div>
            <button type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

)
};
export default CartList;
