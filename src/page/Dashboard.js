import React, { useState,useEffect } from 'react'
import { Alert} from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './Table.css';
import logo from "./logo.png";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCpHKS9PIpWGXPqJP2BAVbmKLQJj0ge9Xw",
  authDomain: "smarttemp-fcc6d.firebaseapp.com",
  projectId: "smarttemp-fcc6d",
  storageBucket: "smarttemp-fcc6d.appspot.com",
  messagingSenderId: "309371239579",
  appId: "1:309371239579:web:cdcae5b0b9a9b7821f9a3e",
  measurementId: "G-FST372ZY66" 
};

firebase.initializeApp(firebaseConfig);

const  Dashboard = () => 
{
 
 const [students,setStudent] = useState([]);
 useEffect(()=>{
       const fetchData = async () =>{
       const db = firebase.firestore();
       const snap = await db.collection('user').get();
       const data = snap.docs.map(doc=>doc.data());
       setStudent(data);
     };
     fetchData();
    },[])

console.log(students[0]);

 const [users,setSensor] = useState([]);
 useEffect(()=>{
  const sensorData = async () =>{
    const db2 = firebase.firestore();
    const snapshot = await db2.collection('sensor-data').get()
    const sensor_data = snapshot.docs.map(doc=>doc.data());
    setSensor(sensor_data); 
   }
   sensorData();
 },[])

 console.log(users[0]);

const rows = [];
for (const user of users) {
  const matchingStudent = students.find(s => s.rfid === user.rfid);
  const time = user.timestamp;
  const date = new Date(time.seconds*1000+time.nanoseconds/1000000);
  const formatdate = date.toLocaleDateString()+" "+date.toLocaleTimeString();

  if (matchingStudent) {
    rows.push(
      <tr key={user.temperature}>
        <td>{matchingStudent.name}</td>
        <td>{matchingStudent.regno}</td>
        <td>{user.temperature}</td>
        <td>{formatdate}</td>
        <td>{matchingStudent.email}</td>
        <td>{matchingStudent.batch}</td>
        <td>{matchingStudent.phone}</td>
      </tr>
    );
  }
}



  const currentUser = useAuth();
  const {logout} = useAuth();
  const [error,setError] = useState();
  const navigate = useNavigate();
  
  async function handleLogout()
  {
    setError('')
    try{
      await logout();
      navigate("/")
    }
    catch{
      setError('Failed to logout')
    }
  }

  return(   
 
     <div className='web' >
          <div className='nav-bar'>
             <img src={logo} className='logo' alt='logo'></img>
             <div className='title'>Smart Thermo Scanning 
                 <div className='sub'>System</div> </div>
            <hr></hr>
            <div className='nav-items'>
                <div className='nav-item'>Home</div>
                <hr></hr>
                <div className='nav-item'>About</div>
                <hr></hr>
            </div>
          </div>
 
          <div className='part-2'>
          <div className='logout'>
            {error && <Alert variant='danger'>{error}</Alert>}
            <input type='submit' className='button' onClick={handleLogout} value="Logout">
              </input>
          </div>
          <table className='table'>
                <thead className='head'>
                    <tr>
                    <th>Name</th>
                    <th>Regno</th>
                    <th>Temperature</th>
                    <th>Date && Time</th>
                    <th>Email</th>
                    <th>Batch</th>
                    <th>Phone No</th>
                    </tr> 
                 </thead>
                <tbody className='body'>
                     {/* <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                     </tr> */}
                     {rows}
                </tbody>
            </table>
          </div> 
     </div>
  )
}

export default Dashboard;