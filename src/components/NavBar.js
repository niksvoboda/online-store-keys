import React  , { useContext } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from "../index";
import { Link } from "react-router-dom";
import {ADMIN_ROUTE, SHOP_ROUTE,LOGIN_ROUTE} from "../utils/const";
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite"
import  { useNavigate } from "react-router-dom"


const NavBar = observer(() => {
   const {user} = useContext(Context)
   const navigate = useNavigate()
   const logOut = () =>{
     user.setUser({})
     user.setIsAuth(false)
     navigate(LOGIN_ROUTE)
   }
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link style={{color: 'white', paddingLeft: '15px'}} to={SHOP_ROUTE}>OnlineStore</Link>
                {user.isAuth ?
                <Nav className="container-fluid justify-content-end" style={{color: 'white'}}>
                <Button 
                variant={"outline-light"} 
                onClick = {() =>navigate(ADMIN_ROUTE)}
                >Админ-панель</Button>
                <Button 
                variant={"outline-light"} 
                onClick ={() => logOut() } 
                className="ml-2"
                >Выйти</Button>
                </Nav>
                :
                <Nav className=" container-fluid justify-content-end" style={{color: 'white'}}>
                <Button variant={"outline-light"} onClick ={() =>navigate(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>    
                }  
            </Container>   
        </Navbar>
    )
})

export default NavBar;