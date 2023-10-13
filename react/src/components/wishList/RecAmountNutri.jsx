import React, { useEffect } from 'react'
import { Container, Progress, Row, Col } from 'reactstrap'
import axios from 'axios'
import { useState } from 'react'

const RecAmountNutri = ({item}) => {

  const [minMax, setMinMax] = useState([])
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [unit, setUnit] = useState("")
  const [percentage, setPercentage] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8085/haru/nutridetail/${item.nutri_name}`)
    .then((res) => {
      console.log('axios 통신 성공!',res.data.recNutri);
      setMinMax(res.data.recNutri.rec_intake.split('|'))
      setUnit(res.data.recNutri.intake_unit)
    })
  },[])

  useEffect(()=>{
    console.log(minMax);
    setMax(minMax[1])
    setMin(minMax[0])
  },[minMax])

  useEffect(()=>{
    setPercentage(Math.floor(item.nutri_content/(max-min)*100))
  },[max])


  return (
    <div className='wrapper'>
      <Container>
        <Row>
          <Col className='text-align-center m-t-30' xs="3" ><h3 className='title font-bold'>{item.nutri_name}</h3></Col>
          <Col>
          <Container>
            <Row><Col className='m-b-20'>성인기준 일 권장량 대비 {percentage}%</Col></Row>
            <Row>
              <Col>
                <Progress
                  style={{height: '30px'}}
                  value={item.nutri_content}
                  min={min}
                  max={max}
                  color='success'
                >{item.nutri_content}</Progress>
              </Col>          
            </Row>
            <Row>
              <Col className='text-align-left m-t-20'>{min}{unit}</Col>
              <Col className='text-align-right m-t-20'>{max}{unit}</Col>
            </Row>
          </Container>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default RecAmountNutri