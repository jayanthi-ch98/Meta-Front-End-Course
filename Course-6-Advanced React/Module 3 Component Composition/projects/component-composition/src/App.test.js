import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("How did you hear about Little Lemon?");
  expect(linkElement).toBeInTheDocument();
});
