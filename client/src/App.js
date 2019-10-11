import React from 'react';
// import logo from './logo.svg';
import './App.css';
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

export default App;
