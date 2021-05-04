import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/search/i);
  expect(buttonElement).toBeInTheDocument();
});


test('renders language filter', () => {
  render(<App />);
  const dropdown = screen.getByText(/Language/i);
  expect(dropdown).toBeInTheDocument();
});


test('details page is loaded with good api call', () => {
  render(<Details url="/details/1" />)

  expect(screen.getByRole('div')).toHaveTextContent('Mortal Kombat')
});