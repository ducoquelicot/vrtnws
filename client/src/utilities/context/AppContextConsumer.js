import React from 'react';
import { AppContext } from "./AppContextProvider";

const withContext = Component => {
  class AppContextConsumer extends React.PureComponent {

    render() {
      return (
        <AppContext.Consumer>
          {context => <Component ctxt={context} {...this.props} />}
        </AppContext.Consumer>
      );
    }
  }

  return AppContextConsumer;
};

export default withContext;

