import React from 'react'
import Input from './input';
import SubmitBtn from './submit-button';

const GeneralForm = () => {
  return (
    <form className='container text-left'>
        <h2 className="text-center font-light">General Information</h2>
        <Input type= 'text' label= 'Name' />
        <Input type= 'text' label= 'Phone' />
        <Input type= 'email' label= 'Email' />
        <SubmitBtn />
    </form>
  )
}

export default GeneralForm