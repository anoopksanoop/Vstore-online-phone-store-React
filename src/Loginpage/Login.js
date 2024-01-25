import React, {useRef ,useContext} from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { footContext } from "../Context";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/UserSlice";

const Login = () => {
  const data = useContext(footContext)
  const nav=useNavigate()

  const dispatch=useDispatch()

  const inputRef = useRef()
  const { password, setLogin } = data



  const handleSubmit = (e) => {
    e.preventDefault()
    const email = inputRef.current.email.value
    const Password = inputRef.current.password.value
    
    if (password.length > 0) {
      const [newdata] = password;
  
      if (newdata && newdata.Email === email && newdata.Password === Password) {
        setLogin(true);
        dispatch(
          setUser({
            email:email,
            Password: Password,
            setLogin: true,
          })
        );
        nav('/');
      } else if (newdata && newdata.Email === "") {
        alert('Email none');
      } else {
        alert('User Not Found !!!');
      }
    } else {
      alert('User Not Found !!!');
    }
  };

console.log(password)
  return (
    <Container >
      <Row  className="justify-content-center mt-5">
        <Col md={6}  style={{marginTop:"30px"}}>
          <Form ref={inputRef} style={{color: "white",
            background: "#0b0b0be8",
            padding: "10%",
            borderRadius:"20px",
            backgroundColor:"#212529"}}  onSubmit={handleSubmit}>
      <h1 className="login">LOGIN</h1>
      <h8 className="login" style={{color:"gray"}}>please enter your login and password</h8>
      <br/>
      <br/>
            <Form.Group className="control" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
               id="email"
              />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
              />
              <Form.Control.Feedback type="invalid">
                
              </Form.Control.Feedback>
            </Form.Group>
           <br/>
          <Link className="login" style={{color:'#afacac'}} to={"/ForgetPassword"} >Forget password</Link>
          <br/>
           <div className="login">
           <Button variant="primary" type="submit" onClick={handleSubmit}>
              Login
            </Button>
            </div>
            <br/>
            <br/>
            <span style={{color:'#afacac'}} className='login'>Don't have an account?
            <Link to="/SiginUp">Sigin Up</Link>
            </span>
            
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
