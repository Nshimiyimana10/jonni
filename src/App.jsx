import logo from './logo.svg';
import './App.css';
import Dukundane from './homePage';

function App() {
  return (
    <div className="App">
        <h1 className='text-primary'>How to learn react js!</h1>

        <Dukundane/>
         <p className='text-warning' style={{fontSize:"25px"}}>
          Hello Joanes! Are you ok?
        </p> 

        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Here
        </a>

      </header>
    
   
      </div>
      
  );
}

export default App;
