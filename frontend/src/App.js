
import AboutMe from './components/Aboutme'
import Myprojectscomp from './components/Myprojects'
import SkillsSection from './components/Skillssection'
import Navbar from './components/navbar'
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Myprojectscomp />
      <SkillsSection />
      <Footer />
    </div>
  );
}

export default App;
