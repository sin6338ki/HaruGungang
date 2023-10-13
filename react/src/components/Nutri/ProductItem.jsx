import React, { useContext, useEffect, useState } from 'react'
import { Row, Col, Container, Card, CardBody, Button } from 'reactstrap';
import img1 from '../../assets/images/portfolio/img1.jpg'
import { useNavigate } from 'react-router';
import axios from 'axios';

const ProductItem = ({intake, productList, withNotNutri, withNutri, dailyRecTake}) => {

    const nav = useNavigate();

    useEffect(()=>{
        console.log('product 콤포넌트', productList);
    },[productList])

    const moveToProductDetail = ({item})=>{
        console.log('moveToProductDetail')
        nav(`/haru/product/${item.productId}`, {
            state: {
                img: `${item.image}`,
                withNutri: `${withNutri}`,
                withNotNutri: `${withNotNutri}`,
                dailyRecTake: `${dailyRecTake}`,
                intake: `${intake}`
            }
        })
    }

  return (
    <div>
        <Container>
            <Row>
        {productList.map((item)=>(
            <Col xl="4">
                <Card className="card-shadow p-0" onClick={()=>{moveToProductDetail({item})}}>
                    <img className="card-img-top" src={item.image}/>
                    <CardBody>
                        <p className="font-medium m-b-0">{item.title.replace(/(<b>|<\/b>)/g, " ")}</p>
                        <br></br>
                        <p className="font-medium m-b-0">{item.lprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                    </CardBody>
                </Card>
                </Col>
        ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductItem