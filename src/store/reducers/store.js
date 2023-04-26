import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { colaboradoresReducer } from "./colaboradoresReducer";
import { noticiasReducer } from "./noticiasReducer";
import { proyectosReducer } from "./proyectosReducer";
import { contactosReducer } from "./contactosReducer";
import { cargoReducer } from "./cargoReducer";
import { areaReducer } from "./areaReducer";
import { convocatoriasReducer } from "./convocatoriasReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  colaboradores: colaboradoresReducer,
  noticias: noticiasReducer,
  proyectos: proyectosReducer,
  contactos: contactosReducer,
  cargo: cargoReducer,
  area: areaReducer,
  convocatorias: convocatoriasReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
