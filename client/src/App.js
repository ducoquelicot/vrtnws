import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function Button(props) {
  return (
    <button className="Button" onClick={props.handleClick}>
      {props.label}
    </button>
  );
}

function SearchForm() {
  const [search, setSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log('You submitted your search')
    // api(search);
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
      type="text"
      name="search"
      className="input"
      onChange={event => setSearch(event.target.value)}
      />
      <Button
      type="submit"
      handleClick={handleSubmit}
      label="Zoek"
      />
    </form>
  )
}

function UploadForm() {
//  const [data, setData] = useState("");

  return (
    <form>
      <label>
        Naam
        <input
        name="Name"
        type="text"
        className="input" />
      </label>
      <br />
      <label>
        Gebied
        <input
        name="Area"
        type="text"
        className="input" />
      </label>
      <br />
      <label>
        Bron
        <input
        name="Source"
        type="text"
        className="input" />
      </label>
      <br />
      <label>
        Bestandstype
        <input
        name="FileType" />
      </label>
    </form>
  )
}

function Tile(props) {
  return (
    <div className="Tile">
      <h1>{props.title}</h1>
      {props.searchform && <SearchForm />}
    </div>
  );
}

function App() {
  return (
    <div className="Grid">
      <Tile title="vind een dataset" searchform={true} />
      <Tile title="upload een dataset" uploadform={true}/>
    </div>
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
