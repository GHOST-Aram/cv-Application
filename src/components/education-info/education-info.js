import React from 'react'
import EducationDetails from './education-details'
import Form from './form'
import { useState } from 'react'
const EducationForm = () => {
  //Editing state manager
  const [isEditing, setIsEditing] = useState(false)

  // Display state manager
  const [isSaved, setIsSaved] = useState(false)
  
  // Education
  const [educationExp, setEductationExp] = useState({})
  
  // Education experience properties
  const [institution, setInstitution] = useState('');const [title, setTitle] = useState('');const [achievement, setAchievement] = useState('')
  const [startDate, setStartDate] = useState('');const [completeDate, setCompleteDate] = useState('')

  //States setter 
  const statesSetter = {
    "setInstitution":setInstitution,"setTitle":setTitle,"setAchievement":setAchievement,
    "setStartDate":setStartDate,"setCompleteDate":setCompleteDate,
  }

  const initateEditing = () => {
    //Populate form with current data
    setInstitution(educationExp.institution); setTitle(educationExp.title); setAchievement(educationExp.setAchievement)
    setCompleteDate(educationExp.completeDate); setStartDate(educationExp.setStartDate)
    // Display form
    setIsSaved(!isSaved)

    // Change text content of submit button
    setIsEditing(!isEditing)
  }

  // Handle submit event
  const submit = (e) =>{
    e.preventDefault()

    // Create object
    setEductationExp({...educationExp, institution:institution, title: title, achievement:achievement, startDate: startDate, completeDate:completeDate})

    // Reset states
    setInstitution('');  setTitle(''); setAchievement(''); setStartDate(''); setCompleteDate('')

    // Set is saved to true
    setIsSaved(!isSaved)

    //  // Invert is editing if true
     if(isEditing){setIsEditing(!isEditing)}
  }

  return (
    <>
    { !isSaved ?//Remove form from DOM after saving details then render details
        <Form handleSubmission={submit} statesSetter={statesSetter} educationExp={educationExp}/>
      :
      <EducationDetails educationExp={educationExp}  handleClick ={initateEditing}/>
    }
    </>

  )
}

export default EducationForm