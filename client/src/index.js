import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
reportWebVitals();
