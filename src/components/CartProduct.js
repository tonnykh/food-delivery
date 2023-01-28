import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useParams } from 'react-router-dom';
import { useMenu } from '../utils';

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const { restid } = useParams();
  const menu = useMenu(restid);
  if (Object.keys(menu).length === 0) return null;
  const menuItems =
    Object.keys(menu).length > 0 ? Object.values(menu?.menu?.items) : null;

  function getProductData(id) {
    return menuItems && menuItems.find((item) => item.id === id);
  }

  const productData = getProductData(id);

  return (
    <>
      <h3>{productData?.name}</h3>
      <p>{quantity} total</p>
      <p>
        Rs {productData?.price / 100}
      </p>
      <button
        onClick={() => cart.removeOneFromCart(id)}
        style={{ width: '40px', fontSize: '2rem' }}
      >
        -
      </button>
      <h2>{quantity}</h2>
      <button
        onClick={() => cart.addOneToCart(id)}
        style={{ width: '40px', fontSize: '2rem' }}
      >
        +
      </button>
      <button onClick={() => cart.deleteFromCart(id)}>Remove</button>
      <hr></hr>
    </>
  );
}

export default CartProduct;
