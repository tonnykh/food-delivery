import Header from '../Header';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';

test('Title should load on rendering header', () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const title = header.getByTestId('title');

//   console.log(title);

  // check if Title is loaded
  expect(title.tagName).toBe('H1');
});

test('Cart should have 0 item on rendering header', () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId('cart');

//   console.log(cart);

  // check if cart have 0 item
  expect(cart.innerHTML).toBe('Cart items - 0');
});
