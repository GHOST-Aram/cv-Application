import React from 'react'
import Data from './data';
import EditButton from './edit-button';
import Input from './input';
import SubmitBtn from './submit-button';
import { useState } from 'react';

const GeneralForm = () => {
  // Display state controller
  const [isSaved, setIsSaved] = useState(false)
  // General information
  const [generalInfo, setGeneralInfo] = useState({})

  // Genaral.name .email .phone
  const [name, setName] = useState(''); const [phone, setPhone] = useState(''); const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    // Create general info Object
    setGeneralInfo({...generalInfo, name: name, phone: phone, email:email,})
    // Reset states
    setEmail(''); setName(''); setPhone('')

    // Invert output controller
    setIsSaved(!isSaved)
  }
  
  return (
    <>
    { !isSaved ?
    <form onSubmit = {onSubmit}className='container text-left'>
        <h2 className="text-center font-light">General Information</h2>
        <Input handleChange={(e) => setName(e.target.value)} value={name} type= 'text' label= 'Name' />
        <Input handleChange={(e) => setPhone(e.target.value)} value={phone} type= 'text' label= 'Phone' />
        <Input handleChange={(e) => setEmail(e.target.value)} value={email} type= 'email' label= 'Email' />
        <SubmitBtn />
    </form>
    :
    <div className='container-2 text-left'>
      <h2 className="font-light text-center py-8">General Information</h2>
      <div className='grid grid-3 gap-8 py-8'>
        <Data label='Name' value={name}/><Data label='Phone' value={phone}/><Data label='Email' value={email}/>
      </div>
      <EditButton />
    </div>
    }
    </>
  )
}

export default GeneralForm