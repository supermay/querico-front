import React, { Component } from 'react';

import Background from './components/Background';
import Navigation from './components/Navigation';

import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/theme';

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Navigation />
           <Background/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
