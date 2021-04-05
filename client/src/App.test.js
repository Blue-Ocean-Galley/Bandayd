import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('My Test Suite', () => {
  test('It should be true - test if Jest works', () => {
    expect(true).toEqual(true);
  });
});

describe('Navigation bar', () => {
  test('It renders the correct content', () => {
    const { getByText } = render(<App />); // Render the component and destructure the method "getByText"
    getByText('Bands'); // Because we destructured we automatically run the method against the component.
    getByText('Home'); // This statement doubles as an assertion
    getByText('Shows');
    getByText('Sign Up | Login');
  });



});
