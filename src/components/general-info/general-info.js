import React from 'react'
import GeneralDetails from './general-details';
import Form from './form';
import { useState } from 'react';

const GeneralInfo = () => {
  // Display state controller
  const [isSaved, setIsSaved] = useState(false)
  // General information
  const [generalInfo, setGeneralInfo] = useState({})

  // Genaral.name .email .phone
  const [name, setName] = useState(''); const [phone, setPhone] = useState(''); const [email, setEmail] = useState('')

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
  const statesSetter = {
    "setEmail": setEmail,
    "setName": setName,
    "setPhone": setPhone,
  }
  
  return (
    <>
    { !isSaved ?
      <Form statesSetter={statesSetter} submissionHandler={submit} generalInfo={generalInfo}/>
    :
      <GeneralDetails generalInfo={generalInfo} />
    }
    </>
  )
}

export default GeneralInfo