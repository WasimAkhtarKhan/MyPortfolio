
import './App.css';
import PersonalDetails from './Components/PersonalDetails';
import Blog from './Components/Blog'
import { render } from '@testing-library/react';


function App() {
  return (
    <div className="App">
      <div className='App-header'>  
        <div className='portfolio'>
          <div className="container2">
          <PersonalDetails />
          <div class="row">
            <div class="col-4">col-4</div>
            <div class="col-8"><Blog /></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
