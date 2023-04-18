import './App.css';
import GeneralForm from './components/general-form';
import EducationForm from './components/education-form';
import WorkExperience from './components/work-experience';
function App() {
  return (
    <div className="App">
      <GeneralForm />
      <EducationForm />
      <WorkExperience />
    </div>
  );
}

export default App;
