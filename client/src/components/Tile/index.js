import React from 'react';
import SearchForm from "../Forms/SearchForm"
import UploadForm from "../Forms/UploadForm"

function Tile(props) {
    return (
      <div className="Tile">
        <h1>{props.title}</h1>
        {props.searchform && <SearchForm />}
        {props.uploadform && <UploadForm />}
      </div>
    );
  }

export default Tile