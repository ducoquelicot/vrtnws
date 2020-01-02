import React from 'react';
import initialContext from './InitialContext';

const AppContext = React.createContext();

class AppContextProvider extends React.PureComponent {
  constructor() {
    super()
    this.state = {
        setSearchResult : this.setSearchResult,
        setStatus : this.setStatus,
        ...initialContext
    };
  }

  setSearchResult = value => {
      this.setState({searchResult : value})
  }

  setStatus = value => {
    this.setState({uploadStatus : value})
  }

  render() {
    console.log('context', this.state);

    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppContextProvider }

