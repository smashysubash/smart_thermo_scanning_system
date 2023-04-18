import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./page/Signup";
import { AuthProvider } from "./page/AuthContext";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import { Navigate } from "react-router-dom";
import { useAuth } from "./page/AuthContext";
import './page/Table.css'

export default function App()
 {
  return(
    
      <Container 
        className="d-flex align-items-center justify-content-center"
        style={{minHeight: "100vh" }}
       >
       <div className="w-100" style={{maxWidth:"400px"}}> 
         <AuthProvider>
         <Router>
           <Routes>
           <Route path="/signup" element={<Signup/>}/>  
           <Route  path="/home" element={<Dashboard/>}/>
           <Route path="/" element={<Login/>}/>        
           </Routes>
           </Router>
        </AuthProvider>
        </div>
        </Container>

    
  );
}

// export default App;