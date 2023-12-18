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




