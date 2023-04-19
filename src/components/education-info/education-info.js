import React from 'react'
import EducationDetails from './education-details'
import Form from './form'
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

  //States setter 
  const statesSetter = {
    "setInstitution":setInstitution,
    "setTitle":setTitle,
    "setAchievement":setAchievement,
    "setStartDate":setStartDate,
    "setCompleteDate":setCompleteDate,
  }
  return (
    <>
    { !isSaved ?//Remove form from DOM after saving details then render details
        <Form handleSubmission={submit} statesSetter={statesSetter} educationExp={educationExp}/>
      :
      <EducationDetails educationExp={educationExp} />
    }
    </>

  )
}

export default EducationForm