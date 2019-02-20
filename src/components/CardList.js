import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardList = ({ image, name, id }) => (
	<div
		className='col col-md-3'
		style={{
			marginBottom: '15px'
		}}>
		<div className='card'>
			{!image && <span>Loading ...</span>}
			<img src={image} className='card-img-top' alt={name} />
			<div className='card-body'>
				<p className='text-center'>{name}</p>
				<div className='text-center'>
					<Link to={`${id}`} className='card-link btn btn-outline-primary'>
						Details
					</Link>
				</div>
			</div>
		</div>
	</div>
);

CardList.defaultProps = {
	image: '',
	name: '',
	id: 0,
};

CardList.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};

export default CardList;