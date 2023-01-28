import React, { createContext, useState } from 'react';
import { useMenu } from './utils';
import { useParams } from 'react-router-dom';

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const { restid } = useParams();
  console.log(restid, 'REST ID');
  const menu = useMenu(restid);
  if (!menu?.menu?.items) return null;

  console.log(menu, 'CART MENU');
  const menuItems =
    menu?.menu?.items !== undefined ? Object.values(menu?.menu?.items) : [];

  function getProductData(id) {
    console.log(menuItems, 'MENU ITEMS GET');
    console.log(id, 'ID MENU ');
    console.log(
      menuItems.find((item) => item.id === id),
      'RETURN'
    );
    return menuItems.find((item) => item.id === id);
  }

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function getTotalCost() {
    let totalCost = 0;

    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);

      console.log(productData, 'PRODUCT DATA');
      const productPrice = productData?.price;
      console.log(productPrice, 'PRODUCT PRICE');

      totalCost += productPrice * cartItem.quantity;
    });

    return totalCost;
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    deleteFromCart,
    removeOneFromCart,
    getTotalCost,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
