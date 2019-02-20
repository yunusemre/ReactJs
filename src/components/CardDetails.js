import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

const CardDetails = ({ image, name, location, episodes }) => (
	<div className='card'>
		<div className='row no-gutters'>
			<div className='col-md-4'>
				<img src={image} className='card-img' alt={name} />
			</div>
			<div className='col-md-8'>
				<div className='card-body'>
					<h2 className='card-title'>{name}</h2>
					<p className='card-text'>
						<strong>Doğum yeri:</strong> {location && location.name}
					</p>
					{!name && (
						<div className='text-center'>
							<Loader />
						</div>
					)}
					<div>
						{episodes.length > 0 && (
							<>
								<strong>Last Episodes:</strong>
								<ul className='list-unstyled'>
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
	image: '',
	name: '',
	location: {},
	episodes: [],
};

CardDetails.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	location: PropTypes.objectOf(PropTypes.string).isRequired,
	episodes: PropTypes.array,
};

export default CardDetails;
