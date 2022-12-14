import React, { useContext, useEffect, useState } from 'react';
import AppRouter from './components/AppRouter';
import {
  BrowserRouter,
} from "react-router-dom";
import NavBar from './components/NavBar';
import { check } from './http/userApi';
import { Context } from "./index";
import {Spinner } from "react-bootstrap";

const App = () => {
  const {user} = useContext(Context)
  const [loading, setloading] = useState()

  useEffect(()=>{
    check().then(data =>{
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(()=>setloading(false))
  },[])

  if(loading) {
    return <Spinner animation ={"grow"}/>
  }

  return (
    <BrowserRouter>
    <NavBar/>
    <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
