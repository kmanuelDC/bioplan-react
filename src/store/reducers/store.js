import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { colaboradoresReducer } from './colaboradoresReducer';
import { noticiasReducer } from './noticiasReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    colaboradores:colaboradoresReducer,
    noticias: noticiasReducer
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
