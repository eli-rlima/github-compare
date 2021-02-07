// Global
import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { store } from 'redux/store';
// Components
import App from 'components/App';

describe('Navbar', () => {
  it('must render new repo popup when click in button plus', () => {
    const { getByTestId } = render(
      <Provider
        store={store}
      >
        <App />
      </Provider>
    );

    const button = getByTestId('nav_button-add-testid');
    fireEvent.click(button);

    expect(!!getByTestId('new_repo-testid')).toBe(true);
  });

  it('must render options of modal when click button dropdown', () => {
    const { getByTestId } = render(
      <Provider
        store={store}
      >
        <App />
      </Provider>
    );

    const button = getByTestId('nav_title-dropdonw');
    fireEvent.click(button);

    expect(!!getByTestId('dropdown-filter_body-testid')).toBe(true);
  });

  it('must render search component', () => {
    const { getByTestId } = render(
      <Provider
        store={store}
      >
        <App />
      </Provider>
    );

    expect(!!getByTestId('nav_search')).toBe(true);
  });
})
