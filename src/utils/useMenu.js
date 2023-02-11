import { useState, useEffect } from 'react';
import { FETCH_MENU_URL } from '../constants';

const useMenu = (restid) => {
  const [menu, setMenu] = useState([]);

  async function getRestaurantInfo() {
    const data = await fetch( + FETCH_MENU_URL + restid);
    const json = await data.json();
    setMenu(json?.data);
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  console.log(menu, 'USE MENU');

  return menu;
};

export default useMenu;
