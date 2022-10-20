import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id);
    }

    render() {
        return (
            <div className="movie-detail">
                <h3>{this.props.movies.Title}</h3>
                <p>{this.props.movies.Plot}</p>
            </div>
        );
    }
}

 const mapStateToProps=(state) =>{
    return {
      movies: state.movieDetail
    };
 }
export default connect (mapStateToProps, { getMovieDetail} )(Movie);