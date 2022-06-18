import React from "react";
import ReactDOM from 'react-dom/client';

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
Step 1) Index.js
  1) Create Index.js
  2) Type: 
    import React from "react";
    import ReactDOM from 'react-dom/client';
    import App from "./App";
  3) Type: 
      const root = ReactDOM.createRoot(document.getElementById('root'));

      root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
Step 2) App.js
  1) Create App.js
  2) Type: 
    import React from 'react'

    const App = () => {
      return (
        <div>App</div>
      )
    }
    export default App

Result: Index.js will make <div id="root"></div> in Index.html display <App /> in App.js
*/