const redux = require('redux'); //requerimosel modulo de redux 

// const createStore = redux.createStore;

const ADD_TODO = 'ADD_TODO' // creamos las constantes 
const REMOVE_TODO = 'REMOVE_TODO'; // creamos las constantes 


const initialState = { // creamos un estado inicial, un objeto '{}'
  todos: [] // con una propiedad 'todos' con un areglo '[]' vacio
}

const rootReducer = (state = initialState, action) => { //creo el reducer 'rootReducer' que es una función con un state que si no contiene nada se inicia con initialState, y una acción
  switch(action.type) { // si la action es un tipo '.type' ADD_TODO
    case ADD_TODO:
      return { // se retorna
        todos: [...state.todos, action.payload] // el estado original/inicial, todos los 'todos' que ya existian y  concatenamos el 'acction.payload'que es lo nuevo 
      }

      //ADD_TODO {type: 'ADD_TODO', payload:'bañarse'}
      //{todos: [ 'blñbsa', 'chskjhc', 'dvcjls']}
      // {todos: [ 'blñbsa', 'chskjhc', 'dvcjls', 'bañarse']} 
    case REMOVE_TODO: // si es el remove_todo
      return {
        todos: state.todos.filter((text, i) => i !== action.payload) // agarramos el estado original  'todos' y le filtramos '.filter' todo lo que sea distinto al action.payload que esten dentro de la action
      }
    default:
      return state; //restorna el state cuando el type es cualquier otro
  }
}
 
const store = redux.createStore(rootReducer); // creamos el store pasando que redicer voy a utilizar 'rootReducer'

store.subscribe(() => { // este archivos de js se suscribe al store y cada vez que tengamos un cambio en un estado, consologea el nuevo estado
  console.log('Subscription: ', store.getState());
});

function addTodo(text) { //action creator
  return { // devuele la accion ADD_TODO  
    type: ADD_TODO,
    payload: text
  }
}

function removeTodo(index) { // action creator 
  return { // devuele la accion REMOVE_TODO 
    type: REMOVE_TODO,
    payload: index
  }
}

store.dispatch(addTodo('Comprar pan')) //anda al 'store' y despacha '.dispatch' un 'addTodo'de comprar pan
store.dispatch(addTodo('Correr')) // lo mismo pero con correr

store.dispatch(removeTodo(1)) // va al 'store' y despacha '.dispatch' un 'removeTodo' en 1

console.log(store.getState()); // finalmente vuelve a consultar por le nuevo estado 