import React from 'react'
import GeneralDetails from './general-details';
import Form from './form';
import { useState } from 'react';

const GeneralInfo = () => {
  // Display state controller
  const [isSaved, setIsSaved] = useState(false)
  
  //Editing state manager
  const [isEditing, setIsEditing] = useState(false)

  // General information
  const [generalInfo, setGeneralInfo] = useState({})
  
  // Genaral.name .email .phone
  const [name, setName] = useState(''); const [phone, setPhone] = useState(''); const [email, setEmail] = useState('')
  
  //Pops 
  let values = {name: name, phone: phone, email: email}
  
  const statesSetter = {"setEmail": setEmail, "setName": setName, "setPhone": setPhone,}
  
  const initateEditing = () => {
    //Populate form with current data
    setEmail(generalInfo.email); setName(generalInfo.name); setPhone(generalInfo.phone)

    // Display form
    setIsSaved(!isSaved)

    // Change text content of submit button
    setIsEditing(!isEditing)
  }
  const submit = (e) => {
    e.preventDefault()
    // Create general info Object
    setGeneralInfo({...generalInfo, name: name, phone: phone, email:email,})

    // Update calue of object representing props
    values = generalInfo
    // Reset states
    setEmail(''); setName(''); setPhone('')

    // Invert output controller
    setIsSaved(!isSaved)

    // Invert is editing if true
    if(isEditing){setIsEditing(!isEditing)}
  }

  // States setter
  
  return (
    <>
    { !isSaved ?
      <Form statesSetter={statesSetter} submissionHandler={submit} 
      isEditing={isEditing} generalInfo={values}/>
    :
      <GeneralDetails generalInfo={generalInfo} handleClick={initateEditing}/>
    }
    </>
  )
}

export default GeneralInfo