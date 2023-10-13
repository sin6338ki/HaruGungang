import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Alert, Container, Row, Col } from 'reactstrap';

const NutriFaq = ({nutri_name}) => {

    const [faqList, setFaqList] = useState([])
    const [mapFaqList, setMapFaqList] = useState([])

    useEffect(()=>{
        console.log('선택한 영양성분 :',  nutri_name);
        axios.get(`http://localhost:8085/haru/nutrifaq/${nutri_name}`)
        .then((res)=>{
            console.log(res.data);
            console.log('nutrifaq 통신성공',res.data[0].nutriFaq.question);
            setFaqList(res.data)
        })
        .catch((e)=>{
            console.log('error : ', e);
        })
    },[])

    useEffect(()=>{
        let temp = []
        faqList.map((item)=>(
            temp.push(item.nutriFaq)
        ))
        setMapFaqList(temp)
    },[faqList])

    useEffect(()=>{
        console.log('question', mapFaqList);
    },[mapFaqList])

  return (
    <div>
        {mapFaqList.map((item, idx)=>(            
        <Container>
                <Row>
                    <Col md="12">
                        <Alert color="info">
                                <h5 className='title font-bold'>Q. {item.question}</h5>
                                <p className='font-Pretendard-Regular'>A. {item.answer}</p>
                            </Alert>
                    </Col>
                </Row>
            </Container>
        ))}
    </div>
  )
}

export default NutriFaq