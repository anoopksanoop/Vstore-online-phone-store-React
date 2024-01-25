import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { footContext } from "../Context";
import {FcLockLandscape} from "react-icons/fc"

function Header() {
  const Home = new useNavigate();
  const Sigin = new useNavigate();
  const Login = new useNavigate();
  const Contact = new useNavigate();
  const Cart = new useNavigate();

  const data=useContext(footContext)
  const {cartItems,setLogin}=data;


  const logOut=()=>{
    setLogin(false)
    sessionStorage.removeItem("user");
    // sessionStorage.removeItem("currentuser");
  }

  const HomePage = () => {
    Home("./");
  };
  const LoginPage = () => {
    Login("./Login");
  };


  const SiginPage = () => {
    Sigin("/SiginUp");
  };
  const ContactPage = () => {
    Contact("./Contact");
  };
  const productCart = () => {
    Cart(`/Cart/${cartItems.length>0 ? cartItems[0].id: ""}`);
  };
  

  return (
    <div >
      <nav
        style={{
          position: "fixed",
          overFlow: "hidden",
          top: "0px",
          width: "100%",
          zIndex: 1,
        }}
        className="navbar navbar-light bg-dark">
        <span
          style={{
            color: "#f1ffff",
            fontFamily: "cursive",
            marginLeft: "15px",
          }}
          className="navbar-brand">
          V Store
        </span>
        <Nav className="me-auto">
          <Nav.Link  onClick={HomePage}>
            Home
          </Nav.Link>
          <Nav.Link href="" onClick={ContactPage}>
            Contact
          </Nav.Link>
          {sessionStorage.user  ? 
        <Nav.Link href="" onClick={logOut}>
          LogOut</Nav.Link>
        
           :
           <Nav.Link href="" onClick={SiginPage}>SignUp</Nav.Link>
         
         
        }
            {sessionStorage.user ? "" :
          <Nav.Link href="" onClick={LoginPage}>
          Login</Nav.Link>
}

           {/* <Nav.Link href="#Siginup" onClick={SiginPage}>SignUp</Nav.Link> */}
          <Link className="" to='/Admin/Login'>
             <FcLockLandscape className="fc"/>
            </Link>
        </Nav>
       
        <form
          style={{ display: "flex", marginRight: "3rem" }}
          className="form-inline">
            
          <img
            style={{ width: "35px", marginLeft: "40px" }}
            src="https://img.icons8.com/?size=512&id=Ls9IgNVwbp4t&format=png"
            onClick={productCart}
            alt=""/>
        </form>
      </nav>
    </div>
  );
}

export default Header;
