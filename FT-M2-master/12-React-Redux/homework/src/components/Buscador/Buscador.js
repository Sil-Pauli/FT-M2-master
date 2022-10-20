import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {getMovies, addMovieFavorite} from "../../actions" //2.  importamos la action creator get movies
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
   this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies (this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit (e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
         {
          this.props.movies?.map(m =>(
            <div key= {m.imdbID}>
              <Link to={`/movie/${m.imdbID}`}>
            <li>{m.Title}
            </li>
            </Link>
             <button onClick={()=>this.props.addMovieFavorite(m)}>FAV</button> 
            </div>
          ))
         }
        </ul>
      </div>
    );
  }
}
const mapStateToProps=(state) =>{
  return {
    movies: state.moviesLoaded
  };
  //1. creamos el mapStateToProps que recive un estado y devuelve un objeto con una propiedad llAamada movies,  que en el estado global se llama moviesLoaded
}


export default connect (mapStateToProps,  {getMovies, addMovieFavorite}) (Buscador);
//4. conecta el componente buscador y al connect le tenemos que pasar el mapStateToProps y como segundo parametro le pasamos el action creator que queremos despachar
