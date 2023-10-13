import React, { useEffect, useState } from 'react'
import { Button, Row, Col } from 'reactstrap';

const SurveyInterest = ({cntCk, selectInterest, submitInterest, isActive}) => {

  return (
    <div className="survey-interest-wrapper">
            <div className="middle-spacer" id="card-component">
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title font-bold">불편하거나 걱정되는 것을 3가지 선택해 주세요.</h2>
                        </Col>
                    </Row>
            </div>
            <div id="survey-select-submit">
             <div className='select-interest'>
              <Button type="button" onClick={selectInterest} color="white" className="btn waves-effect waves-light btn-outline-success select-interst-item" size="lg" value="intestine" active={isActive}>소화, 장</Button>
              <Button type="button" onClick={selectInterest} color="white" className="btn waves-effect waves-light btn-outline-success select-interst-item" size="lg" value="eye" active={isActive}>눈</Button>
              <Button type="button" onClick={selectInterest} color="white" className="btn waves-effect waves-light btn-outline-success select-interst-item" size="lg" value="blood" active={isActive}>혈관, 혈액순환</Button>
              <Button type="button" onClick={selectInterest} color="white" className="btn waves-effect waves-light btn-outline-success select-interst-item" size="lg" value="liver" active={isActive}>간</Button>
              <Button type="button" onClick={selectInterest} color="white" className="btn waves-effect waves-light btn-outline-success select-interst-item" size="lg" value="bone" active={isActive}>뼈, 관절</Button>
              <Button type="button" onClick={selectInterest} color="white" className="btn waves-effect waves-light btn-outline-success select-interst-item" size="lg" value="antioxidant" active={isActive}> 항산화</Button>
             </div>
            <br/>
            <Button id="interest-submit" size="lg" className="next-btn" color="success" onClick={submitInterest}>결과확인</Button>
            </div>

        </div>
  )
}

export default SurveyInterest