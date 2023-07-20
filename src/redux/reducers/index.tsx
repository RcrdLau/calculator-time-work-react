
import { combineReducers } from 'redux';
import { estadoExemplo } from './estadoExemplo';
import { persistTesteReducer } from './persistTesteReducer';

export const Reducers = combineReducers({
    Exemplos: estadoExemplo,
    PersistTest: persistTesteReducer,
   
});