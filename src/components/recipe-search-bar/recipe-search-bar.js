import React from 'react';
import './recipe-search-bar.css';
import DisplayRecipes from '../display-recipes/display-recipes';

export default class RecipeSearchBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const recipeList = this.props.q;
		let recipeA = [];

		for(let recipes in recipeList) {
			for(let recipe in recipeList[recipes]) {
				recipeA.push(recipeList[recipes][recipe]); 
			}
		}

		const recipeArray = this.props.submit && recipeA.map((recipes, i) => {
			return (
				<div key={i}>
					<DisplayRecipes
						label={recipes.label}
						image={recipes.image}
						ingredients={recipes.ingredients}
					/>
				</div>
			);
		});
		
		return (
			<div>
				<form onSubmit={this.props.handleSearch}>
					<div className="search-bar">
						<input type="text"
							className="search-text"
							name="recipe-search" 
							value={this.props.value}
							onChange={this.props.handleChange} />
						<button type="submit" 
							className="search-button"
							onClick={this.props.handleSearch}>Search
						</button>
					</div>
				</form>
				{recipeArray}
			</div>
		);
	}	
}