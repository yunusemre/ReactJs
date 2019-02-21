import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCharacter } from '../actions';
import CardList from '../components/CardList';
import Loader from '../components/Loader';
class Home extends React.Component {
	state = {
		page: 1,
		loading: false,
		more: true,
		error: false
	};

	checkScrollPosition = () => {
		const { error, loading, more } = this.state
		if (error || loading || !more) return
		if (
			window.innerHeight + document.documentElement.scrollTop >=
			document.documentElement.offsetHeight
		) {
			this.getScrollData();
		}
	}

	componentDidMount() {
		if (this.state.page === this.props.page) {
			this.getScrollData();
		}
		window.addEventListener('scroll', this.checkScrollPosition);
		window.addEventListener('resize', this.checkScrollPosition);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.checkScrollPosition);
		window.removeEventListener('resize', this.checkScrollPosition);
	}

	getScrollData = () => {
		this.setState(
			{
				loading: true
			},
			() => {
				this.props
					.getCharacter({ page: this.props.page })
					.then(response => {
						this.setState({
							loading: false,
							more: !(response.info.count <= this.props.page * 20)
						})
					})
					.catch(err => {
						this.setState({ error: true, loading: false })
					});
			}
		)
	}

	render() {
		const { error, loading, more } = this.state;
		const { results } = this.props;
		return (
			<div className='container'>
				<div className='row'>
					{results.length > 0 && results.map((res, index) => <CardList {...res} key={index} />)}
				</div>
				{loading && (
					<div className='text-center'>
						<Loader />
					</div>
				)}
				{!more && <div className='alert alert-info text-center'>The end!</div>}
				{error && (
					<div className='alert alert-danger text-center'>Ooopppss! Somethings went wrong!</div>
				)}
			</div>
		)
	}
}

Home.defaultProps = {
	results: []
};

Home.propTypes = {
	results: PropTypes.array.isRequired
};

const mapDispatchToProps = {
	getCharacter,
};

const mapStateToProps = state => ({
	results: state.rickandmorty.data,
	page: state.rickandmorty.page
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);
