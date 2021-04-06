import { render, screen } from '@testing-library/react';
import Recipe from './Recipe';

test('renders learn react link', () => {
	render(<Recipe />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});