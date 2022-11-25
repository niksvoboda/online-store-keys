import {observer} from "mobx-react-lite"
import React, {useState, useContext} from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import { registration, login } from "../http/userApi";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/const";
import { Context } from "../index";
import {useNavigate} from "react-router-dom";

const Auth = observer(() =>{
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const click = async () => {
       try{
            let data
            if (isLogin) {
                const data = await login(email, password)
            
            }else{
                const data  = await registration(email, password)
                console.log(data)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate("/")
       } catch (e) {
            alert(e.response.data.message)
       } 
       
    }
   
    return(
       <Container
       className="d-flex justify-content-center align-items-center"
       style={{height: window.innerHeight - 54}}
       >
            <Card style={{width:600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш e-mail..."
                        value = {email}
                        onChange = {e=> setEmail(e.target.value)}
                        />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш пароль..."
                        value = {password}
                        onChange = {e=> setPassword(e.target.value)}
                        type = "password"
                        />
                    <Row className="d-flex justify-content-between mt-3 pl-6 pr-6">
                        {isLogin ?
                            <div>Нет аккаунта?  
                            <Link 
                           
                            to={REGISTRATION_ROUTE}> Зарегистрируйтесь</Link>
                          
                            </div>
                            :
                            <div>Зарегистрированы?  
                            <Link 
                           
                            to={LOGIN_ROUTE}> Войдите</Link>
                          
                            </div>
                        }
                        {isLogin ?
                        <Button 
                        className="mt-3"
                        variant ={"outline-success"}
                        onClick ={e => click()}
                        >
                        Войти
                        </Button>
                        :
                        <Button 
                        className="mt-3"
                        variant ={"outline-success"}
                        onClick ={e => click()}
                        >
                        Зарегистрироваться
                        </Button> 
                        }
                       
                    
                    </Row>    
                     
                </Form>
            </Card>
       </Container>
    )
})

export default Auth;