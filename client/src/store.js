//create redux store
import { createStore } from 'redux';
//import combined reducers
import rootReducer from './reducers/rootReducer';
//import persist objects to maintain store state when closed
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

//redux persist configurations
const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

//persist reducer
const pReducer = persistReducer(persistConfig, rootReducer);

//create redux store and export to use in index.js
var store = createStore(pReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;