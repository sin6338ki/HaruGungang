import React from 'react'
import { useState } from 'react';
import { Progress } from 'reactstrap'
import axios from 'axios'
import { useEffect } from 'react';

const CompareNutri = ({item, nutri_name, nutri_content}) => {

    const [unit, setUnit] = useState()
    const [max, setMax] = useState()
    const [min, setMin] = useState()

    useEffect(()=>{
        console.log('선택한 영양성분 :',  nutri_name);
        axios.get(`http://localhost:8085/haru/nutridetail/${nutri_name}`)
        .then((res)=>{
            console.log('nutridetail 통신성공',res.data);
            //변수에 응답받은 데이터 저장
            console.log(res.data.recNutri);
            setUnit(res.data.recNutri.intake_unit);
            console.log(res.data.recNutri.rec_intake);
            setMin(res.data.recNutri.rec_intake.split('|')[0]);
            setMax(res.data.recNutri.rec_intake.split('|')[1]);
        })
        .catch((e)=>{
            console.log('error : ', e);
        })
    },[])


  return (
    <div>
      <div>
      <Progress color="info" className="my-2 m-l-20 m-r-20" value={nutri_content} min={min} max={max} style={{height: "30px"}}>{nutri_content}{unit}</Progress>
      </div>
      <h6 className='font-bold'>{nutri_name} 일일권장섭취량 : min {min}, max {max}</h6>
    </div>
  )
}

export default CompareNutri