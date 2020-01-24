import React from 'react';
import withContext from "../../utilities/context/AppContextConsumer";

function ResultBox(props) {

    const handleDownload = result_id => {
        return `${process.env.REACT_APP_API}/api/download/dataset/${result_id}`
    }

    const results = props.ctxt.searchResult.results.map((result) =>
        <div key={result.id} className="Result">
            <hr />
            <h3>{result.name}</h3>
            <p>
                <b>Bron</b>: {result.source}
                <br />
                <b>Gebied</b>: {result.area}
                <br />
                <b>Verkregen</b>: {result.date_obtained}
                <br />
                <b>Bestandstype</b>: {result.file_type}
                <br />
                <b>Tags</b>: {result.tags}
                <br />
                <br />
                <a href={handleDownload(result.id)}>Download</a>
                <a href={result.link}></a>
            </p>
        </div>
    )

    return (
        <div>
            <h5>{props.ctxt.searchResult.total != 1 ? 'resultaten' : 'resultaat'}</h5>
            {results}
        </div>
    );
}

export default withContext(ResultBox)