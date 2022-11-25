import React, { useContext } from 'react';
import {Route, Routes} from "react-router-dom";
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';


const AppRouter = () =>{
    const {user} = useContext(Context)
   // console.log(user.isAuth)
    return(
        <Routes>
                       
            {user.isAuth && authRoutes.map((p)=> 
                   <Route key={p.path} path = {p.path} element = {p.element}/>
               
                )}

            { publicRoutes.map((p)=> 
                   <Route key={p.path} path = {p.path} element = {p.element}/>
               
                )}    
         
          
        </Routes>

    )
}

export default AppRouter;