import React from 'react'
import Data from './data'
import EditButton from './edit-button'
import Input from './input'
import SubmitBtn from './submit-button'
import { useState } from 'react'
const EducationForm = () => {
  // Display state manager
  const [isSaved, setIsSaved] = useState(false)

  // Education
  const [educationExp, setEductationExp] = useState({})

  // Education experience properties
  const [institution, setInstitution] = useState('');const [title, setTitle] = useState('');const [achievement, setAchievement] = useState('')
  const [startDate, setStartDate] = useState('');const [completeDate, setCompleteDate] = useState('')

  // Handle submit event
  const submit = (e) =>{
    e.preventDefault()

    // Create object
    setEductationExp({...educationExp, institution:institution, title: title, achievement:achievement, startDate: startDate, completeDate:completeDate})

    // Reset states
    setInstitution('');  setTitle(''); setAchievement(''); setStartDate(''); setCompleteDate('')

    // Set is saved to tru
    setIsSaved(!isSaved)
  }

  return (
    <>
    { !isSaved ?
      <form onSubmit = {(e) => submit(e)} className='container text-left'>
          <h2 className="text-center font-light">Latest Education Experience</h2>
          <Input handleChange={(e)=>setInstitution(e.target.value)} value={institution} type= 'text' label= 'Institution' />
          <Input handleChange={(e)=>setTitle(e.target.value)} value={title} type= 'text' label= 'Study Title eg Bsc Computer Science' />
          <Input handleChange={(e)=>setAchievement (e.target.value)} value={achievement} type= 'text' label= 'Achievement' />
          <Input handleChange={(e)=>setStartDate(e.target.value)} value={startDate} type= 'date' label= 'Start Date' />
          <Input handleChange={(e)=>setCompleteDate(e.target.value)} value={completeDate} type= 'date' label= 'Completion Date' />
          <SubmitBtn />
      </form>
      :
      <div className='container-2 text-left'>
        <h2 className="font-light text-center py-8">Education Experience</h2>
        <div className='grid grid-3 gap-8 py-8'>
          <Data label='Instituiton' value={institution}/><Data label='Study Title' value={title}/><Data label='Achievement' value={achievement}/>
          <Data label='StartDate' value={startDate}/><Data label='Completion Date' value={completeDate}/>
        </div>
        <EditButton />
      </div>
    }
    </>

  )
}

export default EducationForm