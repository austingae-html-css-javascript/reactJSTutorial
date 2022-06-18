import React from 'react'

import "./App.css"

const App = () => {
  return (
    <main>
      <div className="calculator-container">
        <div className="output">
          <div className='previous-operand'>200</div>
          <div className='current-operand'>138</div>
        </div>
        <div className='calculator-grid'>
          <button className='span-two'>AC</button>
          <button>DEL</button>
          <button>÷</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>*</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
          <button>.</button>
          <button>0</button>
          <button className='span-two'>=</button>
        </div>
      </div>
    </main>
  )
}

export default App

/* 
  1) Mobile First Approach
  2) Create the HTML layout
  <section>
    <div class="container">
    </div>
  </section>
  3) Create the HTML elements
  4) Decorate the HTML elements
    1) Imagine how you want it to look like.
    2) Then use width, padding, border, and margin.
    3) Then calculate: 
        If * {box-sizing: content-box}
        - Parent Div's Width = Child Div's Width+Padding+Border+Margin
        - Parent Div's Width = Block Element's Width+Padding+Border+Margin
        - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
*/