import React from 'react';
import FoodItemCard from './FoodItemCard';
import { EMPTY_CART_IMG_CDN_URL } from '../constants';

const MenuMain = ({menu, availability}) => {


    return (
      <div className="menu-container">
        {/* *** MENU left *** */}
        <div className="menu-left-filter">
          {menu?.items == undefined
            ? ""
            : [
                ...new Set(
                  Object.values(menu?.items).map((item) => item.category)
                ),
              ].map((item) => <div key={item}>{item}</div>)}
        </div>

        {/* *** MENU center *** */}
        <div className="menu-list">
          {menu?.items == undefined
            ? ""
            : [
                ...new Set(
                  Object.values(menu?.items).map((item) => item.category)
                ),
              ].map((item) => (
                <div key={item}>
                  <h2>{item}</h2>
                  <div className="number-of-item">
                    {Object.values(menu?.items).filter(
                      (ite) => ite.category == item
                    ).length + " ITEMS"}
                  </div>
                  <div>
                    {Object.values(menu?.items)
                      .filter((ite) => ite.category == item)
                      .map((it) => (
                        <FoodItemCard
                          {...it}
                          isOpened={availability?.opened}
                          key={it.id}
                        ></FoodItemCard>
                      ))}
                  </div>
                </div>
              ))}
        </div>

        {/* MENU RIGHT sidebar cart*/}
        <div className="menu-right-cart">
          <div>Cart Empty</div>
          <img
            src={EMPTY_CART_IMG_CDN_URL}
            height="212"
          ></img>
          <div>
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </div>
        </div>
      </div>
    );
}

export default MenuMain;