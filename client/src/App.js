import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import useForm from "./hooks/useForm.js";

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
    console.log({search})
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
 const { values, handleChange, handleSubmit } = useForm(Upload);

  function Upload() {
    console.log(values);
  }

  return (
    <form className="UploadForm" onSubmit={handleSubmit}>
      <label>
        Naam
        <br />
        <input
        name="name"
        type="text"
        className="input"
        onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Gebied
        <br />
        <input
        name="area"
        type="text"
        className="input"
        onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Bron
        <br />
        <input
        name="source"
        type="text"
        className="input"
        onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Bestandstype
        <br />
        <select 
          name="file_type" 
          onChange={handleChange}
        >
          <option value="csv">csv</option>
          <option value="json">json</option>
          <option value="pdf">pdf</option>
          <option value="kml">kml</option>
          <option value="xlsx">xlsx</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        Link
        <br />
        <input
        name="link"
        type="text"
        className="input"
        onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Legenda aanwezig
        <br />
        <select
          name="dictionary"
          onChange={handleChange}
        >
          <option value="True">Ja</option>
          <option value="False">Nee</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        Downloaddatum
        <br />
        <input
        name="date_obtained"
        type="text" 
        className="input"
        onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Gecontroleerd op fouten
        <br />
        <select
          onChange={handleChange}
          name="clean"
        >
          <option value="True">Ja</option>
          <option value="False">Nee</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        Tags (scheiden met komma)
        <br />
        <input 
        name="tags"
        type="text"
        className="input"
        onChange={handleChange}/>
      </label>
      <br />
      <br />
      <label>
        Bestand uploaden
        <br />
        <br />
        <input 
        type="file"
        name="file"
        onChange={handleChange}/>
      </label>
      <br />
      <br />
      <Button
      type="submit"
      handleClick={handleSubmit}
      label="Upload"
      />
      <br />
      <br />
    </form>
  )
}

function Tile(props) {
  return (
    <div className="Tile">
      <h1>{props.title}</h1>
      {props.searchform && <SearchForm />}
      {props.uploadform && <UploadForm />}
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
