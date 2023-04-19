import React from 'react'
import Input from './input'
import SubmitBtn from './submit-button'
import { useState } from 'react'
const EducationForm = () => {

  // Education
  const [educationExp, setEductationExp] = useState({})

  // Education experience properties
  const [institution, setInstitution] = useState('Maseno');const [title, setTitle] = useState('Maseno');const [achievement, setAchievement] = useState('Maseno')
  const [startDate, setStartDate] = useState('Maseno');const [completeDate, setCompleteDate] = useState('Maseno')

  const onSubmit = (e) =>{
    e.preventDefault()

    // Create object
    setEductationExp({
      ...educationExp,
      institution:institution,
      title: title,
      achievement:achievement,
      startDate: startDate,
      completeDate:completeDate
    })
    // Reset states
    setInstitution('');  setTitle(''); setAchievement(''); setStartDate(''); setCompleteDate('')
  }

  return (
    <form onSubmit = {(e) => onSubmit(e)} className='container text-left'>
        <h2 className="text-center font-light">Latest Education Experience</h2>
        <Input handleChange={(e)=>setInstitution(e.target.value)} value={institution} type= 'text' label= 'Institution' />
        <Input handleChange={(e)=>setTitle(e.target.value)} value={title} type= 'text' label= 'Study Title' />
        <Input handleChange={(e)=>setAchievement (e.target.value)} value={achievement} type= 'text' label= 'Achievement' />
        <Input handleChange={(e)=>setStartDate(e.target.value)} value={startDate} type= 'date' label= 'Start Date' />
        <Input handleChange={(e)=>setCompleteDate(e.target.value)} value={completeDate} type= 'date' label= 'Completion Date' />
        <SubmitBtn />
    </form>

  )
}

export default EducationForm