import React from 'react'

const SubmitBtn = ({isEditing}) => {
  return (
    <input type="submit" value={!isEditing ? "Save Information" : "Save Changes"} 
    className='border-none bg-green-500 text-light rounded-sm outline-none py-4 px-12 mb-16' />
  )
}

export default SubmitBtn