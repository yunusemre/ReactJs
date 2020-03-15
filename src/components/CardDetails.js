import React from 'react';
import PropTypes from 'prop-types';

const CardDetails = ({ image, name, location, episodes }) => (
	<div className="card">
		<div className="row no-gutters">
			<div className="col-md-4">
				<img src={image} className="card-img" alt={name} />
			</div>
			<div className="col-md-8">
				<div className="card-body">
					<h2 className="card-title">{name}</h2>
					<p className="card-text">
						<strong>Birthday:</strong> {location && location.name}
					</p>
					<div>
						{episodes.length > 0 && (
							<>
								<strong>Last Episodes:</strong>
								<ul className="list-unstyled">
									{episodes.map(res => (
										<li key={res.id}>{res.name}</li>
									))}
								</ul>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	</div>
);

CardDetails.defaultProps = {
	episodes: []
};

CardDetails.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	location: PropTypes.objectOf(PropTypes.string).isRequired,
	episodes: PropTypes.array
};

export default CardDetails;
