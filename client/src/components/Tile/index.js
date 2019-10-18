import React from 'react';
import SearchForm from "../Forms/SearchForm"
import UploadForm from "../Forms/UploadForm"
import ResultBox from "../Display/ResultBox"

function Tile(props) {
    return (
      <div className="Tile">
        <h1>{props.title}</h1>
        {props.searchform && <SearchForm />}
        {props.uploadform && <UploadForm />}
        {props.results && <ResultBox />}
      </div>
    );
  }

export default Tile