import './App.css';
import Footer from './components/footer';
import GeneralForm from './components/general-form';
import Header from './components/header';
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
      <Header />
      <main className='py-8'>
        <GeneralForm />
        <EducationForm />
        <WorkExperience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
