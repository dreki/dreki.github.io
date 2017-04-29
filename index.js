
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(ReduxThunk));
const rootEl = document.querySelector('.js-root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);