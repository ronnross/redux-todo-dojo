import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';
import storeConfig from './store';

let store = createStore(todoApp);

let rootElement = document.getElementById('main');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
