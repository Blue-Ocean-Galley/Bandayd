import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render, screen, fireEvent, cleanup, act,
} from '@testing-library/react';
import App from './App';

describe('My Test Suite', () => {
  test('It should be true - test if Jest works', () => {
    expect(true).toEqual(true);
  });
});

beforeEach(() => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<App />);
});
afterEach(cleanup);

describe('Modal SignUp/Login testing', () => {
  it('Tests if the modal pops up when Login is clicked on the top right, middle, bottom', () => {
    const buttonList = screen.getAllByText('Login');
    const position = ['top', 'middle', 'bottom'];
    let i = 0;
    buttonList.map((data) => {
      fireEvent.click(data);
      const username = screen.getByText('Username:');
      expect(username).toHaveTextContent('Username:');
      fireEvent.click(screen.getByText('Close Modal'));
      console.log(`Login works at position ${position[i]}`);
      i += 1;
    });
  });

  it('Login/SignUp Modal exits out properly', () => {
    const buttonList = screen.getAllByText('Login');
    const position = ['top', 'middle', 'bottom'];
    let i = 0;
    buttonList.map((data) => {
      fireEvent.click(data);
      fireEvent.click(screen.getByText('Close Modal'));
      const username = screen.queryByText('Username:');
      expect(username).toBeNull();
      console.log(`Login exits at position ${position[i]}`);
      i += 1;
    });
  });
});

describe('Blog post', () => {
  it('is able to go into the blog section when clicked', () => {
    fireEvent.click(screen.getByText('Band blogs'));
    const message = screen.queryByText('Create New');
    expect(message).toBeDefined();
  });

  // it('is able to click a past blog post and show the ability to post', () => {
  //   const isEditing = () => true;
  //   const renderEditArea = () => (isEditing() ? (<EditArea />) : null);
  //   const { container } = render(<renderEditArea />);
  //   expect(container.querySelector('div')).not.toBeNull();
  // });
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
    const showList = screen.getAllByText('Shows')
    const position = ['first', 'second']
    //fireEvent.click(screen.getByText('Shows'));
    showList.map((data) => {
      
    })
    const showPage = screen.getByText(/^New shows/i);
    expect(showPage).toHaveTextContent('New shows coming soon!');
  });
});
