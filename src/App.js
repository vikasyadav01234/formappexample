import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const {firstName, setFirstName} = useState("");
  const {lastName, setLastName} = useState("");
  function changeFirstHandler(event){
    //console.log("Printing Last Name")
    //console.log(event.target.value);
    setFirstName(event.target.value);
  }
  function changeLastHandler(event){
    //console.log("Printing Last Name")
    //console.log(event.target.value);
    
  }
  return (
   <div className='App'>
      <form>
        <input
          type='text'
          placeholder='First Name'
          onChange={changeFirstHandler}
        />
        <br/>
        <input
          type='text'
          placeholder='Last Name'
          onChange={changeLastHandler}
        />
      </form>
   </div>
  ); 
}

export default App;
