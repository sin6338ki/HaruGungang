import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'reactstrap';
import axios from 'axios'
import EyeWishList from './wishList/EyeWishList';
import LiverWishList from './wishList/LiverWishList';
import BloodWishList from './wishList/BloodWishList';
import IntenWishList from './wishList/IntenWishList';
import BoneWishList from './wishList/BoneWishList';
import AntiOxiWishList from './wishList/AntiOxiWishList';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

const WishList = ({userId, isLogin, setWishNum}) => {

  const nav = useNavigate()

  const [wishList, setWishList] = useState([])

  //찜리스트 서버에서 받아오기
  useEffect(()=>{
    userId = sessionStorage.getItem('id')
    console.log('아이디 :', userId);
    axios.get(`http://localhost:8085/haru/wishlist/${userId}`)
    .then((res)=>{
      console.log('찜리스트 통신 성공', res.data);
      setWishList(res.data)
    })
    .catch((e)=>{
      console.log('error', e);
    })
  },[])

  //기능별 제품 분류 state
  const [eyeList, setEyeList] = useState([])
  const [bloodList, setbloodList] = useState([])
  const [intenList, setIntenList] = useState([])
  const [liverList, setLiverList] = useState([])
  const [boneList, setBoneList] = useState([])
  const [antiOxiList, setAntiOxiList] = useState([])

    //상품 분류
    useEffect(()=>{
      console.log('wishlist',wishList);
      setEyeList(wishList.filter((item)=>(item.wishlist.nutri_name == '루테인')))
      setbloodList(wishList.filter((item)=>(item.wishlist.nutri_name == '오메가3')))
      setIntenList(wishList.filter((item)=>(item.wishlist.nutri_name == '유산균')))
      setLiverList(wishList.filter((item)=>(item.wishlist.nutri_name == '밀크씨슬')))
      setBoneList(wishList.filter((item)=>(item.wishlist.nutri_name == '보스웰리아' || item.wishlist.nutri_name == '글루코사민')))
      setAntiOxiList(wishList.filter((item)=>(item.wishlist.nutri_name == '비타민C')))
    },[wishList])

  //찜리스트에 해당 기능성 제품 있는지 여부 확인
  const [isVisibleEye, setIsVisibleEye] = useState(false)
  useEffect(()=>{
    eyeList.length !=0 && setIsVisibleEye(true)
    console.log('eyeList' , eyeList);
  },[eyeList])

  const [isVisibleBlood, setIsVisibleBlood] = useState(false)
  useEffect(()=>{
    bloodList.length !=0 && setIsVisibleBlood(true)
    console.log('bloodList' , bloodList);
  },[bloodList])

  const [isVisibleInten, setIsVisibleInten] = useState(false)
  useEffect(()=>{
    intenList.length !=0 && setIsVisibleInten(true)
  },[intenList])

  const [isVisibleLiver, setIsVisibleLiver] = useState(false)
  useEffect(()=>{
    liverList.length !=0 && setIsVisibleLiver(true)
    console.log(liverList);
  },[liverList])

  const [isVisibleBone, setIsVisibleBone] = useState(false)
  useEffect(()=>{
    boneList.length !=0 && setIsVisibleBone(true)
  },[boneList])

  const [isVisibleAntiOxi, setIsVisibleAntiOxi] = useState(false)
  useEffect(()=>{
    antiOxiList.length !=0 && setIsVisibleAntiOxi(true)
  },[antiOxiList])

  //다른 영양성분 비교 
  //기능성별 체크된 상품 확인
  //체크박스 기능
  //선택된 체크박스 세트

  const [checkedAllItems, setCheckedAllItems] = useState(new Set())
  const [checkedAllCnt, setCheckedAllCnt] = useState(0)

  const checkedAllItemHandler = (id, isChecked) => {
    console.log('checkedAllItemHandler', id);

    if(isChecked){
    
      checkedAllItems.add(id)
      setCheckedAllItems(checkedAllItems)
        console.log('모든 성분 is checked', checkedAllItems);
        setCheckedAllCnt(checkedAllCnt+1)
    }else if(!isChecked && checkedAllItems.has(id)){
      checkedAllItems.delete(id)
      setCheckedAllItems(checkedAllItems)
      console.log('모든 성분 no checked', checkedAllItems);
      setCheckedAllCnt(checkedAllCnt-1)
    }

    if(checkedAllItems.size > 3){
        alert('4개 이상의 제품은 비교가 불가능합니다. ')
    }
  }

 useEffect(()=>{
  console.log(checkedAllItems);
 }, [checkedAllItems])

  return (
    <div>
    <Container>
    <div className='box-container'>
  <div className="justify-content-center">
  <br/><br/>
<h2 className='title font-bold text-center m-b-40'>찜리스트</h2>
{userId != null ? 
<div>
  <Row className='m-b-30'>
        {/* 눈건강 */}
        {isVisibleEye && <EyeWishList checkedAllItemHandler={checkedAllItemHandler} eyeList={eyeList} userId={userId} setWishNum={setWishNum} />}
  </Row>
  <Row className='m-b-30'>
        {/* 혈행흐름개선 */}
        {isVisibleBlood && <BloodWishList checkedAllItemHandler={checkedAllItemHandler} bloodList={bloodList} userId={userId} />}
  </Row>
  <Row className='m-b-30'>
        {/* 장건강 */}
        {isVisibleInten && <IntenWishList checkedAllItemHandler={checkedAllItemHandler} intenList={intenList} userId={userId}/>}
    </Row>
    <Row className='m-b-30'>

        {/* 간건강 */}
        {isVisibleLiver && <LiverWishList checkedAllItemHandler={checkedAllItemHandler} liverList={liverList} userId={userId} />}
    </Row>
    <Row className='m-b-30'>

        {/* 관절 */}
        {isVisibleBone && <BoneWishList checkedAllItemHandler={checkedAllItemHandler} boneList={boneList} userId={userId} />}
    </Row>
    <Row className='m-b-30'>

        {/* 항산화 */}
        {isVisibleAntiOxi && <AntiOxiWishList checkedAllItemHandler={checkedAllItemHandler} antiOxiList={antiOxiList} userId={userId} />}
    </Row>
        {checkedAllCnt > 0 && 
        <Button className="fixed-button" color="success" onClick={()=>{nav("/haru/wishlist/othernutri", {state : {checkedAllItems : checkedAllItems}})}}>영양성분 조합 확인하기</Button>}
      </div> : <h4 className='title font-bold text-center m-b-40'>로그인이 필요합니다. </h4>}
      </div>
</div>
      </Container>
    </div>
  )
}

export default WishList