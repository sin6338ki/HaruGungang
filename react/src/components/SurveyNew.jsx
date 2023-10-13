import React, { useEffect, useState } from 'react'
import SurveyGender from './temp/SurveyGender'
import SurveyBirthYear from './temp/SurveyBirthYear'
import SurveyInterest from './temp/SurveyInterest'
import SurveyResult from './SurveyResult'

const SurveyNew = () => {

  const [gender, setGender] = useState("")
  const [ageRange, setAgeArange] = useState(0)
  const [interest, setInterest] = useState([])

  const selectGender = (e)=>{

    if(e.target.type == 'button'){
      setGender(e.target.value )
    }else{
      setGender(e.target.id)
    }
    // console.log(e.target);
    // console.log('selectGender', e.target.value);
    // console.log('selectGender', e.target.id);
    
  }

  useEffect(()=>{
    console.log('gender' , gender);
  },[gender])

  const [ select, setSelect ] = useState("연령대 선택")

  const selectAgeArange = (e)=>{
    console.log('selectAge', e.target.value);
    setAgeArange(e.target.value)
    let selection = e.target.value + "대"
    setSelect(selection)
  }

  let cntCk = 0
  let tempList = []
  const selectInterest = (e)=>{
    console.log('selectInterest', e.target.value)
    tempList.push(e.target.value)
    cntCk++;
    console.log(cntCk)
    if(cntCk > 3){
      alert('더 이상 선택하실 수 없습니다.')
      setInterest([])
      cntCk = 0;
    }
  }

  const [visibleGender, setVisibleGender] = useState(true)
  const [visibleAge, setVisibleAge] = useState(false)
  const [visibleInterest, setVisibleInterest] = useState(false)
  const [visibleResult, setVisibleResult] = useState(false)

  const submitGender = ()=>{
    console.log('completeSelect gender');
    gender == "" && alert('성별을 선택해주세요')
    setVisibleGender(false)
    setVisibleAge(true)
  }

  const submitAge = ()=>{
    console.log('completeSelect gender');
    ageRange == "0" && alert('연령대를 선택해주세요')
    setVisibleAge(false)
    setVisibleInterest(true)
  }

  const submitInterest = ()=>{
    console.log('completSelect Interest');
    console.log('length : ', interest.length);
    setIsActive(!isActive)
    if(tempList.length < 3){
      alert('항목 3가지를 선택해 주세요') 
      cntCk = 0;
      tempList = []
    }else if(tempList.length == 3){
      setInterest(tempList) 
      setVisibleInterest(false) 
      setVisibleResult(true)
    }
  }

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {visibleGender && 
      <SurveyGender 
        selectGender={selectGender}
        submitGender={submitGender}/>}

      {visibleAge &&
      <SurveyBirthYear select={select} selectAgeArange={selectAgeArange} submitAge={submitAge}/>}

      {visibleInterest && 
      <SurveyInterest cntCk={cntCk} selectInterest={selectInterest} submitInterest={submitInterest} isActive={isActive}/>}

      {visibleResult && 
      <SurveyResult gender={gender} ageRange={ageRange} interest={interest}/> }
    </div>
  )
}

export default SurveyNew