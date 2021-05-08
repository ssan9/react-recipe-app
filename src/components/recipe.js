import './recipe.css';
import RecipeSearchEvent from './recipe-search-bar/recipe-search-event';

export default function Recipe() {
  return (
    <div className="recipe">
        <header className="recipe-header">
        	<h4>Recipe Finder</h4>
        </header>
        <RecipeSearchEvent />
    </div>
  );
}