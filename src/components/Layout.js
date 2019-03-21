import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
	<div className="Layout">
		<nav className="navbar navbar-light bg-light" style={{ marginBottom: '15px' }}>
			<div className="container">
				<a className="navbar-brand">Rick and Morty</a>
			</div>
		</nav>
		{children}
	</div>
);

Layout.propTypes = {
	children: PropTypes.any.isRequired
};

export default Layout;
