import React, {useContext, useEffect} from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import {observer} from "mobx-react-lite"
import { Context } from "../index";
import { fetchTypes, fetchBrands, fetchDevices  } from "../http/deviceApi";



const Shop = observer(() =>{
    const {device} = useContext(Context)
    useEffect(()=>{
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data))
    }, [])
    return(
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                   <TypeBar/>
                   
                </Col>
                <Col md={9}>
                <BrandBar/>
                <DeviceList/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop;