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
        console.log('stateeee', this.state.submit) // setState is async so console.log(this.state.value) will not print the updated state value, you need to use callback function with setState.
      });
		this.props.action.fetchGetData(this.props.q);
	}
	render() {
		return (
			<div>
				<RecipeSearchBar 
					q={this.props.q}
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