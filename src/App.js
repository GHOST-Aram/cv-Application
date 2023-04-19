import './App.css';
import Footer from './components/footer';
import GeneralForm from './components/general-info/general-form';
import Header from './components/header';
import EducationForm from './components/education-info/education-form';
import WorkExperience from './components/work-info/work-experience';
function App() {

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
