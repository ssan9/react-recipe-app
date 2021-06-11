import React from 'react';

import './display-recipes.css';

export default function DisplayRecipes(props) {
	const { ingredients, label, image } = props;

	const ingredientsArray = ingredients && ingredients.map((ingredient, i) => {
		return <li key={i}>{ingredient.text}</li>
	});

	let isRecipeResult = label && ingredients && image ? 'recipe-result' : 'hide';
	let isLabel = label ? 'label' : 'hide';
	let isIngredients = ingredients ? 'ingredients' : 'hide';
	let isImage = image ? 'recipe-image' : 'hide';

	return (
		<div className="display-recipes">
			<div className={`${isRecipeResult}`}>
				<p className={`${isLabel} text-style`}>{props.label}</p>
				<ul className={`${isIngredients} text-style`}>
					{ingredientsArray}
				</ul>
				{image && <img src={image} className={`${isImage} image-style`} alt={`image - ${label}`} />}
			</div>
		</div>
	);
}

