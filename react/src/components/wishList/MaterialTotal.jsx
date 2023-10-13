import React from 'react'
import RecAmountNutri from './RecAmountNutri'

const MaterialTotal = ({result}) => {
  return (
    <div >
      {result.map((item)=>(
        <RecAmountNutri item={item}/>
      ))}
    </div>
  )
}

export default MaterialTotal