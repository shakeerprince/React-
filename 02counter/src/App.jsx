import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  //let counter = 5;


const addValue = () =>{
  counter = counter + 1;
  if(counter > 20){
    counter = "can't be more than 20"
    
  }
 
  setCounter(counter)
  
}

const removeValue = () =>{
  counter = counter -1;

  if(counter <0 ){
     counter = "cannot be less than 0 "
  }
  setCounter(counter)
}
 
  
 

  return (
    <>
    <h1>Shaker prince</h1>
    <h1>Counter Value: {counter}</h1>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Remove</button>
    </>
  )
}

export default App
