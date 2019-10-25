import React from 'react';
import withContext from "../../utilities/context/AppContextConsumer";

function ResultBox(props) {

    const handleDownload = result_id => {
        return 'http://localhost:5000/api/download/dataset/' + result_id
    }

    const results = props.ctxt.searchResult.results.map((result) =>
        <div key={result.id} className="Result">
            <h3>{result.name}</h3>
            <p>
                {result.source}  |  {result.area}  |  {result.date_obtained}  |  {result.file_type}
                <br />
                {result.tags}
                <br />
                <br />
                <a href={handleDownload(result.id)}>Download</a>
                <a href={result.link}></a>
            </p>
        </div>
    )
    
    return (
        <div>
            <h5>Totaal aantal resultaten: {props.ctxt.searchResult.total} </h5>
            {results}
        </div>
    );
}

export default withContext(ResultBox)