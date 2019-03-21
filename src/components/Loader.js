import React from 'react';

const Loader = () => (
	<button className="btn btn-outline-primary" type="button" disabled>
		<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
		<span className="sr-only">Loading...</span>
	</button>
);
export default Loader;
