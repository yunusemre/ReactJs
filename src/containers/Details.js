import React from 'react';
import { connect } from 'react-redux';
import { getCharacter, getEpisode } from '../actions';
import CardDetails from '../components/CardDetails';

class Details extends React.Component {
	goBack = () => this.props.history.goBack();

	componentDidMount() {
		const { id } = this.props.match.params
		this.props.getCharacter(id).then(res => {
			let episodesArray = this.selectEpisodes(res.episode);
			this.props.getEpisode(episodesArray);
		});
	}

	selectEpisodes = arr => {
		let episodes = [];
		arr.forEach((res, i) => {
			if (i <= 4) {
				episodes.push(Number(res.split('episode/')[1]));
			}
		})
		return JSON.stringify(episodes);
	}

	render() {
		const { info, episodes } = this.props;

		return (
			<div className='container'>
				<button className='btn btn-xs' onClick={this.goBack}>
					&laquo; Back
				</button>
				<CardDetails
					{...info}
					episodes={episodes}
				/>
			</div>
		)
	}
}

Details.defaultProps = {
	info: {},
	episodes: [],
};

const mapDispatchToProps = {
	getCharacter,
	getEpisode,
};

const mapStateToProps = state => ({
	info: state.rickandmorty.info,
	episodes: state.rickandmorty.episodes,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Details);
