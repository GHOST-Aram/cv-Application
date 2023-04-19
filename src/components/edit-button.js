import React from 'react'
import {FaPen} from 'react-icons/fa'

export const EditButton = ({handleClick}) => {
  return (
    <button onClick={handleClick}
    className='border-none bg-yellow-500 text-light text-lg rounded-sm outline-none py-4 px-16 mb-16'>
        <FaPen />
    </button>
  )
}

export default EditButton