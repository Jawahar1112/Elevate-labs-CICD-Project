import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Elevate Labs title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Elevate Labs - CI\/CD Demo/i);
  expect(titleElement).toBeInTheDocument();
});
