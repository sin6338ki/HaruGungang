import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem';
import { Container, Button } from 'reactstrap';

const NturiProducts = ( {intake, withNotNutri, withNutri, dailyRecTake, nutri_name, setProductList, productList }) => {
    
    const [display, setDisplay] = useState(3)

    useEffect(()=>{
      if(display == 9){
        setMoreText("접기")
      }else{
        setMoreText("제품 더보기")
      }
    }, [display])

    //네이버 API 정보 
    const url = "/v1/search/shop.json"; 
    const ClientID = "ga0iztUwThZ0NrLZMjzB";
    const ClientSecret = "Ii5vliWmLS";

    useEffect(()=>{
        axios
        .get(url, {
            params:{
              query: `${nutri_name}`,
              display: `${display}`
            }
          ,
          headers: {
            "X-Naver-Client-Id": ClientID,
            "X-Naver-Client-Secret": ClientSecret,
          },
        })
        .then((res) => {
          console.log(res.data.items)
          setProductList(res.data.items)
        })
        .catch((e) => {
          console.log(e);
        });
    },[display])

    useEffect(()=>{
        console.log('axios 콤포넌트',productList);
    },[productList])

    const[moreText, setMoreText] = useState("제품 더보기")

  return (
    <div>
        <ProductItem intake={intake} withNotNutri={withNotNutri} withNutri={withNutri} dailyRecTake={dailyRecTake} productList={productList} setProductList={setProductList} nutri_name={nutri_name}/>
        <Container className='text-center'>
          <br/>
        <Button className='btn btn-success' size='lg' onClick={()=>{
          display == 3 ? setDisplay(9) : setDisplay(3)
        }}>{moreText}</Button>
        </Container>
    </div>
  )
}

export default NturiProducts