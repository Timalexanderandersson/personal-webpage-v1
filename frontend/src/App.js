
import AboutMe from './components/Aboutme'
import Myprojectscomp from './components/Myprojects'
import SkillsSection from './components/Skillssection'
import Footer from './components/Footer';
import SendingEmail from './components/sendingemail';
import Allaboutbio from './components/Allaboutme';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <div className='leftcontainer'>
        <AboutMe />
      </div>

      <div className='rightcontainer'>
        <Routes>
          {/* Startsidan */}
          <Route path="/" element={
            <>
              <Allaboutbio />
              <Myprojectscomp />
              <SkillsSection />
              <Footer />
            </>
          } />

          {/* Kontakt sidan */}
          <Route path="/kontakt" element={ <>
          <SendingEmail />
          <Footer /></>} />
        </Routes>
        
      </div>
      
    </div>
    
  </Router>
    
  );
}

export default App;
