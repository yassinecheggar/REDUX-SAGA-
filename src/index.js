import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore , applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import all_reducers from './Reducers'
import createSagaMiddleware from '@redux-saga/core';
import { watch_add } from './Sagas/saga'
const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = [applyMiddleware(sagaMiddleware) ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];

const store = createStore(all_reducers ,compose(...composeEnhancer));

sagaMiddleware.run(watch_add);

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


