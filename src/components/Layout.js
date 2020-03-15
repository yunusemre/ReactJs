import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
	<div className="Layout">
		<nav className="navbar navbar-light bg-light" style={{ marginBottom: '15px' }}>
			<div className="container">
				<Link to="/" className="navbar-brand">Rick and Morty</Link>
			</div>
		</nav>
		{children}
	</div>
);

Layout.propTypes = {
	children: PropTypes.any.isRequired
};

export default Layout;
