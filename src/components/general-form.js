import React from 'react'
import Input from './input';
import SubmitBtn from './submit-button';
import { useState } from 'react';

const GeneralForm = () => {

   // Genaral.name .email .phone
  const [name, setName] = useState('EnglishAnm')
  const [phone, setPhone] = useState('089884326743')
  const [email, setEmail] = useState('xyz@gami.com')

  return (
    <form className='container text-left'>
        <h2 className="text-center font-light">General Information</h2>
        <Input handleChange={(e) => setName(e.target.value)} value={name} type= 'text' label= 'Name' />
        <Input handleChange={(e) => setPhone(e.target.value)} value={phone} type= 'text' label= 'Phone' />
        <Input handleChange={(e) => setEmail(e.target.value)} value={email} type= 'email' label= 'Email' />
        <SubmitBtn />
    </form>
  )
}

export default GeneralForm