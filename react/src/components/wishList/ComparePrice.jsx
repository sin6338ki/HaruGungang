import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Progress } from 'reactstrap'

const ComparePrice = ({day_price}) => {

  // const [pricePerOne, setPricePerOne] = useState();

  useEffect(()=>{
    console.log(day_price);
    // let p = item.detail_price / ( parseInt(item.pack_unit) * parseInt(item.day_times) * item.day_many )
  },[])
  return (
    <div>
      <Progress className="my-2 m-l-20 m-r-20" color="success" value={day_price} max={1500} style={{height: "30px"}}>{day_price}원</Progress>
    </div>
  )
}

export default ComparePrice