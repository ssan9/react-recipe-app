import React from 'react';
import './recipe-search-bar.css';
import DisplayRecipes from '../display-recipes/display-recipes';

export default function RecipeSearchBar(props) {
	const { q, submit, handleSearch, value, handleChange } = props;

	const recipeList = q;
		let recipeA = [];

		for(let recipes in recipeList) {
			for(let recipe in recipeList[recipes]) {
				recipeA.push(recipeList[recipes][recipe]); 
			}
		}

	const recipeArray = submit && recipeA.map((recipes, i) => {
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
		<div className="wrapper">
		<div className="recipe-form">
			<h1>Find your Recipe</h1>
			<form>
				<div className="search-bar">
					<input type="text"
						className="search-text"
						name="recipe-search" 
						value={value}
						onChange={handleChange} />
					<button type="submit" 
						className="search-button"
						onClick={handleSearch}>Search
					</button>
				</div>
			</form>
			</div>
				{recipeArray}
		</div>
	);
}

