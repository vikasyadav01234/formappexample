import logo from './logo.svg';
import './App.css';

function App() {
  function changeHandler(event){
    console.log(event.target.value);
  }
  return (
   <div className='form'>
      <form>
        <input
          type='text'
          placeholder='First Name'
          onChange={changeHandler}
        />
      </form>
   </div>
  ); 
}

export default App;
