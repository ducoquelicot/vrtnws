import React from 'react';
import Button from "../Button";
import search from "../../services/search";
import withContext from "../../utilities/context/AppContextConsumer";

class SearchForm extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state={
            search : ""
        }
    }

    // componentDidMount = () => {
    //     console.log(this.props.context)
    // }

    handleSubmit = async event => {
        event.preventDefault();
        const result = await search(this.state.search)
        this.props.ctxt.setSearchResult(result)
    }

    changeSearch = event => {
        this.setState({search : event.target.value})
    }

    render() {
        return(
            <form className="SearchForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="search"
                    className="input"
                    onChange={this.changeSearch}
                />
                <Button
                    type="submit"
                    handleClick={this.handleSubmit}
                    label="Zoek"
                />
            </form>
        );
    }
}

export default withContext(SearchForm)