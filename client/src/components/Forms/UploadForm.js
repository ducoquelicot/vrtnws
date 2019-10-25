import React from 'react';
import Button from '../Button';
import upload from '../../services/upload';
// import withContext from '../../utilities/context/AppContextConsumer';

class UploadForm extends React.PureComponent {
    constructor(props) {
        super(props)
        this.fileInput= React.createRef()
        this.state={
            "name" : "",
            "area" : "",
            "source" : "",
            "file_type" : "csv",
            "link" : "",
            "date_obtained" : "",
            "tags" : ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const data = {}
        Object.keys(this.state).map(i => data[i] = this.state[i])
        data.file = this.fileInput.current.files[0]
        upload(data)
    }

    handleChange = event => {
        this.setState({
            [event.target.getAttribute('name')] : event.target.value
        })
    }

    render() {
        return(
            <form className="UploadForm" onSubmit={this.handleSubmit}>
            <label>
              Naam
              <br />
              <input
                name="name"
                type="text"
                className="input"
                onChange={this.handleChange} />
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
                onChange={this.handleChange}/>
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
                onChange={this.handleChange}/>
            </label>
            <br />
            <br />
            <label>
              Bestandstype
              <br />
              <select 
                name="file_type" 
                onChange={this.handleChange}
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
                onChange={this.handleChange}/>
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
                onChange={this.handleChange}/>
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
                onChange={this.handleChange}/>
            </label>
            <br />
            <br />
            <input 
                type="file"
                name="file"
                ref={this.fileInput}
            />
            <br />
            <br />
            <Button
                type="submit"
                handleClick={this.handleSubmit}
                label="Upload"
            />
          </form>
        );
    }
}

export default UploadForm