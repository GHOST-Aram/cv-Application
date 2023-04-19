import React, { useState } from 'react'
import Input from '../input'
import SubmitBtn from '../submit-button'
import EditButton from '../edit-button'
import Data from '../data'

export const WorkExperience = () => {
    // Display State Controller
    const [isSaved, setIsSaved] = useState(false)
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

        // Reset states
        setCompany(''); setJobTitle(''); setRole(''); setStartDate(''); setEndDate('')

        // Set as saved 
        setIsSaved(!isSaved)
    }

  return (
    <>
    { !isSaved ?
        <form onSubmit={(e) => submit(e)} className='container text-left'>
            <h2 className="text-center font-light">Work Experience</h2>
            <Input handleChange={(e) => setCompany (e.target.value)} value={company} type= 'text' label= 'Company' />
            <Input handleChange={(e) => setJobTitle (e.target.value)} value={jobTitle} type= 'text' label= 'Job Title' />
            <Input handleChange={(e) => setRole (e.target.value)} value={role} type= 'text' label= 'Role' />
            <Input handleChange={(e) => setStartDate (e.target.value)} value={startDate} type= 'date' label= 'Start Date' />
            <Input handleChange={(e) => setEndDate(e.target.value)} value={endDate} type= 'date' label= 'End Date' />
            <SubmitBtn />
        </form>
        :
        <div className='container-2 text-left'>
            <h2 className="font-light text-center py-8">Education Experience</h2>
            <div className='grid grid-3 gap-8 py-8'>
            <Data label='Company' value={workExp.company}/><Data label='Job Title' value={workExp.jobTitle}/><Data label='Role' value={workExp.role}/>
            <Data label='StartDate' value={workExp.startDate}/><Data label='End Date' value={workExp.endDate}/>
            </div>
            <EditButton />
        </div>
    }
    </>
  )
}

export default WorkExperience