import React from 'react';
import * as Actions from '../../actions/get-recipes';
import RecipeSearchBar from './recipe-search-bar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RecipeSearchEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submit: '',
			input: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleChange(event) {
		this.setState({
			input: event.target.value
		});
		this.props.action.changeQuery(event);
	}

	handleSearch(event) {
		event.preventDefault();
		event.stopPropagation();

		this.setState({ 
			submit: this.props.q,
			input: ''
		}, () => {                              
        console.log(this.state.submit) 
      });
		this.props.action.fetchGetData(this.props.q);
	}
	render() {
		return (
			<div>
				<RecipeSearchBar 
					q={this.props.q}
					submitValue={this.state.submit}
					handleChange={this.handleChange}
					handleSearch={this.handleSearch} 
					submit={this.state.submit}
					value={this.state.input}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	q: state.q
});

const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearchEvent);