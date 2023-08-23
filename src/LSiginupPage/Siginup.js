import React, { useContext,useRef ,useEffect} from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import './Siginup.css'
import { footContext } from "../Context";

const SignupForm = () => {
  const data=useContext(footContext)
  const nav=useNavigate();
  const inputref=useRef(null)

  const { password, setPassword } = data;
  useEffect(() => {
    console.log(password);
  }, [password])
  const handleSubmit = (e) => {
    e.preventDefault();
    const Cart = []
    const Name = inputref.current.name.value
    const Email = inputref.current.email.value
    const Password = inputref.current.password.value
    const confirmPassword = inputref.current.password.value;

    const existingUser = password.find(user => user.Email === Email);
  if (existingUser) {
    // Display an error or prevent signup with the same email
    console.log("Email is already registered.");
    alert('Email is already registered')
    return;
  }
  if (Name === "") {
    alert("Name is required");
    return;
  }
  if (Email === "") {
    alert("Email is required");
    return;
  }
  if (Password === "") {
    alert("Password is required");
    return;
  }
  if (confirmPassword === "") {
    alert("Confirm Password is required");
    return;
  }
  
  if (Password !== confirmPassword ) {
    // Display an error or prevent signup if passwords don't match
    console.log("Passwords do not match.");
    return;
  }
    setPassword([...password,{confirmPassword, Password, Email,Name,Cart }]);
    if(Password===confirmPassword){
      nav("/Login")
    }
   
  }



  // const LoginUP=new useNavigate()

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6} style={{marginTop:"30px"}}>
          <Form  ref={inputref} style={{color: "white",
    background: "#0b0b0be8",
    padding: "10%",
    borderRadius:"20px",
    backgroundColor:"#212529",
    paddingBottom:"10%"}} onSubmit={handleSubmit}>
       <h1 className="sigin">SIGN UP </h1>
            <Form.Group className="control" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                
              />
              <Form.Control.Feedback type="invalid">
                
              </Form.Control.Feedback>
            </Form.Group>

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

            <Form.Group className="control" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"

              />
              <Form.Control.Feedback type="invalid">

              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="control" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
              />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupForm;
