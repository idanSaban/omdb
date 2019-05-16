import React, { Component } from 'react';
import './App.css';
import AppBar from './components/app-bar/app-bar';
import axios from 'axios';
import { Movie } from './components/movie/movie';
class App extends Component {
	constructor() {
		super();
		this.state = {
			inputError: false,
			movie: {}
		};
	}
	clearError = () => this.setState({ inputError: false });
	reset = () => this.setState({ movie: {} });

	submit = async (title, year = false) => {
		if (title === '') {
			this.setState({ inputError: true });
			return;
		}
		let url = `http://www.omdbapi.com/?t=${title}/`;
		url += year ? `&y=${year}` : ``;
		url += `&apikey=1b74aef2`;
		const { data } = await axios.get(url);
		this.setState({ movie: data });
	};

	render() {
		console.log('TCL: App -> render -> this.state', this.state);
		return (
			<div className='App'>
				<AppBar
					submit={this.submit}
					error={this.state.inputError}
					clearError={this.clearError}
					reset={this.reset}
				/>
				{Object.keys(this.state.movie).length > 0 && (
					<Movie data={this.state.movie} />
				)}
			</div>
		);
	}
}

export default App;
