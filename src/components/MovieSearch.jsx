import React from 'react'
import './MovieSearch.css';
function MovieSearch({details}) {
  return (
    <div className="movies-container">
      {details.map((movie, index) => {
        return (
          <div key={index} className="movie-card">
            <img src={movie.Poster} alt="movie poster" className="movie-poster"/>
            <div className="movie-info">
              <h2 className="movie-title">{movie.Title}</h2>
              <p className="movie-year">{movie.Year}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MovieSearch
