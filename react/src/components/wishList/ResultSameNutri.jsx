import React from 'react'
import ProductDetailWish from './ProductDetailWish'
import ComparePrice from './ComparePrice'
import CompareMaterial from './CompareMaterial'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Card, Col, Container, Row } from 'reactstrap'

const ResultSameNutri = () => {

  const location = useLocation()

  // 체크된 제품 리스트
  const [compareList, setCompareList] = useState({})

  // 서버에서 불러온 정보
  const [result, setResult] = useState([])

  useEffect(()=>{
    console.log('같은 성분 checked list', location.state.checkedItems);
    setCompareList(location.state.checkedItems)
  },[])

  useEffect(()=>{
    console.log('같은 성분 비교 리스트',compareList);
    axios.post('http://localhost:8085/haru/compare', { product_id: Array.from(compareList) })
    .then((res)=>{
      console.log('제품 비교 통신 성공', res.data);
      setResult(res.data)
    })
  },[compareList])

  useEffect(()=>{
    console.log('result : ',result);
  },[result])

  const [chartX, setChartX] = useState()

  return (
    <div className="spacer" id="forms-component">
      <Container>
      <h2 className='title font-bold'>동일 영양성분 제품 비교하기</h2>
        <p className='m-b-40'>이미지를 클릭하시면 구매 가능한 사이트로 연결됩니다</p>
      <ProductDetailWish result={result}/>
      <br/>
      <h3 className='title font-bold m-t-40 m-b-40'>함량 비교 : {chartX}</h3>
      <Container>
      <Row>
      {result.map((item)=>(
        <CompareMaterial item={item} chartX={chartX} setChartX={setChartX}/>
      ))}
      </Row>
      </Container>
      </Container>
    </div>
  )
}

export default ResultSameNutri