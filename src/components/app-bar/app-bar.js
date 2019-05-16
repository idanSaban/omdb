import React, { Component } from 'react';
import './app-bar.scss';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
class AppBar extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			year: ''
		};
	}
	handleInputChange = e => {
		e.target.name === 'title' && this.props.error && this.props.clearError();

		this.setState({
			[e.target.name]: e.target.value
		});
	};
	render() {
		const { title, year } = this.state;
		return (
			<div className='app-bar'>
				<div className='logo'>omdb</div>
				<div className='inputs'>
					<input
						className={this.props.error ? 'error' : ''}
						type='text'
						name='title'
						placeholder='Movie title'
						value={title}
						onChange={this.handleInputChange}
					/>
					<input
						type='number'
						name='year'
						placeholder='Release year'
						value={year}
						onChange={this.handleInputChange}
					/>
					<div
						className='button'
						onClick={() => this.props.submit(title, year)}
					>
						<i className='fas fa-search' />
					</div>

					<div
						className='button'
						onClick={() => {
                            this.props.clearError()
                            this.props.reset()
							this.setState({ title: '', year: '' });
						}}
					>
						<i className='far fa-trash-alt' />
					</div>
				</div>
			</div>
		);
	}
}

export default AppBar;
