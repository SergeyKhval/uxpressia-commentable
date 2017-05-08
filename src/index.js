import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './modules/Home';
import configureStore from './store/configureStore';

import './styles/app.scss';

const store = configureStore();

injectTapEventPlugin();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Home/>
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);
