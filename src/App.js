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


  const [formData, setFormData] = useState ( {firstName:"", lastName:"", email:"", comments:"",
   isVisible:true, mode:"", favCar:""} );
  console.log(formData);
  function changeHandler(event){
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
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
        <br/>
        <input
          type='text'
          placeholder='Last Name'
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br/>
        <br/>
        <input 
          type='email'
          placeholder='Enter your E-Mail here'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />
        <br/>
        <br/>
        <textarea
          placeholder='Enter Your Comments Here'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />

        <br/>
        <br/>
        <input
          type="checkbox"
          onChange={changeHandler}
          name='isVisible'
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I Visible ?</label>

        <br/>
        <br/>
        <fieldset>
          <legend>Mode:</legend>
          <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Online-Mode"
          id='Online-Mode'
          checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor='Online-Mode'>Online-Mode</label>
        <br/>
        <br/>
        <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Offline-Mode"
          id='Offline-Mode'
          checked={formData.mode === "Offline-Mode"}
        />
        <label htmlFor='Offline-Mode'>Offline-Mode</label>
        </fieldset>


        
        <label htmlFor='favCar'>Tell me your Favorite Car </label>
        
        <select
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}

        >     
        <option value="scarpio">Scarpio</option>
        <option value="fartuner">Fartuner</option>
        <option value="thar">Thar</option>
        <option value="Legender">Legender</option>
        <option value="defender">Defender</option>          
        </select>   
    
      </form>
   </div>
  ); 
}

export default App;
