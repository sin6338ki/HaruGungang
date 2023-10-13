import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

//이미지 import 
import omega from '../../assets/images/icon/nutri_rec/omega3.png'
import probiotics from '../../assets/images/icon/nutri_rec/probiotics.png'
import milkthistle from '../../assets/images/icon/nutri_rec/milkthistle.png'
import lutein from '../../assets/images/icon/nutri_rec/lutein.png'
import boswellia from '../../assets/images/icon/nutri_rec/boswellia.png'
import vitamin from '../../assets/images/icon/vitamin-c.png'

const ResultBySurvey = ({interest}) => {

  const data = {
    interest1 : `${interest[0]}`,
    interest2 : `${interest[1]}`,
    interest3 : `${interest[2]}`
  }

  const [rec1, setRec1] = useState()
  const [rec2, setRec2] = useState()
  const [rec3, setRec3] = useState()
  const [recImg1, setRecImg1] = useState()
  const [recImg2, setRecImg2] = useState()
  const [recImg3, setRecImg3] = useState()

  useEffect(()=>{
    console.log('interest', data);

    axios.post("http://localhost:8085/haru/survey/result", data)
    .then((res)=>{
        console.log('survey result', res.data);
        setRec1(res.data[0].recNutriBySurvey.nutri_name);
        setRec2(res.data[1].recNutriBySurvey.nutri_name);
        setRec3(res.data[2].recNutriBySurvey.nutri_name);
    })
},[])

    useEffect(()=>{
            //이미지 변경
    console.log('rec1',rec1);
    if(rec1 == '오메가3'){
        setRecImg1(omega)
    }else if(rec1 == '루테인'){
        setRecImg1(lutein)
    }else if(rec1 == '유산균'){
        setRecImg1(probiotics)
    }else if(rec1 == '밀크씨슬'){
        setRecImg1(milkthistle)
    }else if(rec1 == '보스웰리아'){
        setRecImg1(boswellia)
    }else{
        setRecImg1(vitamin)
    }

    console.log('rec2',rec2);
    if(rec2 == '오메가3'){
        setRecImg2(omega)
    }else if(rec2 == '루테인'){
        setRecImg2(lutein)
    }else if(rec2 == '유산균'){
        setRecImg2(probiotics)
    }else if(rec2 == '밀크씨슬'){
        setRecImg2(milkthistle)
    }else if(rec2 == '보스웰리아'){
        setRecImg2(boswellia)
    }else{
        setRecImg2(vitamin)
    }

    console.log('rec3',rec3);
    if(rec3 == '오메가3'){
        setRecImg3(omega)
    }else if(rec3 == '루테인'){
        setRecImg3(lutein)
    }else if(rec3 == '유산균'){
        setRecImg3(probiotics)
    }else if(rec3 == '밀크씨슬'){
        setRecImg3(milkthistle)
    }else if(rec3 == '보스웰리아'){
        setRecImg3(boswellia)
    }else{
        setRecImg3(vitamin)
    }
    },[rec3])


  return (
      <Container>
          <Row className="justify-content-center result-survey">
              <Col md="7" className="text-center">
              <br/><br/>
              <h3 className="title font-bold">하루 건강이 추천하는 영양제</h3>
              </Col>
          </Row>
          <Row className="m-t-40 card-size result-survey ">
              <Col md="4">
                  <Card className="card-shadow">
                      <a href={`/haru/nutri/${rec1}`} className="img-ho"><img className="card-img-top" alt="추천 영양소 사진 1" src={recImg1}/></a>
                      <CardBody>
                          <h6 className="title font-bold align-center">{rec1}</h6>
                      </CardBody>
                  </Card>
              </Col>
              <Col md="4">
                  <Card className="card-shadow">
                      <a href={`/haru/nutri/${rec2}`} className="img-ho"><img className="card-img-top" alt="추천 영양소 사진 2" src={recImg2} /></a>
                      <CardBody>
                          <h6 className="title font-bold align-center">{rec2}</h6>
                      </CardBody>
                  </Card>
              </Col>
              <Col md="4">
                  <Card className="card-shadow">
                      <a href={`/haru/nutri/${rec3}`} className="img-ho"><img className="card-img-top" alt="추천 영양소 사진 3" src={recImg3}/></a>
                      <CardBody>
                          <h6 className="title font-bold align-center">{rec3}</h6>
                      </CardBody>
                  </Card>
              </Col>
          </Row>
      </Container>
  )
}

export default ResultBySurvey