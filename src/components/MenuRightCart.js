import React, { useContext } from 'react';
import { EMPTY_CART_IMG_CDN_URL } from '../constants';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';

const MenuRightCart = () => {
  const cart = useContext(CartContext);
  const productsCount = cart?.items.reduce(
    (sum, product) => sum + product.quantity, 0);

  return (
    <div className="menu-right-cart">
      {productsCount > 0 ? (
        <>
          <div>Cart</div>
          <p>{productsCount}ITEM</p>
          {cart.items.map((currentProduct, id) => (
            <CartProduct
              key={id}
              id={currentProduct.id}
              quantity={currentProduct.quantity}
            ></CartProduct>
          ))}
          <h1>TOTAL: RS {cart.getTotalCost()}</h1>
        </>
      ) : (
        <>
          <div>Cart Empty</div>
          <img src={EMPTY_CART_IMG_CDN_URL} height="212"></img>
          <div>
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </div>
        </>
      )}
    </div>
  );
};

export default MenuRightCart;
