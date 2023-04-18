import React from 'react'
import Input from './input'
import SubmitBtn from './submit-button'
const WorkExperience = () => {
  return (
    <form className='container text-left'>
        <h2 className="text-center font-light">Work Experience</h2>
        <Input type= 'text' label= 'Company' />
        <Input type= 'text' label= 'Job Title' />
        <Input type= 'text' label= 'Role 1' />
        <Input type= 'date' label= 'Start Date' />
        <Input type= 'date' label= 'End Date' />
        <SubmitBtn />
    </form>
  )
}

export default WorkExperience