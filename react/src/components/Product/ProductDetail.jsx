import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router'
import axios from 'axios'
import { Container, Row, Col, Button, Card, Alert } from 'reactstrap'

const ProductDetail = ({addWishList, userId, isLogin, setProductIdMain, nutri, setNutri}) => {

    let {productId} = useParams()
    const location = useLocation();
    
    // 제품 정보 변수 
    //1행
    const [img, setImg]  = useState("")
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [packageUnit, setPackageUnit] = useState()
    const [menufacturer, setMenufacturer] = useState("")
    //2행
    const [dailyPrice, setDailyPrice] = useState()
    const [dailyIntake, setDailyIntake] = useState("")
    const [withGood, setWithGood] = useState([])
    const [withBad, setWithBad] = useState([])
    //3행
    const [dayMany, setDayMany] = useState("")
    const [dayTimes, setDayTimes] = useState("")
    const [dayWhen, setDayWhen] = useState("")
    const [bfAfMeal, setBfAfMeal] = useState("")
    const [note, setNote] = useState("")
    //버튼
    const [url, setUrl] = useState("")

    useEffect(()=>{
        console.log('productId :', productId);
        setProductIdMain(productId)
        setImg(location.state.img)
        setWithGood(location.state.withNutri)
        setWithBad(location.state.withNotNutri)
        setDailyIntake(location.state.dailyRecTake.replace('|','~'))
        setBfAfMeal(location.state.intake)
        console.log(img);
        axios.get(`http://localhost:8085/haru/product/${productId}`)
        .then((res)=>{
            console.log('제품상세페이지 통신성공', res.data);
            let data = res.data.recNutri
            setTitle(data.detail_name)
            setPrice(data.detail_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            setPackageUnit(data.pack_unit + data.shape)
            setNutri(data.nutri_name)
            setMenufacturer(data.manufacturer)
            setDailyPrice(Math.floor(data.detail_price / parseInt(data.pack_unit) / (data.day_many * parseInt(data.day_times))))
            setDayMany(data.day_many)
            setDayTimes(data.day_times)
            setDayWhen(data.day_when)
            setBfAfMeal(data.bf_af_meal)
            setNote(data.intake_precaution)
            setUrl(data.detail_url)
        })
        .catch((e)=>{
            console.log('error : ', e);
        })
    },[])

    useEffect(()=>{
        console.log('img url :', img);
    },[img])


  return (
    // <div>
        <div className='wrapper m-t-60'>
            <Row>
                <Col xs="4" className='justify-content-center'>
                <Card className='product-img'>
                    <img src={`${img}`} className='p-b-30'></img>
                </Card>
                </Col>
                <Col>
                    <h5 className='title font-bold m-b-40'>{title}</h5>
                    <h6 className='title font-bold m-b-20'>가격 : {price}원 </h6> 
                    <h6 className='title font-bold m-b-20'>포장수량 : {packageUnit}</h6>
                    <h6 className='title font-bold m-b-20'>영양성분 : {nutri}</h6>
                    <h6 className='title font-bold m-b-20'>제조사 : {menufacturer}</h6>
                </Col>
            </Row>
            <Row>
                <Col><Alert color="light">
                    <h6 className='text-center font-Pretendard-Regular font-bold m-t-10'>하루에</h6>   
                    <br></br><h5 className='text-center font-Pretendard-Regular font-bold'>{dailyPrice}원</h5></Alert></Col>

                <Col><Alert color="light">
                    <h6 className='text-center font-Pretendard-Regular font-bold m-t-10'>일일권장섭취량 <br></br>({nutri})</h6>     
                    <br></br><h5 className='text-center font-Pretendard-Regular font-bold'>{dailyIntake}</h5></Alert>
                </Col>

                <Col> <Alert color="primary">
                {withGood != "null" &&<h6 className='text-center font-Pretendard-Regular font-bold m-t-10'>상호작용 좋아요😊</h6>}
                <br></br>
                {withGood != "null" && <h5 className='text-center font-Pretendard-Regular font-bold'>{withGood}</h5>} </Alert></Col>

                <Col><Alert color="danger">
                {withBad != "null" && <h6 className='text-center font-Pretendard-Regular font-bold m-t-10'>상호작용 나빠요😂</h6>  }  
                <br></br>  
                {withBad != "null" && <h5 className='text-center font-Pretendard-Regular font-bold'>{withBad}</h5>} </Alert></Col>         
            </Row>
            {/* <Container> */}
            <Row>
                <Row className='font-Pretendard-Regular'>
                    <h6 className='title font-bold m-t-40'>섭취방법 :</h6> 
                    {dayTimes != 0 && <Col className='font-Pretendard-Regular'><Alert>하루에 {dayTimes}회</Alert></Col>}
                    {dayMany != 0 && <Col className='font-Pretendard-Regular'><Alert>1회 {dayMany}정/포</Alert></Col>}
                    
                    {dayWhen != 0 && <Col className='font-Pretendard-Regular'><Alert>{dayWhen}</Alert></Col>} 
                    {bfAfMeal != 0 && <Col className='font-Pretendard-Regular'><Alert>{bfAfMeal}</Alert></Col>}
                </Row>
            </Row>
            <hr/>
            <Row className='m-t-40 p-t-40'>
                <Row><h6 className='title font-bold'>섭취주의사항</h6></Row>
                <Row ><p className='font-Pretendard-Regular'>- {note.replace('|', '.')}</p></Row>
            </Row>
            <br/>
            <Row>
                <Button onClick={()=>{window.location.href=`${url}`} } size="lg" className="url-btn" color="success">상품 URL 연결</Button>
                <Button onClick={addWishList} size="lg" className="url-btn" color="success">제품 찜하기</Button>
            </Row>
            {/* </Container> */}
        </div>
    // </div>
  )
}

export default ProductDetail