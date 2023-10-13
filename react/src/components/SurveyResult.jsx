import React, { useEffect } from 'react'
import ResultBySurvey from './temp/ResultBySurvey';
import ResultByBasic from './temp/ResultByBasic';

const SurveyResult = ({gender, ageRange, interest}) => {

  return (
    <div className='result-survey-wrapper'>
    <div className='resultSurvey'>
      <ResultBySurvey interest={interest}/>
    </div>
      <div className='resultSurvey'>
      <ResultByBasic gender={gender} ageRange={ageRange}/>     
      </div>
    </div>
  )
}

export default SurveyResult