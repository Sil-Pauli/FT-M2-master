import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index"; // importa el reducer index.js ./reducers
import thunk from "redux-thunk"; //importa el redux-thunk que es para hacer las action creator que tiene codigo ascincronico adentro

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ||compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// window.REDUX_DEVTOOLS_EXTENSION
export default store;