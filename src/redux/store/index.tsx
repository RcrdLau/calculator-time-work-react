import { createStore } from 'redux';
import { Reducers } from '../reducers';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['PersistTest']
}

const persistedReducer = persistReducer(persistConfig, Reducers)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor }