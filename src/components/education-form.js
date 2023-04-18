import React from 'react'
import Input from './input'
import SubmitBtn from './submit-button'
const EducationForm = () => {
  return (
    <form className='container text-left'>
        <h2 className="text-center font-light">Latest Education Experience</h2>
        <Input type= 'text' label= 'Institution' />
        <Input type= 'text' label= 'Study Title' />
        <Input type= 'text' label= 'Result' />
        <Input type= 'date' label= 'Start Date' />
        <Input type= 'date' label= 'Completion Date' />
        <SubmitBtn />
    </form>

  )
}

export default EducationForm