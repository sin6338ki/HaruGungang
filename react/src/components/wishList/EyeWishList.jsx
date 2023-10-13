import React, { useState } from 'react'
import { Button, Row, Col, Container, Card, FormGroup, Input } from 'reactstrap';
import WishItem from './WishItem';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const EyeWishList = ({eyeList, userId, checkedAllItemHandler, setWishNum}) => {

    const nav = useNavigate()

  //체크박스 기능
  //선택된 체크박스 세트
  const [checkedItems, setCheckedItems] = useState(new Set())
  const [checkedCnt, setCheckedCnt] = useState(0)

  const checkedItemHandler = (id, isChecked) => {
    console.log('checkedItemHandler', id);

    if(isChecked){
  
      checkedItems.add(id)
      setCheckedItems(checkedItems)
        console.log('is checked', checkedItems);
        setCheckedCnt(checkedCnt+1)
    }else if(!isChecked && checkedItems.has(id)){
      checkedItems.delete(id)
      setCheckedItems(checkedItems)
      console.log('no checked', checkedItems);
      setCheckedCnt(checkedCnt-1)
    }

    if(checkedItems.size > 3){
        alert('4개 이상의 제품은 비교가 불가능합니다. ')
    }
  }

  useEffect(()=>{
    console.log('eyewishlist checkeditems', checkedItems);
  },[checkedItems])

  return (
    <div>
        <h4 className='title font-bold'>눈 건강</h4>
        <FormGroup>
        <Container>
            <Row className="m-t-40 justify-content-center">
        {eyeList.map((item)=>(
          <Col xs="4">
            <WishItem userId={userId} item={item} checkedItemHandler={checkedItemHandler} checkedAllItemHandler={checkedAllItemHandler} setWishNum={setWishNum}/>
          </Col>
        ))}
        </Row>
        </Container>
        {checkedCnt!=0 && 
        <Button color="success" onClick={()=>{nav("/haru/wishlist/samenutri", {state : {checkedItems : checkedItems}})}}>동일 영양성분군 비교하기</Button>}
        </FormGroup>
    </div>
  )
}

export default EyeWishList