import React, { useState } from 'react';
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
import UserContext from './utils/UserContext';
import Test from './components/Test';
import RestaurantList from './components/RestaurantList';

const App = () => {
  const [user, setUser] = useState({
    name: 'Tonny',
    email: 'tonny@gmail.com',
  });

  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
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
            path: ':sortid',
            element: <RestaurantList />,
          },
        ],
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
