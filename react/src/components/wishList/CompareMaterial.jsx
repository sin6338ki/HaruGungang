import React, { useEffect, useState } from 'react'
import { Col } from 'reactstrap';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'


const CompareMaterial = ({item,setChartX,chartX}) => {

  const[material, setMaterial] = useState([])
  const[content, setContent] = useState([])

  useEffect(()=>{
    setMaterial(item.func_material.split('|'))
    setContent(item.func_material_content.split('|'))
  },[item])

  const arr = []
  const [data, setData] = useState([])
 
  useEffect(()=>{
    console.log('materail', material);
    console.log('content', content);
    
    for(let i = 0 ; i < content.length ; i++){
      // const key = material[i];
      // const value = content[i];
      // obj[key] = value;
      const obj = {}
      obj["name"] = material[i];
      obj["contents"] = parseInt(content[i]);
      arr.push(obj)
    }

    setData(arr)
  },[content])

  useEffect(()=>{
    console.log('배열 추가 arr', arr);
    console.log('data', data);
  },[arr])


  console.log('chart result : ' , item);

  // const data = [{
  //       name : "루테인",
  //       contents : 16 
  //     },
  //   {
  //     name : "지아잔틴",
  //     contents : 4
  //   }]


  useEffect(()=>{
    console.log(item.nutri_name);
    setChartX(item.nutri_name)
  }, [])

  useEffect(()=>{
    console.log('chartX', chartX);
  },[chartX])


  

  return (
    <Col xs="4">
      <BarChart width={340 } height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name"/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="contents" fill="#82ca9d"  />
    </BarChart>
      <div><p id="table-font">{item.detail_name}</p></div>
    </Col>
  )
}

export default CompareMaterial