import React, { useState } from 'react'
import Input from './input'
import SubmitBtn from './submit-button'

export const WorkExperience = () => {
    // Work Exp Sate
    const [workExp, setWorkExp] = useState({})

    // Work Exp properties
    const [company, setCompany] = useState('');const [jobTitle, setJobTitle] = useState('');
    const [role, setRole] = useState('');const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const submit = (e) => {
        e.preventDefault()

        // Create Object
        setWorkExp({...workExp, company: company, jobTitle: jobTitle, role: role, startDate: startDate, endDate: endDate} )
        console.log(workExp)
        // Reset states
        setCompany(''); setJobTitle(''); setRole(''); setStartDate(''); setEndDate('')
    }

  return (
    <form onSubmit={(e) => submit(e)} className='container text-left'>
        <h2 className="text-center font-light">Work Experience</h2>
        <Input handleChange={(e) => setCompany (e.target.value)} value={company} type= 'text' label= 'Company' />
        <Input handleChange={(e) => setJobTitle (e.target.value)} value={jobTitle} type= 'text' label= 'Job Title' />
        <Input handleChange={(e) => setRole (e.target.value)} value={role} type= 'text' label= 'Role' />
        <Input handleChange={(e) => setStartDate (e.target.value)} value={startDate} type= 'date' label= 'Start Date' />
        <Input handleChange={(e) => setEndDate(e.target.value)} value={endDate} type= 'date' label= 'End Date' />
        <SubmitBtn />
    </form>
  )
}

export default WorkExperience