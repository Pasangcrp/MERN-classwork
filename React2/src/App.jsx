 //!1.DESTRUCTURING

 /*
  const Hello = ({name, age}) => {
   return <h1>Hello, {name} age: {age}</h1>
 
  }

 const App = () => {
   const name= 'Ram';
   const age = 25;

   return (
     <div>
     <h1>Grettings</h1>
     <Hello name='George' age={26+25} />
     <Hello name={name} age={age} />
     </div>
   )
 }
 export default App
*/

//!2. Stateful Component
import { useState } from "react";

const App = () => {

  const [counter, setCounter] = useState(0)

  setTimeout(
    ()=> setCounter(counter + 1),
    1000
  )

  return <div>{counter}</div>
}

export default App