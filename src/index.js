import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import Home from './containers/Home';
import configureStore from './store/configureStore';

import './styles/app.scss';

const store = configureStore();

render(
    <Provider store={store}>
        <Home/>
    </Provider>
    ,
    document.getElementById('root')
);
