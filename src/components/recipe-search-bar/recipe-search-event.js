import React from 'react';
import * as Actions from '../../actions/get-recipes';
import RecipeSearchBar from './recipe-search-bar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RecipeSearchEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleChange(event) {
		this.props.action.trackQuery(event);
	}

	// handleChange(event) {
	// 	this.setState({
	// 		input: event.target.value
	// 	});
	// 	this.props.action.changeQuery(event);
	// }
    
	// handleSearch(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();

	// 	this.setState({ 
	// 		submit: this.props.q,
	// 		input: ''
	// 	}, () => {                              
 //        console.log('stateeee', this.state.submit) // setState is async so console.log(this.state.value) will not print the updated state value, you need to use callback function with setState.
 //      });
	// 	this.props.action.fetchGetData(this.props.q);
	// }

	handleSearch(event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.action.changeQuery(this.props.q);
		// this.props.action.afterSubmit(event);
		this.props.action.fetchGetData(this.props.q);
		// this.props.action.afterSubmit(event);
	}

	render() {
		return (
			<div>
				<RecipeSearchBar 
					q={this.props.q}
					handleChange={this.handleChange}
					handleSearch={this.handleSearch} 
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