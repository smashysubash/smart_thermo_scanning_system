import React, { useRef, useState } from 'react'
import { Card,Form,Button, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link,useNavigate } from 'react-router-dom';

export default function Login() 
{
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error,setError] = useState();
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate()
    async function handleSubmit(e)
    {
      e.preventDefault();
     try{
         setError('')
         setLoading(true);
         await login(emailRef.current.value,passwordRef.current.value)
       navigate("/home");
        }
       catch{
           setError('Username or Password Incorrect') 
       }
       setLoading(false);
    }

    return (
      <Card>
          <Card.Body>
            <h2 className='text-center'>Log In</h2>
            <br></br>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
               <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required></Form.Control>
               </Form.Group>
               <br></br>
               <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required></Form.Control>
               </Form.Group>
               <br></br>
               <Button disabled={loading} className='w-100' type="submit">
                  Log In 
               </Button>
            </Form>
          <div className='w-100 mt-3 text-center'>
               Didn't Have Account..? <Link to="/signup">Sign Up</Link>
          </div>
          <br></br>
          </Card.Body>
      </Card>
    )
  }

