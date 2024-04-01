import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

 // const {firstName, setFirstName} = useState("");
  //const {lastName, setLastName} = useState("");

//  console.log(firstName);
  //console.log(lastName);
  //function changeFirstHandler(event){
    //console.log("Printing Last Name")
    //console.log(event.target.value);
    //setFirstName(event.target.value);
 // }
  //function changeLastHandler(event){
    //console.log("Printing Last Name")
    //console.log(event.target.value);
    //setLastName(event.target.value);
  //}


  const [formData, setFormData] = useState ( {firstName:"", lastName:""});

  function changeHandler(event){
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    });
  }
  return (

   <div className='App'>
   
      <form>
        <input
          type='text'
          placeholder='First Name'
          onChange={changeHandler}
          name="firstName"
        />
        <br/>
        <input
          type='text'
          placeholder='Last Name'
          onChange={changeHandler}
          name="lastName"
        />
      </form>
   </div>
  ); 
}

export default App;
