import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import axios from 'axios'

//이미지 import 
import omega from '../../assets/images/icon/nutri_rec/omega3.png'
import probiotics from '../../assets/images/icon/nutri_rec/probiotics.png'
import milkthistle from '../../assets/images/icon/nutri_rec/milkthistle.png'
import lutein from '../../assets/images/icon/nutri_rec/lutein.png'
import boswellia from '../../assets/images/icon/nutri_rec/boswellia.png'
import vitamin from '../../assets/images/icon/vitamin-c.png'

const ResultByBasic = ({gender, ageRange}) => {

  const data = {
    gender : `${gender}`,
    ageRange : parseInt(ageRange)
  }

  const [rec1, setRec1] = useState()
  const [rec2, setRec2] = useState()
  const [rec3, setRec3] = useState()
  const [recImg1, setRecImg1] = useState()
  const [recImg2, setRecImg2] = useState()
  const [recImg3, setRecImg3] = useState()

  useEffect(()=>{
    console.log('interest', data);

    axios.post("http://localhost:8085/haru/survey/result2", data)
    .then((res)=>{
        console.log('basic result', res.data);
        setRec1(res.data[0].recNutriByBasic.nutri_name)
        setRec2(res.data[1].recNutriByBasic.nutri_name)
        setRec3(res.data[2].recNutriByBasic.nutri_name)
    })
})

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
    <div>
            <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <br/>
                  <h3 className="title font-bold"><span className="font-color-green">{ageRange}대 {gender == 'w' ? "여성" : "남성"}</span>이 최근 많이 검색한 영양제</h3>
              </Col>
          </Row>
          <Row className="m-t-40">
              <Col md="4">
                  <Card className="card-shadow">
                      <a href={`/haru/nutri/${rec1}`} className="img-ho"><img className="card-img-top" alt="wrappixel kit" src={recImg1}/></a>
                      <CardBody>
                          <h6 className="title font-bold align-center">{rec1}</h6>
                      </CardBody>
                  </Card>
              </Col>
              <Col md="4">
                  <Card className="card-shadow">
                      <a href={`/haru/nutri/${rec2}`} className="img-ho"><img className="card-img-top" alt="wrappixel kit" src={recImg2}/></a>
                      <CardBody>
                          <h6 className="title font-bold align-center">{rec2}</h6>
                      </CardBody>
                  </Card>
              </Col>
              <Col md="4">
                  <Card className="card-shadow">
                      <a href={`/haru/nutri/${rec3}`} className="img-ho"><img className="card-img-top" alt="wrappixel kit" src={recImg3}/></a>
                      <CardBody>
                          <h6 className="title font-bold align-center">{rec3}</h6>
                      </CardBody>
                  </Card>
              </Col>
          </Row>
      </Container>
    </div>
  )
}

export default ResultByBasic