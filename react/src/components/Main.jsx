import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import SearchFunc from './Main/SearchFunc';
import SearchStatic from './Main/SearchStatic';
import axios from 'axios';

//아이콘 import
import blood from "../assets/images/icon/혈관1.png"
import intestine from "../assets/images/icon/장.png"
import liver from "../assets/images/icon/liver2.png"
import eyes from "../assets/images/icon/eye.png"
import bone from "../assets/images/icon/bone.png"
import vitamin from "../assets/images/icon/vitamin-c.png"

const Main = () => {

  //기능성으로 정보찾기 관련 
  const btnClick  = (e)=>{
    console.log('btn click', e.target.name);
  }

  const [visible, setVisible] = useState(false)

  //DetailFunc 사용하는 변수
  //Main > SearchFunc > DetailFunc
  const [title, setTitle] = useState("");
  const [nutri, setNutri] = useState("");
  const [effect, setEffect] = useState([])


  let func = [{
    effect: "혈행흐름개선",
    url : `${blood}`
  },{
    effect: "장 건강",
    url : `${intestine}`
  },{
    effect: "간 건강",
    url : `${liver}`
  },{
    effect: "눈 건강",
    url : `${eyes}`
  },{
    effect: "관절/뼈 건강",
    url : `${bone}`
  },{
    effect: "항산화",
    url : `${vitamin}`
  }]


  //연령, 성별 관련
  //성별, 연령대 선택 객체

   const [visibleChart, setVisibleChart] = useState(false)
   const [recommend, setRecommend] = useState([]) 
   const [gender, setGender] = useState("")
   const [age, setAge] = useState("")
   const [data, setData] = useState([])

   //필터 선택 유지
    const [activeGenderW, setActiveGenderW] = useState(false);
    const [activeGenderM, setActiveGenderM] = useState(false);
    const [activeAgeGroup10, setActiveAgeGroup10] = useState(false);
    const [activeAgeGroup20, setActiveAgeGroup20] = useState(false);
    const [activeAgeGroup30, setActiveAgeGroup30] = useState(false);
    const [activeAgeGroup40, setActiveAgeGroup40] = useState(false);
    const [activeAgeGroup50, setActiveAgeGroup50] = useState(false);
    const [activeAgeGroup60, setActiveAgeGroup60] = useState(false);

   const addGenderFilter = (e)=>{
       console.log('성별 필터 추가', e.target.value);
       setGender(e.target.value)
       e.target.value == 'w' ? setActiveGenderW(!activeGenderW) : setActiveGenderM(!activeGenderM)
       setVisibleChart(false)
   }

   const addAgeFilter = (e)=>{
       console.log('연령대 필터 추가', e.target.value);
       setAge(e.target.value) 
       if(e.target.value == '10'){
         setActiveAgeGroup10(!activeAgeGroup10)
      }else if(e.target.value == '20'){
        setActiveAgeGroup20(!activeAgeGroup20)
       }else if(e.target.value == '30'){
        setActiveAgeGroup30(!activeAgeGroup30)
       }else if(e.target.value == '40'){
        setActiveAgeGroup40(!activeAgeGroup40)
       }else if(e.target.value == '50'){
        setActiveAgeGroup50(!activeAgeGroup50)
       }else{
        setActiveAgeGroup60(!activeAgeGroup60)
       }
   }

   const loadData = ()=>{
   
    let data = {
        gender : gender,
        age_range : age
    }

       console.log('loadData');
       axios.post("http://localhost:8085/haru/main", data)
       .then((res)=>{

        let temp = [{
            Nutriname: `${res.data[0].recNutri.nutri_name}`,
            value: parseInt(`${res.data[0].recNutri.click_vol}`)
        },{
            Nutriname: `${res.data[1].recNutri.nutri_name}`,
            value: parseInt(`${res.data[1].recNutri.click_vol}`)
        },{
            Nutriname: `${res.data[2].recNutri.nutri_name}`,
            value: parseInt(`${res.data[2].recNutri.click_vol}`)
        }]
        setRecommend(temp);
        setVisibleChart(true)
        setActiveGenderW(false);
        setActiveGenderM(false);
        setActiveAgeGroup10(false)
        setActiveAgeGroup20(false)
        setActiveAgeGroup30(false)
        setActiveAgeGroup40(false)
        setActiveAgeGroup50(false)
        setActiveAgeGroup60(false)
       }).catch((e)=>{
           console.log('error', e);
       })
   }
  
   useEffect(()=>{
    console.log('main rec', recommend);
    setData(recommend)
   },[recommend])

//로그인 후 메인 페이지 들어왔을 때 필터 자동 적용
const [loginGender, setLoginGender] = useState()
const [loginAgeGroup, setLoginAgeGroup] = useState()
const user_id = sessionStorage.getItem("id")

useEffect(()=>{
  if (sessionStorage.getItem != null) {
    axios.get(`http://localhost:8085/haru/filter/${user_id}`)
    .then((res)=>{
      console.log('gender, age그룹 정보 가져오기',  res.data);
      setLoginGender(res.data.gender);
      setLoginAgeGroup(res.data.age_group)
    })
    // setVisibleChart(true)
    loadData()
  }
},[])

useEffect(()=>{
  console.log('logingender', loginGender);
  
  if(loginGender == 'W'){
    setActiveGenderW(true)
    setGender('w')
  }else if(loginGender == 'M'){
    setActiveGenderM(true)
    setGender('m')
  }

  if(loginAgeGroup=='10대'){
    setActiveAgeGroup10(true)
    setAge('10')
  }else if(loginAgeGroup=='20대'){
    setActiveAgeGroup20(true)
    setAge('20')
  }else if(loginAgeGroup=='30대'){
    setActiveAgeGroup30(true)
    setAge('30')
  }else if(loginAgeGroup=='40대'){
    setActiveAgeGroup40(true)
    setAge('40')
  }else if(loginAgeGroup=='50대'){
    setActiveAgeGroup50(true)
    setAge('50')
  }else if(loginAgeGroup == '60대'){
    setActiveAgeGroup60(true)
    setAge('60')
  }

},[loginAgeGroup])


  return (
    <div>
    <Row>
        <SearchFunc 
        title={title}
        setTitle={setTitle}
        nutri={nutri}
        setNutri={setNutri}
        effect={effect}
        setEffect={setEffect} func={func} btnClick={btnClick} visible={visible} setVisible={setVisible} />
    </Row>
    <Row>
      <SearchStatic activeGenderW={activeGenderW} activeGenderM={activeGenderM} 
      activeAgeGroup10={activeAgeGroup10}
      activeAgeGroup20={activeAgeGroup20}
      activeAgeGroup30={activeAgeGroup30}
      activeAgeGroup40={activeAgeGroup40}
      activeAgeGroup50={activeAgeGroup50}
      activeAgeGroup60={activeAgeGroup60}
      loginGender={loginGender}
      loginAgeGroup={loginAgeGroup}
      visibleChart={visibleChart} data={data} loadData={loadData} addGenderFilter={addGenderFilter} addAgeFilter={addAgeFilter} gender={gender} age={age}/>
    </Row>
    </div>
  )
}

export default Main