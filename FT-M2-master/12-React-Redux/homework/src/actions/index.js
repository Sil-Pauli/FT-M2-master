// lo ideal es crear una constante    export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export function addMovieFavorite(payload) {  //action creator, una funcion que retorna un objeto
    return { 
        type: "ADD_MOVIE_FAVORITE", 
        payload //payload --> pelicula a agregar a favorito
    };
  };
  
  export function getMovies(titulo) { // action creator, que llama a un servidor (asincronico) cambia la sintaxis
    return function(dispatch) { // retorna una funcion que recibe el dispatch (equivalente a store.dispatch())
       fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=4be4be45&s=" + titulo ) // buscar en fetch o cualquier otra libreria el servidor + el titulo de la peli
        .then(response => response.json()) // ejecutamos el metodo .json para quedarnos con los datos y no los metadatos // response trae todos los datos de la metadata, solo necesitamos los de .json
        .then(json => { // una vez que tenemos los datos 
          dispatch({ type: "GET_MOVIES", 
          payload: json }); // los despachamos 
        });
    };
  };

  export function removeMovieFavorite (idMovie){ 
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload: idMovie
    };
  };
export function getMovieDetail (idMovie){
    return function (dispatch) {
        fetch(`http://www.omdbapi.com/?apikey=4be4be45&i=${idMovie}`)
        .then (response => response.json())
        .then (json =>{
          dispatch ({ type: 'GET_MOVIES_DETAIL', 
          payload: json})
        })
    }; 
  };