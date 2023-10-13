import React, { useState } from 'react'
import { Alert, Container, Row, Col } from 'reactstrap';
import axios from 'axios'


const NutriDetailTable = ({setWithNotNutri, setWithNutri, setDailyRecTake, setIntake, setEffect, nutri_name, effect, intake, dailyRecTake, withNutri, withNotNutri}) => {

    useState(()=>{
        console.log('선택한 영양성분 :',  nutri_name);
        axios.get(`http://localhost:8085/haru/nutridetail/${nutri_name}`)
        .then((res)=>{
            console.log('nutridetail 통신성공',res.data);
            //변수에 응답받은 데이터 저장
            console.log(res.data.recNutri);
            let info = res.data.recNutri
            setEffect(info.nutri_effect)
            setIntake(info.taking_guide)
            setDailyRecTake(info.rec_intake + info.intake_unit)
            setWithNutri(info.with_supplement)
            setWithNotNutri(info.forbid_supplement)
        })
        .catch((e)=>{
            console.log('error : ', e);
        })
    },[])


  return (
    <div>
                <Container>
                <h2 className='title font-bold m-t-b-50'>{nutri_name}</h2>
                <Row>
                    <Col>
                        {effect!=null&&<Alert color="success" className='p-t-10'>
                            <h4 className='title font-bold'>효능</h4>
                            <p className='font-Pretendard-Regular p-t-10'>- {effect}</p>
                            </Alert>}</Col>
                            </Row>
                            <Row>
                                <Col>
                        {intake!=null && <Alert color="success" className='p-t-10'>
                            <h4 className='title font-bold'>복용방법</h4>
                            <h4 className='title font-bold text-center p-t-10'> {intake}</h4>
                            </Alert>}</Col>
                            <Col>
                        {dailyRecTake!=null && <Alert color="success" className='p-t-10'>
                            <h4 className='title font-bold'>1일 권장 섭취량</h4>
                            <h4 className='title font-bold text-center p-t-10'> {dailyRecTake.replace('|', '~')}</h4>
                            </Alert>}</Col>
                            <Col>
                        {withNutri != null && <Alert color="primary" className='p-t-10'>
                            <h4 className='title font-bold'>상호작용 good <span>😀</span></h4>
                            <h4 className='title font-bold text-center p-t-10'>{withNutri}</h4>
                            </Alert>}</Col>

                            <Col>
                        {withNotNutri!=null && <Alert color="danger" className='p-t-10'>
                            <h4 className='title font-bold'>상호작용 bad <span>😫</span></h4>
                            <h4 className='title font-bold text-center p-t-10'>{withNotNutri}</h4>
                            </Alert>}</Col>
                            </Row>    
            </Container>
    </div>
  )
}

export default NutriDetailTable