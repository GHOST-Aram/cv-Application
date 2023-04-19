import React from 'react'
import Input from '../input'
import SubmitBtn from '../submit-button'

const Form = ({workExp, statesSetter,submissionHandler}) => {
  return (
    <form onSubmit={(e) => submissionHandler(e)} className='container text-left'>
      <h2 className="text-center font-light">Work Experience</h2>
      <Input handleChange={(e) => statesSetter.setCompany (e.target.value)} value={workExp.company} type= 'text' label= 'Company' />
      <Input handleChange={(e) => statesSetter.setJobTitle (e.target.value)} value={workExp.jobTitle} type= 'text' label= 'Job Title' />
      <Input handleChange={(e) => statesSetter.setRole (e.target.value)} value={workExp.role} type= 'text' label= 'Role' />
      <Input handleChange={(e) => statesSetter.setStartDate (e.target.value)} value={workExp.startDate} type= 'date' label= 'Start Date' />
      <Input handleChange={(e) => statesSetter.setEndDate(e.target.value)} value={workExp.endDate} type= 'date' label= 'End Date' />
      <SubmitBtn />
    </form>
  )
}

export default Form