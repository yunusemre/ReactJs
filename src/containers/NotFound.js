import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
	render() {
		return <div className="container">
			<div class="jumbotron text-center">
				<h1 class="display-4">Ooooopppss!</h1>
				<h3>Not found!</h3>
				<Link to='/' className="btn btn-outline-primary">
					Home
					</Link>
			</div>
		</div>
	}
}
