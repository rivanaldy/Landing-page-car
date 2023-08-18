import React, { useEffect } from "react";
import {  Routes, Route,useNavigate,useLocation } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Details from "./Details";
const Router = () => {
 const navigate=useNavigate()
 const location = useLocation()
 
 useEffect(()=>{
  const session=localStorage.getItem("key")
  if (!session) {
    navigate('/login')
  } else if(session && location.pathname =='/login' ){
   navigate('/')
  }
 },[navigate])
  return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/detail/:id" element={<Details/>}/>
     </Routes>
    
  );
};

export default Router;
