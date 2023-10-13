import React, { useEffect, useState } from 'react'
import NutriDetailTable from './NutriDetailTable'
import NturiProducts from './NturiProducts'
import { useParams } from 'react-router'
import { Alert, Container, Row, Col } from 'reactstrap';
import NutriFaq from './NutriFaq'

const NutriDetail = () => {

    let {nutri_name} = useParams()

    //상세정보 변수 저장
    const [effect, setEffect] = useState("")
    const [intake, setIntake] = useState("")
    const [dailyRecTake, setDailyRecTake] = useState("")
    const [withNutri, setWithNutri] = useState("")
    const [withNotNutri, setWithNotNutri] = useState("")

    //FAQ 변수 저장
    const [visible, setVisible] = useState(false)
    const loadingFaq = ()=>{
        console.log('loadFaq');
        setVisible(!visible)
    }

    //제품 정보
    const [productList, setProductList] = useState([])

  return (
    <div className='wrapper'>
        {/* 상세정보 */}
        <NutriDetailTable setWithNotNutri={setWithNotNutri} setEffect={setEffect} setIntake={setIntake} setDailyRecTake={setDailyRecTake} setWithNutri={setWithNutri} nutri_name={nutri_name} effect={effect} intake={intake} dailyRecTake={dailyRecTake} withNutri={withNutri} withNotNutri={withNotNutri}/>
        {/* FAQ */}
        <Container>
                <Row>
                    <Col md="12">
                        <Alert color="info">
                            <h4 className='title font-bold'>FAQ</h4>
                            <h5 className='title font-bold'>궁금한 점들을 확인해 보세요!</h5>
                            <a className="linking text-themecolor" onClick={loadingFaq}>Explore More<i className="ti-arrow-right"></i></a>
                            </Alert>
                    </Col>
                </Row>
            </Container>
        {visible && <NutriFaq nutri_name={nutri_name}/>}
        {/* 네이버 제품 API */}
        <NturiProducts intake={intake} withNotNutri={withNotNutri} withNutri={withNutri} dailyRecTake={dailyRecTake} nutri_name={nutri_name} setProductList={setProductList} productList={productList} nutriName={nutri_name}/>
    </div>
  )
}

export default NutriDetail