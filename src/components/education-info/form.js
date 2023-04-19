import React from 'react'
import Input from '../input'
import SubmitBtn from '../submit-button'
const Form = ({handleSubmission,educationExp, statesSetter}) => {
  return (
    <form onSubmit = {(e) => handleSubmission(e)} className='container text-left'>
          <h2 className="text-center font-light">Latest Education Experience</h2>
          <Input handleChange={(e)=>statesSetter.setInstitution(e.target.value)} value={educationExp.institution} type= 'text' label= 'Institution' />
          <Input handleChange={(e)=>statesSetter.setTitle(e.target.value)} value={educationExp.title} type= 'text' label= 'Study Title eg Bsc Computer Science' />
          <Input handleChange={(e)=>statesSetter.setAchievement (e.target.value)} value={educationExp.achievement} type= 'text' label= 'Achievement' />
          <Input handleChange={(e)=>statesSetter.setStartDate(e.target.value)} value={educationExp.startDate} type= 'date' label= 'Start Date' />
          <Input handleChange={(e)=>statesSetter.setCompleteDate(e.target.value)} value={educationExp.completeDate} type= 'date' label= 'Completion Date' />
          <SubmitBtn />
      </form>
  )
}

export default Form