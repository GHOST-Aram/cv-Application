import React from 'react'
import Data from '../data'
import EditButton from '../edit-button'

const EducationDetails = ({educationExp, handleClick}) => {
  return (
    <div className='container-2 text-left'>
        <h2 className="font-light text-center py-8">Education Experience</h2>
        <div className='grid grid-3 gap-8 py-8'>
          <Data label='Instituiton' value={educationExp.institution}/><Data label='Study Title' value={educationExp.title}/><Data label='Achievement' value={educationExp.achievement}/>
          <Data label='StartDate' value={educationExp.startDate}/><Data label='Completion Date' value={educationExp.completeDate}/>
        </div>
        <EditButton handleClick={handleClick}/>
      </div>
  )
}

export default EducationDetails