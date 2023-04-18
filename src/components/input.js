import React from 'react'

const Input = ({label, type}) => {
  return (
    <div className='text-left container mb-4'>
        <label htmlFor={`${label.toLowerCase().replaceAll(' ', '-')}`} className='mb-4'></label>
        <input className='px-4 py-4 border-none bg-light-gray rounded-md w-full'
        type={`${type}` } placeholder={`${label}`}/>
    </div>
  )
}

export default Input