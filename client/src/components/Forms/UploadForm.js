import React from 'react';
import Button from '../Button';
import upload from '../../services/upload';
import withContext from '../../utilities/context/AppContextConsumer';

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
          "tags" : "",
          inputKey: Date.now(),
          message: ""
      }
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.props.ctxt.setStatus({"status": "uploading"})
    const data = {}
    Object.keys(this.state).map(i => data[i] = this.state[i])
    data.file = this.fileInput.current.files[0]
    const uploadStatus = await upload(data)
    this.props.ctxt.setStatus(uploadStatus)
    this.setState({
      'name': '', 'area': '', 'source': '', 'file_type': '', 'link': '', 'date_obtained': '', 'tags': '', inputKey: Date.now()
    })

    if (this.props.ctxt.uploadStatus.status == 'uploading') {
      this.setState({
        message: "Dataset wordt geupload..."
      })
    } else if (this.props.ctxt.uploadStatus.status == 'success') {
      this.setState({
        message: "Dataset is succesvol geüpload."
      })
    } else {
      this.setState({
        message: "Er is iets misgegaan, probeer later opnieuw."
      })
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.getAttribute('name')] : event.target.value.toLowerCase()
    })
  }

  render() {
    return(
      <React.Fragment>

        {this.state.message !== "" &&
          <div id="status">
            {this.state.message}
          </div>
        }

        <form className="UploadForm" onSubmit={this.handleSubmit}>
        <label>
          Naam
          <br />
          <input
            name="name"
            type="text"
            value={this.state.name}
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
            value={this.state.area}
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
            value={this.state.source}
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
            value={this.state.link}
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
            value={this.state.date_obtained}
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
            value={this.state.tags}
            className="input"
            onChange={this.handleChange}/>
        </label>
        <br />
        <br />
        <input 
            type="file"
            key={this.state.inputKey}
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
      </React.Fragment>
    );
  }
}

export default withContext(UploadForm)