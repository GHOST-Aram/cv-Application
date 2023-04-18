import React from 'react'
import Input from './input';
import SubmitBtn from './submit-button';
import { useState } from 'react';

const GeneralForm = () => {
  // General information
  const [generalInfo, setGeneralInfo] = useState({})

  // Genaral.name .email .phone
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    // Create general info Object
    setGeneralInfo({
      ...generalInfo,
       name: name,
       phone: phone,
       email:email,
    })
    // Reset states
    setEmail('')
    setName('')
    setPhone('')
  }
  
  return (
    <form onSubmit = {onSubmit}className='container text-left'>
        <h2 className="text-center font-light">General Information</h2>
        <Input handleChange={(e) => setName(e.target.value)} value={name} type= 'text' label= 'Name' />
        <Input handleChange={(e) => setPhone(e.target.value)} value={phone} type= 'text' label= 'Phone' />
        <Input handleChange={(e) => setEmail(e.target.value)} value={email} type= 'email' label= 'Email' />
        <SubmitBtn />
    </form>
  )
}

export default GeneralForm