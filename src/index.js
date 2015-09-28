import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// Redux utility functions
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import App from './containers/App';
import todoApp from './reducers';

const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(todoApp);

if (module.hot) {
  module.hot.accept('./reducers', () =>
    store.replaceReducer(combineReducers(require('./reducers')))
  );
}

export default class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <App />
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor}
                    visibleOnLoad={false} />
        </DebugPanel>
      </div>
    );
  }
}

let rootElement = document.getElementById('main');
ReactDOM.render(
  <Root />,
  rootElement
);
