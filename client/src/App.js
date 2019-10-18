import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tile from "./components/Tile";
import withContext from "./utilities/context/AppContextConsumer";

function App(props) {

  return (
      <div className="Grid">
        <Tile title="vind een dataset" searchform={true} />
        {Object.keys(props.ctxt.searchResult).length > 0 &&
          <Tile title="resultaten" results={true}/>        
        }
        <Tile title="upload een dataset" uploadform={true}/>
      </div>
  );
}

export default withContext(App);
