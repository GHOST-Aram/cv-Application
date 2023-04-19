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


  const statesSetter = {
    "setEmail": setEmail,
    "setName": setName,
    "setPhone": setPhone,
  }
  const initateEditing = () => {
    //Populate form with current data
    setEmail(generalInfo.email)
    setName(generalInfo.name)
    setPhone(generalInfo.phone)

    // Display form
    setIsSaved(!isSaved)
  }
  const submit = (e) => {
    e.preventDefault()
    // Create general info Object
    setGeneralInfo({...generalInfo, name: name, phone: phone, email:email,})
    // Reset states
    setEmail(''); setName(''); setPhone('')

    // Invert output controller
    setIsSaved(!isSaved)
  }

  // States setter
  
  return (
    <>
    { !isSaved ?
      <Form statesSetter={statesSetter} submissionHandler={submit} 
      isEditing={isEditing} generalInfo={generalInfo}/>
    :
      <GeneralDetails generalInfo={generalInfo} handleClick={initateEditing}/>
    }
    </>
  )
}

export default GeneralInfo