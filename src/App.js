import './App.css';
import Footer from './components/footer';
import GeneralInfo from './components/general-info/general-info';
import Header from './components/header';
import EducationInfo from './components/education-info/education-info';
import WorkExperience from './components/work-info/work-experience';
function App() {

  return (
    <div className="App">
      <Header />
      <main className='py-8'>
        <GeneralInfo />
        <EducationInfo />
        <WorkExperience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
