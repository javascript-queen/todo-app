import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// We describe what we want to test:
test('renders learn react link', () => {
  // Arrange: prepare the environment, render the component.
  render(<App />);
  // Act: try to find the expected link.
  const linkElement = screen.getByText(/learn react/i);
  // Assert: check that required link is indeed in the document.
  expect(linkElement).toBeInTheDocument();
});

