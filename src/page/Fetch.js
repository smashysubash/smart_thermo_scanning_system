// import React, { useEffect, useState } from 'react'
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCpHKS9PIpWGXPqJP2BAVbmKLQJj0ge9Xw",
//   authDomain: "smarttemp-fcc6d.firebaseapp.com",
//   projectId: "smarttemp-fcc6d",
//   storageBucket: "smarttemp-fcc6d.appspot.com",
//   messagingSenderId: "309371239579",
//   appId: "1:309371239579:web:cdcae5b0b9a9b7821f9a3e",
//   measurementId: "G-FST372ZY66" 
// };

// firebase.initializeApp(firebaseConfig);

// const Fetch =()=>{
//     const [user,setUser] = useState([]);
   
//     useEffect(()=>{
//          const fetchData = async () =>{
//           const db = firebase.firestore();
//          const snap = await db.collection('user').get();
//          const data = snap.docs.map(doc=>doc.data());
//          setUser(data);
//        };
//        fetchData();
//       },[])

//   console.log(user[0]);
  
//    const [sensor,setSensor] = useState([]);
//    useEffect(()=>{
//     const sensorData = async () =>{
//       const db = firebase.firestore();
//       const snapshot = await db.collection('sensor-data').get()
//       const sensor_data = snapshot.docs.map(doc=>doc.data());
//       setSensor(sensor_data); 
//      }
//      sensorData();
//    },[])

//    console.log(sensor[0]);

//   return (
//     <div>
//         hello i am in fetch
//     </div>
//   )
// }

// export default Fetch;
