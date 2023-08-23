import React from 'react'
import './Order.css'
import { phonesdata } from './productData';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Cart = () => {

  const {id}=useParams();
  console.log("id="+id)
    const productid=phonesdata.find((p)=>p.id===parseInt(id)); 
    console.log(productid)
  
    if (!productid) {
      return <div>Phone not found.</div>;
    }
  

  return (
    <div>
        <section className="h-100 h-custom" style={{marginTop:"3rem"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card border-top border-bottom border-3" >
          <div className="card-body p-5" key={productid.id}>

            <p className="lead fw-bold mb-5" >Order Summary</p>

            <div className="row">
              <div className="col mb-3">
                <p className="small text-muted mb-1">Date</p>
                <p>10 April 2023</p>
              </div>
              <div className="col mb-3">
                <p className="small text-muted mb-1">Order No.</p>
                <p>7306065728</p>
              </div>
            </div>

            <div className="mx-n5 px-5 py-4">
              <div className="row">
                <div className="col-md-8 col-lg-9">
                  <p>{productid.decs}</p>
                </div>
                <div className="col-md-4 col-lg-3">
                  <p>{productid.price}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 col-lg-9">
                  <p className="mb-0">Shipping</p>
                </div>
                <div className="col-md-4 col-lg-3">
                  <p className="mb-0">Free</p>
                </div>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
                <p className="lead fw-bold mb-0" >{productid.price}</p>
                <br/>
                <Button href='https://netbanking.paytmbank.com/' >CONTINUE</Button>
              </div>
            </div>

            <p className="lead fw-bold mb-4 pb-2">Tracking Order</p>

          <div className="row" style={{ background:'cadetblue'}}>
              <div className="col-lg-12">

                <div className="horizontal-timeline">

                  <ul className="list-inline items d-flex justify-content-between">
                    <li className="list-inline-item items-list">
                      <p className="py-1 px-2 rounded text-white" >Ordered</p>
                    <p className="py-1 px-2 rounded text-white" />
                    </li>
                    <li className="list-inline-item items-list">
                      <p className="py-1 px-2 rounded text-white" >Shipped</p>
                      <p  className="py-1 px-2 rounded text-white"></p>
                    </li>
                    <li className="list-inline-item items-list">
                      <p className="py-1 px-2 rounded text-white" >On the way
                      </p>
                    </li>
                    <li className="list-inline-item items-list text-end">
                      <p >Delivered</p>
                    </li>
                  </ul>

                </div>

              </div>
            </div>

            <p className="mt-4 pt-2 mb-0">Want any help? <a href="/Contact">Please contact
                us</a></p>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Cart