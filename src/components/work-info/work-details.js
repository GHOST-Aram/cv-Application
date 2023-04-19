import React from 'react'
import Data from '../data'
import EditButton from '../edit-button'

const WorkDetails = ({workExp, handleClick}) => {
  return (
    <div className='container-2 text-left'>
            <h2 className="font-light text-center py-8">Education Experience</h2>
            <div className='grid grid-3 gap-8 py-8'>
            <Data label='Company' value={workExp.company}/><Data label='Job Title' value={workExp.jobTitle}/><Data label='Role' value={workExp.role}/>
            <Data label='StartDate' value={workExp.startDate}/><Data label='End Date' value={workExp.endDate}/>
            </div>
            <EditButton handleClick={handleClick}/>
        </div>
  )
}

export default WorkDetails