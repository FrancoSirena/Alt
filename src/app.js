import React from 'react';
import ReactDOM from 'react-dom';
import Locations from './components/Location';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
  <Locations />
  </MuiThemeProvider> ,
  document.getElementById('ReactApp'))