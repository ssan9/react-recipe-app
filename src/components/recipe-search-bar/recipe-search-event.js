import React from 'react';
import * as Actions from '../../actions/get-recipes';
import RecipeSearchBar from './recipe-search-bar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RecipeSearchEvent extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleChange(event) {
		this.props.action.trackQuery(event);
	}

	handleSearch(event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.action.changeQuery(this.props.q);
		this.props.action.fetchGetData(this.props.q);
	}

	render() {
		return (
			<div>
				<RecipeSearchBar 
					q={this.props.q}
					handleChange={this.handleChange}
					handleSearch={this.handleSearch} 
					value={this.props.input}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	q: state.q,
	input: state.input
});

const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearchEvent);