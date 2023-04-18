import './App.css';
import GeneralForm from './components/general-form';
import EducationForm from './components/education-form';
import WorkExperience from './components/work-experience';
import { useState } from 'react';
function App() {
  // General information
  const [generalInfo, setGeneralInfo] = useState({})

  // Education
  const [educationExp, setEductationExp] = useState({})

  //Work Exp
  const [workExp, setWorkExp] = useState({})

  
  return (
    <div className="App">
      <GeneralForm />
      <EducationForm />
      <WorkExperience />
    </div>
  );
}

export default App;
