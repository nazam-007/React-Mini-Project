import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setcounter]=useState(10);

  var addValue=() =>{
    //console.log("clicked",counter);
    if(counter + 1 > 20){
      alert("Limit exceed")
    } else {
      setcounter(counter+1)
      console.log(counter);
    }
  }

  var removeValue=() =>{
    //console.log("clicked",counter);
    if(counter-1 < 0){
      alert("Value cannot be negetive")
    } else {
      setcounter(counter-1)
      console.log(counter)
    }
  }
  
//var counter=10;
  return (
    <>
      <h1>Counter project</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue} className='addButton'>Add</button>
      <br />
      <button onClick={removeValue} className='removebutton'>remove</button>
    
    </>
    
  )
}

export default App
