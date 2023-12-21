
//!ASSIGNMENT:
/*
 import { useState } from "react";



 const App = () => {

   const [isClicked, setIsClicked] = useState(0);

   const handleClick = () => {
     setIsClicked(!isClicked);
   }

     return(
       <button onClick={handleClick}>
 {isClicked ? 'Clicked': 'Click Me'}
       </button>
     );
 }

 export default App
*/

//!ClassCOde 1 :
/*
 import { useState } from "react";


 const App = () => {

 const [counter, setCounter] = useState(0);

 return (

   <div>
   <div>{counter}</div>
   <button onClick={() => setCounter(counter+1)}>
     plus
     </button>

   <button onClick={() => setCounter(0)}>
     zero
   </button>
   </div>
   )
 }

 export default App
*/

//! CODE 2
import { useState } from "react";

const App = () =>{
  const [ counter , setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter+1)

  const decreaseByOne = () => setCounter(counter-1)

  const setTOZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={decreaseByOne}>
        Minus
      </button>
      <button onClick={setTOZero}>
        zero
      </button>
    </div>
  )
}

export default App


//! EG CODE 3