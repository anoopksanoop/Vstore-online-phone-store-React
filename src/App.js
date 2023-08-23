import AdminBar from "./Admin/AdminBar";
import AdminAddProducts from "./Admin/AdminAddProducts";
import AdminProducts from "./Admin/AdminProduct";
import AdminEditPage from "./Admin/AdminEditPage";
import AdminLogin from "./Admin/AdminLogin";
import AdminUser from "./Admin/AdminUser";

import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useState } from "react";
import { footContext } from "./Context";
import Login from "./Loginpage/Login";
import Siginup from "./LSiginupPage/Siginup";
import Header from "./Header.js/Header";
import Product from "./ProjectProducts/Product";
import Contact from "./Contacts/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPass from "./ForgetPassword/ForgetPass";
import PdtDeatils from "./ProjectProducts/PdtDeatils";
import Cart from "./ProjectProducts/Order";
import CartList from "./ProjectProducts/CartList";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { phonesdata } from "./ProjectProducts/productData";
AOS.init();

function App() {

  const [cartItems,setCartItems]=useState([])
  const [products, setProducts] = useState(phonesdata);
  const [login, setLogin] = useState(false)
  const [password, setPassword] = useState([])
  const user={
    cartItems,
    setCartItems,
    products,
    setProducts,
    login,
    setLogin,
    password,
    setPassword
  }
  
  const handleAddProduct=(newProduct) =>{
    setProducts([...products,newProduct])
  }
  return (
    <div>

      <BrowserRouter>
      <footContext.Provider value={user}>
        <Header />
        <Routes>
          <Route path="/" element={<Product/>} />
          <Route path="/SiginUp" element={<Siginup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ForgetPassword" element={<ForgetPass/>}/>
          <Route path="/ProductDtls/:id" element={<PdtDeatils/>}/>
          <Route path="/Order/:id" element={<Cart/>}/> 
          <Route path="/Cart/:id" element={<CartList task={cartItems}/>}/>

          <Route path="/edit/:id" element={<AdminEditPage setProducts={setProducts} />}/>
          <Route path="/admin" element={<AdminBar/>}/>
          <Route path='/admin/products' element={<AdminProducts />}/>       
          <Route path='/admin/addproduct' element ={<AdminAddProducts handleAddProduct={handleAddProduct} />}/>
          <Route path="/Admin/Login" element={<AdminLogin/>}/>
          <Route path="/Admin/Users" element={<AdminUser/>}/>
        </Routes>
        </footContext.Provider>
      </BrowserRouter>

      {/* <Login/> */}
      {/* <Siginup/> */}

      {/* <Effects/> */}
      {/* <Main  isloggiedin={true}/> */}
    </div>
  );
}

export default App;
