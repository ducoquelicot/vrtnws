import React from 'react';
import './App.css';
import Tile from "./components/Tile";
import withContext from "./utilities/context/AppContextConsumer";

function App(props) {

  return (
      <React.Fragment>
          <Tile className="Intro" title="database der databases" introduction={true}/>
        <div className="Grid">
          <Tile className="Tile" id="zoek" title="vind een dataset" searchform={true} />
          {Object.keys(props.ctxt.searchResult).length > 0 &&
            <Tile className="Tile" id="resultaten" title="resultaten" results={true}/>        
          }
          <Tile className="Tile" id="upload" title="upload een dataset" uploadform={true}/>
        </div>
      </React.Fragment>
  );
}

export default withContext(App);
