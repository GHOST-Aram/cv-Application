import React from 'react'
import Input from '../input'
import SubmitBtn from '../submit-button'

const Form = ({submissionHandler, statesSetter, generalInfo, isEditing}) => {
  return (
    <form onSubmit = {(e) =>submissionHandler(e) }className='container text-left'>
        <h2 className="text-center font-light">General Information</h2>
        <Input handleChange={(e) => statesSetter.setName(e.target.value)} value={generalInfo.name} type= 'text' label= 'Name' />
        <Input handleChange={(e) => statesSetter.setPhone(e.target.value)} value={generalInfo.phone} type= 'text' label= 'Phone' />
        <Input handleChange={(e) => statesSetter.setEmail(e.target.value)} value={generalInfo.email} type= 'email' label= 'Email' />
        <SubmitBtn isEditing={isEditing} />
    </form>
  )
}

export default Form