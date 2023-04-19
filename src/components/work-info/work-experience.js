import React, { useState } from 'react'
import Form from './form'
import WorkDetails from './work-details'

export const WorkExperience = () => {

  //Editing state manager
  const [isEditing, setIsEditing] = useState(false)

  // Display State Controller
  const [isSaved, setIsSaved] = useState(false)
    // Work Exp Sate
    const [workExp, setWorkExp] = useState({})
    
    // Work Exp properties
    const [company, setCompany] = useState('Company Man');const [jobTitle, setJobTitle] = useState('');
    const [role, setRole] = useState('');const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Object of all work experience property state setters
    const statesSetter = {
        "setCompany": setCompany,
        "setJobTitle":setJobTitle,
        "setRole":setRole,
        "setStartDate":setStartDate,
        "setEndDate": setEndDate,
    }
    // Initate Editing
    const initateEditing = () => {
      //Populate form with current data
      setCompany(workExp.company); setJobTitle(workExp.jobTitle); setRole(workExp.role)
      setStartDate(workExp.startDate); setEndDate(workExp.endDate)

      // Display form
      setIsSaved(!isSaved)

      // Change text content of submit button
      setIsEditing(!isEditing)
    }

    // Handle submission event
    const submit = (e) => {
        e.preventDefault()

        // Create Object
        setWorkExp({...workExp, company: company, jobTitle: jobTitle, role: role, startDate: startDate, endDate: endDate} )

        // Reset states
        setCompany(''); setJobTitle(''); setRole(''); setStartDate(''); setEndDate('')

        // Set as saved 
        setIsSaved(!isSaved)

        // Reset isEditing state
        if(isEditing){setIsEditing(!isEditing)}
    }
  return (
    <>
    { !isSaved ?//Hide form after user input is saves and display CV
        <Form submissionHandler={submit} statesSetter={statesSetter} workExp={workExp} />
        :
        //Render details when form is submitted
        <WorkDetails workExp={workExp} handleClick = {initateEditing}/>
    }
    </>
  )
}

export default WorkExperience