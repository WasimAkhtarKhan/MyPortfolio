
import './App.css';
import PersonalDetails from './Components/PersonalDetails';
import Blog from './Components/Blog'
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
            <div class="col-5">FrontEnd</div>
            <div class="col-7"><Blog /></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
