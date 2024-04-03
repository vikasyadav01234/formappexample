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
    // setLastName(event.target.value);
  //}


  const [formData, setFormData] = useState ( {firstName:"", lastName:"", email:""} );
  
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
          value={formData.firstName}
        />
        <br/>
        <input
          type='text'
          placeholder='Last Name'
          onChange={changeHandler}
          name="lastName"
        />
        <br/>
        <br/>
        <input 
          type='email'
          placeholder='Enter your E-Mail here'
          onChange={changeHandler}
          name='email'
        />
      </form>
   </div>
  ); 
}

export default App;
