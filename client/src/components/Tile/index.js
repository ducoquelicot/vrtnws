import React from 'react';
import SearchForm from "../Forms/SearchForm"
import UploadForm from "../Forms/UploadForm"
import ResultBox from "../Display/ResultBox"
import Intro from "../Display/Introduction"

function Tile(props) {
    return (
      <div className={props.className} id={props.id}>
        <h1>{props.title}</h1>
        {props.searchform && <SearchForm />}
        {props.uploadform && <UploadForm />}
        {props.results && <ResultBox />}
        {props.introduction && <Intro />}
      </div>
    );
  }

export default Tile