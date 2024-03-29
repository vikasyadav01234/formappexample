import logo from './logo.svg';
import './App.css';

function App() {
  function changeFirstHandler(event){
    console.log(event.target.value);
  }
  return (
   <div className='App'>
      <form>
        <input
          type='text'
          placeholder='First Name'
          onChange={changeFirstHandler}
        />
      </form>
   </div>
  ); 
}

export default App;
