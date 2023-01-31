import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './main.css';
import Offers from './components/Offers';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Login from './components/Login';
import Help from './components/Help';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import CartProvider from './CartContext';

const App = () => {
  return (
    <>
      {/* <CartProvider> */}
      <Header />
      <Outlet />
      <Footer />
      {/* </CartProvider> */}
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
      },
      {
        path: '/offers',
        element: <Offers />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path: '/restaurant/:restid',
        element: <RestaurantMenu />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
