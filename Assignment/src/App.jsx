//!ASSIGNMENT 2
import { useState } from "react";

const App = () =>{
    const [reset,setReset] = useState(0)
    const [left,setLeft] = useState(0)
    const [right,setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left+1)
    }
  
    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right+1)
    }
    const handleResetClick = () => {
        setLeft(0)
        setRight(0)
        setReset(reset+1)
        
    }
    const handleClearClick = () => {
        setLeft(0)
        setRight(0)
        setReset(0)
    }
  

    return(
        <div>
            <h1>{left}</h1>
            <button onClick={handleLeftClick}>
                plus
            </button>
            <br />
            <h1>{right}</h1>
            <button onClick={handleRightClick}>
                Minus
            </button>

            <br />
            <h1>{reset}</h1>
    
            <button onClick={handleResetClick}>
                reset
            </button>
            <br />
            <button onClick={handleClearClick}>
                clear
            </button>
            <p>{allClicks.join('-')}</p>
        </div>
    )

}

export default App

