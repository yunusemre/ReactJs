import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
	<div className='Layout'>
		<nav className='navbar navbar-light bg-light' style={{ marginBottom: '15px' }}>
			<div className='container'>
				<a className='navbar-brand'>
					<img
						src='https://www.iyzico.com//assets/images/content/logo.svg?v=v4.0.38'
						height='40'
						className='d-inline-block align-top'
						alt='İyzico'
					/>
				</a>
			</div>
		</nav>
		{children}
	</div>
);

Layout.propTypes = {
	children: PropTypes.any.isRequired
};

export default Layout;
