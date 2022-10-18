import axios from 'axios'; 
// tenemos las axions

export function increment() {
  return {
    type: 'INCREMENT',
  }
};
export function decrement() {
    return {
      type: 'DECREMENT',
  };
};
export function reset() {
  return {
    type: 'RESET',
  }
}

export function getPost() {
  return {
    type: 'GET_POST',
  }
}

export function receivePost(post) {
  return {
    type: 'RECEIVE_POST',
    post
  }
}
 
export function fetchPost(valor) {
  return function (dispatch) {  //retorna una funcion que tiene el dispatch como parametro
    dispatch(getPost()); // es el 'cargando' de los datos
    axios.get(`https://jsonplaceholder.typicode.com/todos/${valor}`) //hace un get, busca los datos en el servidor con el valor de lo que este 
      .then(r => r.data) // obtiene los datos 
      .then(d => dispatch(receivePost(d))) // y una vez obtenidos los despacha. -(d) es la respuesta que pasa el servidor 
      .catch(e => console.log(e)); // .catch es una promesa, si algo de lo anterior no se cumple pasa al catch 
  }
}