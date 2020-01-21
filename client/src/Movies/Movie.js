import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import MovieCard from "./MovieCard";
import UpdateMovie from './UpdateMovie';

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  deleteMovie = (e, id) => {
    e.preventDefault()
    if(window.confirm('Are you sure you want to delete this user?')){
      axios.delete(`http://localhost:5000/api/movies/${id}`)
      .then(res=> console.log('delete: ', res))
      .catch(err=>console.log(err))
    }
  };

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <Link to={`/update-movie/${this.state.movie.id}`} className='edit-button'>Edit</Link>
        <button to={`/`}className='delete-button' onClick={this.deleteMovie}>Delete</button>
      </div>
    );
  }
}
