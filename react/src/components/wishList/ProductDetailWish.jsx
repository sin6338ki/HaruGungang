import React, { useEffect } from 'react'
import { Table } from 'reactstrap'
import ComparePrice from './ComparePrice'
import { useState } from 'react';
import CompareNutri from './CompareNutri';


const ProductDetailWish = ({result}) => {

  console.log('result', result);

  return (
      <Table borderless className='compare-table'>
  <thead>
    <tr>
      {result.map((item)=>(
        <th>
          <a href={item.detail_url}>
        <img src={item.img} width="300px" className='m-t-10 m-b-20'></img></a>
      </th>))}
    </tr>
  </thead>
  <tbody>
    <tr className='hr'>
      {result.map((item)=>(
                <td>
                  <h5 className='title font-bold m-b-40'>
                {item.detail_name}
                  </h5>
              </td>
      ))}
    </tr>
    <tr scope="row" className='text-align-left'>
      <h4 className='title font-bold m-t-30 text-success'>
        판매가격</h4>
      </tr>
    <tr className='hr'>
      {result.map((item)=>(
              <td className='table-width'><h4 className='title font-semibold m-b-30'>
              {item.detail_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              </h4></td>
      ))}
    </tr>
    <tr scope="row" className='text-align-left'>
      <h4 className='title font-bold m-t-30 text-success'>
        가격비교(하루에)</h4>
      </tr>
    <tr className='hr'>
      {result.map((item)=>(
              <td className='table-width'><h4 className='title font-semibold m-b-30'>
              <ComparePrice day_price={item.day_price} /></h4>
            </td>
      ))}
    </tr>
    <tr scope="row" className='text-align-left'>
      <h4 className='title font-bold m-t-30 text-success'>
        주요 성분 함량 비교</h4>
      </tr>
    <tr className='hr'>
      {result.map((item)=>(
              <td className='table-width'><h4 className='title font-semibold m-b-30'>
              <CompareNutri item={item} nutri_name={item.nutri_name} nutri_content={item.nutri_content} /></h4>
            </td>
      ))}
    </tr>
      <tr scope="row" className='text-align-left '>
      <h4 className='title font-bold m-t-30 text-success'>
        포장수량</h4>
      </tr>
    <tr className='hr'>
      {result.map((item)=>(
              <td className='table-width'><h4 className='title font-semibold m-b-30'>
              {item.pack_unit}{" "}{item.shape}</h4>
            </td>
      ))}
    </tr>
      <tr scope="row" className='text-align-left'>
      <h4 className='title font-bold m-t-30 text-success'>
        기능성 원료</h4>
      </tr>
    <tr className='hr'>
      {result.map((item)=>(
              <td className='table-width'><h6 className='title font-semibold m-b-30'>
              {item.func_material}</h6>
            </td>
      ))}
    </tr>
      <tr scope="row" className='text-align-left'>
      <h4 className='title font-bold m-t-30 text-success'>
        제형</h4>
      </tr>
    <tr className='hr'>
      {result.map((item)=>(
              <td className='table-width'><h4 className='title font-semibold m-b-30'>
              {item.shape}</h4>
            </td>
      ))}
    </tr>

      
    <tr scope="row" className='text-align-left'>
        <h4 className='title font-bold m-t-30 text-success'>
        제조사
        </h4>
      </tr>
    <tr className='hr'>
      {result.map((item)=>(
              <td className='table-width'><h4 className='title font-semibold m-b-30'>
              {item.manufacturer}
              </h4>
            </td>
      ))}
    </tr>
  </tbody>
</Table>
  )
}

export default ProductDetailWish