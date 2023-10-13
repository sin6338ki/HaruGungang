import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap';

const Filter = ({activeGenderW, activeGenderM, activeAgeGroup10, activeAgeGroup20, activeAgeGroup30, activeAgeGroup40, activeAgeGroup50, activeAgeGroup60, addGenderFilter, addAgeFilter, loadData}) => {

  return (
    <div>
      <div className='fav-filter col-md-12'>
        <div>
          <br/><br/>
        <h3 className='title font-bold'>성별</h3>
            <div>
            <Button active={activeGenderM} outline color="secondary" value="m" onClick={addGenderFilter} className='m-r-10'>남</Button>
            <Button active={activeGenderW} outline color="secondary" value="w" onClick={addGenderFilter} className='m-r-10'>여</Button>
            </div>
        </div>
        <div>
          <br/>
        <h3 className='title font-bold'>연령대</h3>
            <div>
            <Button active={activeAgeGroup10} outline color="secondary" value="10" onClick={addAgeFilter} className='m-r-10'>10대</Button>
            <Button active={activeAgeGroup20} outline color="secondary" value="20" onClick={addAgeFilter} className='m-r-10'>20대</Button>
            <Button active={activeAgeGroup30} outline color="secondary" value="30" onClick={addAgeFilter} className='m-r-10'>30대</Button>
            <Button active={activeAgeGroup40} outline color="secondary" value="40" onClick={addAgeFilter} className='m-r-10'>40대</Button>
            <Button active={activeAgeGroup50} outline color="secondary" value="50" onClick={addAgeFilter} className='m-r-10'>50대</Button>
            <Button active={activeAgeGroup60} outline color="secondary" value="60" onClick={addAgeFilter} className='m-r-10'>60대</Button>
            </div>
            <br/><br/>
            <Button className="nextBtn" size="lg" color="success" onClick={loadData}>조회하기</Button>
         
            </div>
        <br/>
        </div>
    </div>
  )
}

export default Filter