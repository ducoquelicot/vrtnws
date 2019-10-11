import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import useForm from "./hooks/useForm.js";
import Tile from "./components/Tile";
import { AppContextProvider } from "./utilities/context/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <div className="Grid">
        <Tile title="vind een dataset" searchform={true} />
        <Tile title="upload een dataset" uploadform={true}/>
      </div>
    </AppContextProvider>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
