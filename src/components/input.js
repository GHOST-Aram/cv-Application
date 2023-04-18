import React from 'react'

const Input = ({label, type, value, handleChange}) => {
  return (
    <div className='text-left w-full mb-8'>
        <label htmlFor={`${label.toLowerCase().replaceAll(' ', '-')}`} className='px-4'>{label}</label>
        <input value={value} required onChange={handleChange}
        className=' px-4 text-light py-4 border-none bg-slate-700 rounded-sm w-full outline-none'
        type={`${type}` } placeholder={`${label}`}/>
    </div>
  )
}

export default Input