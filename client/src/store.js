//create redux store
import { createStore, applyMiddleware } from 'redux';
//import combined reducers
import rootReducer from './reducers/rootReducer';
//import persist objects to maintain store state when closed
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';

//redux persist configurations
const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

//persist reducer
const pReducer = persistReducer(persistConfig, rootReducer);

//create redux store and export to use in index.js
var store = createStore(pReducer);

export default store;