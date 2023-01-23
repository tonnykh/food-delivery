import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useMenu = (restid) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + restid);
    const json = await data.json();
    setMenu(json?.data);
  }

  return menu;
};

export default useMenu;
