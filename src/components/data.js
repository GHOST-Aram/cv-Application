import React from 'react'

export const Data = ({label, value}) => {
  return (
    <div>
        <h2 className="text-left font-medium">{label}</h2>
        <h3 className="text-left font-light">{value}</h3>
    </div>
  )
}

export default Data