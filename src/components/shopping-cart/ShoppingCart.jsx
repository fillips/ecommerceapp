import React from "react";
import { PropTypes as PT } from "prop-types";
import Cart from "../../static/icons/Cart";
import { ShoppingCartContainer, ShoppingCartTotal } from "./styled";

const ShoppingCart = ({ height, total }) => {
  return (
    <ShoppingCartContainer>
      <Cart datatest-id="cart-icon" height={height} />
      <ShoppingCartTotal>{total}</ShoppingCartTotal>
    </ShoppingCartContainer>
  );
};

ShoppingCart.propTypes = {
    height: PT.number,
    total: PT.number,
  };

export default ShoppingCart;
