import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

test('renders App with Hi there', () => {
  render(<App />);

  const textElement = screen.getByText(/hi there/i);
  expect(textElement).toBeInTheDocument();
});
