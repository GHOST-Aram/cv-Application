import React from 'react'
import Data from '../data'
import EditButton from '../edit-button'
const GeneralDetails = ({generalInfo}) => {
  return (
    <div className='container-2 text-left'>
      <h2 className="font-light text-center py-8">General Information</h2>
      <div className='grid grid-3 gap-8 py-8'>
        <Data label='Name' value={generalInfo.name}/><Data label='Phone' value={generalInfo.phone}/><Data label='Email' value={generalInfo.email}/>
      </div>
      <EditButton />
    </div>
  )
}

export default GeneralDetails