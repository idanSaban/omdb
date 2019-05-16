import React from 'react';
import './movie.scss';

export const Movie = props => {
	console.log('TCL: props.data', props.data);
	return props.data.Error ? (
		<div className='movie-error'>
			<h1>{props.data.Error}</h1>
		</div>
	) : (
		<div className='movie'>
			<div className='image'>
				<img src={props.data.Poster} alt={props.data.Title} />
			</div>
			<div className='info'>
				<h1>{props.data.Title}</h1>
				<div>
					<span className='field'>IMDB rating:</span>
					{props.data.imdbRating} (<span className='field'>Vote count:</span>
					{props.data.imdbVotes})
				</div>
				<div>
					<span className='field'>Length:</span>
					{props.data.Runtime}
				</div>
				<div>
					<span className='field'>Year:</span>
					{props.data.Year}
				</div>
    				<div>
					<span className='field'>Country:</span>
					{props.data.Country}
				</div>
				<div>
					<span className='field'>Actors:</span>
					{props.data.Actors}
				</div>
				<div>
					<span className='field'>Directed By:</span>
					{props.data.Director}
				</div>
				<p>
					<span className='field'>Plot:</span>
					{props.data.Plot}
				</p>
				<div>
					<a href={props.data.Website}>Website</a>
				</div>
			</div>
		</div>
	);
};
