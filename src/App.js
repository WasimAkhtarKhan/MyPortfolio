
import './App.css';
import PersonalDetails from './Components/PersonalDetails';
import Blog from './Components/Blog'
import Skills from './Components/Skills'
import Hobbies from './Components/Hobbies'
import Experience from './Components/Experience';
import Projects from './Components/Projects'
import { render } from '@testing-library/react';



function App() {
  const rowstyle = {
    position: "relative",
    top:"90px",
  }
  return (
    <div className="App">
      <div className='App-header'>  
        <div className='portfolio'>
          <div className="container2">
          <PersonalDetails />
          <div class="row" style={rowstyle}>
            <div class="col-5">
              <Skills />
            <div><Hobbies /></div>
            </div>
            <div class="col-7">
              <Blog />
            <div><Experience /></div>
            </div>
          </div>
          <div><Projects /></div>
          </div>
          <div className="nameTag">Created By <b><u>WasimAkhtarKhan</u></b>-devchallanges.io</div>
        </div>
      </div>
    </div>
  );
}
export default App;
