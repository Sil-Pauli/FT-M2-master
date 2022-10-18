import { createStore, applyMiddleware } from 'redux'; // 4. el applyMiddleware es una function de redux
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk' // 3. se usa el thunk middleware para buscar en el servidor - el redux-thunk se instala con npm redux-thunk

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // 1- te muestra en coloa lo que esta pasnado
  applyMiddleware(thunkMiddleware), // 2 - hacer el reques al servidor (buscar en el servidor) 
);

export default store;
 