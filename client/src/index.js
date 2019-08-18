import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';

console.log(store);
var persistor = persistStore(store);


ReactDOM.render(
  <Provider store = { store }> 
    <PersistGate loading = {null} persistor = { persistor }>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
