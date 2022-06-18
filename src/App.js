import './App.css';
import { useState } from "react";



function App() {

  const [color, setColor] = useState("orange");
  const [count, setCount] = useState(0);

  let changeColor = () => {
    /*setColor() updates "color" from "orange" to "document.getElementById("inputBox").value"*/
    setColor(document.getElementById("inputBox").value); 
  }

  let findColor = () => {
    console.log(color);
  }

  let decreaseByOne = () => {
    /*setCount() decreases "count" from "count = 0" to "count = prevCount - 1" */
    setCount((prevCount) => prevCount - 1)
  }

  let increaseByOne = () => {
    /*setCount() increases "count" from "count = 0" to "count = prevCount + 1"*/
    setCount((prevCount) => prevCount + 1)
  }




  return (
    <div className="Body" style={{textAlign: "center"}}>
      <input id="inputBox" type="text"></input>
      <button onClick={changeColor}>Change Color</button>
      <p>{color}</p>
      <button onClick={findColor}></button>



      <button onClick={decreaseByOne}>-</button>
      <p>{count}</p>
      <button onClick={increaseByOne}>+</button>
    </div>
  );
}

export default App;

/*
Task #1: Using useState(), when a button is clicked, update
variable value from "orange" to "blue"
*/