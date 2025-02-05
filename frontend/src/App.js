
import AboutMe from './components/Aboutme'
import Myprojectscomp from './components/Myprojects'
import SkillsSection from './components/Skillssection'
import Footer from './components/Footer';
import Resumecont from './components/resume'
import SendingEmail from './components/sendingemail';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='leftcontainer'>
      <AboutMe />
      </div>
      <div className='rightcontainer'>
      <Myprojectscomp />
      <SkillsSection />
      <Resumecont/>
      <SendingEmail />
      <Footer />
      </div>
    </div>
  );
}

export default App;
