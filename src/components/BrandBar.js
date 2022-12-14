import React, { useContext } from "react";
import {observer} from "mobx-react-lite"
import { Context } from "../index";
import {  Row, Card } from "react-bootstrap";

const BrandBar = observer(() =>{
    const {device} = useContext(Context)
    return(
        <Row className="d-flex">
            {
            device.brands.map(brand =>
            <Card
            onClick={() => device.setSelectedBrand(brand)}
            style ={{cursor:'pointer', width: 'auto'}}
            border ={brand.id === device.selectedBrand.id ? 'danger' : 'light'} 
         
            key = {brand.id}>{brand.name}
            </Card>)}
        </Row>
    ) 
})

export default BrandBar;