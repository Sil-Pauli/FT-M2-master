const initialState = {  //estado inicial 
    moviesFavourites: [], //listado de pelis fav
    moviesLoaded: [], // listado de pelis
    movieDetail: {} // los detalles de una peli
  };

  function rootReducer(state = initialState, action) { 
    // creamos el reducer, que es una funcion 
    //y le pasamos dos parametros:
    // el estado/state: que si no tiene nada (vacio) es = al estado inicial 
    // y la action: que son 4 que declaramos en el index.js de la carpeta ./actions 
    if (action.type === "ADD_MOVIE_FAVORITE") { // si el tipo action es = a "ADD_MOVIE_FAVORITE"
        return { // retorna/ devolve un nuevo estado
          ...state, // que tenga todo los datos 
          moviesFavourites: state.moviesFavourites.concat(action.payload) //y le modificamos el moviesFavourites
          // al stete le concatena  la  movieFavourite
        };
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search // en el arreglo de pelis guardame la peli (.search por que en la API la info esta en ese lugar)
        };
    }
    if (action.type === "REMOVE_MOVIE_FAVORITE") {
        return { // retornamos un nuevo estado
            ...state, // copiamos todo
            moviesFavourites: state.moviesFavourites.filter (m => m.imdbID !== action.payload)
            // lo que queremos modificar es el movieFavourite
            // me paro en state.moviesFavourites el valor actual donde tenemos las pelis favoritas y le agregamos el .filter (las filtramos) 
            // m=>     pasa las pelis
            // m.imdbID    sale del Api 
            // !== action.payload       distintas al ID que le pasamos 
        };
    }
    if (action.type === 'GET_MOVIES_DETAIL' ){
    return {
        ...state,
        movieDetail: action.payload // modificamos solo movieDetail 
      };
    }
    return state;
  }


  
  export default rootReducer;// se exporta la funcion reducer, para poder utilizarla en otro lugar