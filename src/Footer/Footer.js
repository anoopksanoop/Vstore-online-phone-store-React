import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className=""  style={{padding:'0',width:'100%',marginTop:"50PX"}}>
 
  <footer
          className="text-center"
          style={{backgroundColor: "rgb(31 31 31 / 93%)" ,color:"white"}}
          >
    
    <section
             className="d-flex justify-content-between p-4 text-white"
             style={{backgroundColor: "rgb(102 154 245)"}}
             >
     
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
    

    
      <div>
        <span href="" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </span>
        <span href="" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </span>
        <span href="" className="text-white me-4">
          <i className="fab fa-google"></i>
        </span>
        <span href="" className="text-white me-4">
          <i className="fab fa-instagram"></i>
        </span>
        <span href="" className="text-white me-4">
          <i className="fab fa-linkedin"></i>
        </span>
        <span href="" className="text-white me-4">
          <i className="fab fa-github"></i>
        </span>
      </div>
   
    </section>
   
    <section className="">
      <div className="container text-center text-md-start mt-5">
        
        <div className="row mt-3">
       
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">V Store</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:" 60px", backgroundColor:'#7c4dff',height:" 2px"}}
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>


          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:"60px", backgroundColor: '#7c4dff', height:" 2px"}}
                />
            <p>
            <Link style={{textDecoration:"none",color:"white"}} to="/Oppo">Oppo</Link>
            </p>
            <p>
            <Link style={{textDecoration:"none",color:"white"}}  to="/Redmi">Redmi</Link>
            </p>
            <p>
            <Link style={{textDecoration:"none",color:"white"}}  to="/Samsung">Samsung</Link>
            </p>
            <p>
            <Link style={{textDecoration:"none",color:"white"}}   to="/Vivo">Vivo</Link>
            </p>
          </div>
         

         
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:"60px", backgroundColor: '#7c4dff', height:" 2px"}}
                />
            <p>
              <span href="#!" className="text-white">Your Account</span>
            </p>
            <p>
              <span href="#!" className="text-white">Become an Affiliate</span>
            </p>
            <p>
              <span href="#!" className="text-white">Shipping Rates</span>
            </p>
            <p>
              <span href="#!" className="text-white">Help</span>
            </p>
          </div>
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:"60px", backgroundColor: '#7c4dff', height:" 2px"}}
                />
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> vstore@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
       
        </div>
      
      </div>
    </section>
   


    <div
         className="text-center p-3"
         style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
         >
      © 2020 Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a
        >
    </div>
  
  </footer>
 
</div>
    </div>
  )
}

export default Footer
