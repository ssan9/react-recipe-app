import React from 'react';

import './display-recipes.css';

export default class DisplayRecipes extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const ingredientsArray = this.props.ingredients && this.props.ingredients.map((ingredient, i) => {
			return <li key={i}>{ingredient.text}</li>
		});

		let isRecipeResult = this.props.label && this.props.ingredients && this.props.image ? 'recipe-result' : 'hide';
		let isLabel = this.props.label && this.props.label ? 'label' : 'hide';
		let isIngredients = this.props.ingredients && this.props.ingredients ? 'ingredients' : 'hide';
		let isImage = this.props.image && this.props.image ? 'recipe-image' : 'hide';


		return (
			<div className="display-recipes">
				<div className={`${isRecipeResult}`}>
					<p className={`${isLabel} common-style`}>{this.props.label}</p>
					<ul className={`${isIngredients} common-style`}>
						{ingredientsArray}
					</ul>
					{this.props.image && <img src={this.props.image} className={`${isImage} common-style`} alt={`image - ${this.props.label}`} />}
				</div>
			</div>
		);
	}
}