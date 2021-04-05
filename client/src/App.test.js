import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('My Test Suite', () => {
  test('It should be true - test if Jest works', () => {
    expect(true).toEqual(true);
  });
});

beforeEach(() => {
  render(<App />);
});

describe('Navigation bar', () => {

  it('Renders the correct content', () => {
    const homeLink = screen.getByText(/^Home/i);
    expect(homeLink).toBeDefined();
  });

  it('Renders the Bands page', () => {
    fireEvent.click(screen.getByText('Bands'));
    const bandPage = screen.getByText(/^Bands coming/i);
    expect(bandPage).toHaveTextContent('Bands coming soon!');
  });

  it('Renders the Shows page', () => {
    fireEvent.click(screen.getByText('Shows'));
    const showPage = screen.getByText(/^New shows/i);
    expect(showPage).toHaveTextContent('New shows coming soon!');
  });

  it('Renders the signup page', () => {
    fireEvent.click(screen.getByText('Sign Up | Login'));
    const signupPage = screen.getByText(/^Signup coming/i);
    expect(signupPage).toHaveTextContent('Signup coming soon!');
  });
});
