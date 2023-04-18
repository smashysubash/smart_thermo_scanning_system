import React, { useState } from 'react'
import { useRef } from 'react';
import { Card,Form,Button, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';
export default function Signup(){
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmRef = useRef();
  const { signup } = useAuth();
  const[error,setError] = useState();
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e)
  {
        e.preventDefault();
        if(passwordRef.current.value !== passwordconfirmRef.current.value)
        {
          return setError('Password Does not Match'); 
        }
        try{
          console.log(emailRef.current.value+" "+passwordRef.current.value);
          setError('')
          setLoading(true);
          await signup(emailRef.current.value, passwordRef.current.value);
          navigate("/")
        }
        catch
        {
           setError('Fail to submit');
        }
   setLoading(false);
  }
   return (
      <Card>
        <Card.Body>
        <h2 className='text-center'>Sign Up</h2>
         <br></br>
         {error && <Alert variant='danger'>{error}</Alert>}
         <Form onSubmit={handleSubmit}>
           <Form.Group id="email">
             <Form.Label>Email</Form.Label>
             <Form.Control type="email" ref={emailRef} required></Form.Control>
           </Form.Group><br></br>
           <Form.Group id="password">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" ref={passwordRef} required></Form.Control>
           </Form.Group>
           <br></br>
           <Form.Group>
              <Form.Label>Re-enter Password</Form.Label>
              <Form.Control type="password" ref={passwordconfirmRef} required></Form.Control>
            </Form.Group>
            <br></br>
           <Button disabled={loading}  className='w-100' type="submit">
            Submit
          </Button>
         </Form>
         <div className='w-100 mt-3 text-center'> 
            Already Have an Account..? <Link to="/">Log In</Link> 
          </div>
        </Card.Body>
      </Card>
    );
}

  

