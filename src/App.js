import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import './main.css';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Test from './components/Test';
import RestaurantList from './components/RestaurantList';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
      {/* <Footer /> */}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
        children: [
          {
            path: '/',
            element: <RestaurantList />,
          },
          {
            path: ':sortid',
            element: <RestaurantList />,
          },
        ],
      },
      {
        path: '/restaurant/:restid',
        element: <RestaurantMenu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
