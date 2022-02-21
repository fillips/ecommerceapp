import React from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "../../components/shopping-cart/ShoppingCart";
import { HeaderContainer, HeaderContent } from "./styled";

const Header = () => {
  const cartTotal = useSelector((state) => state.cart.total);

  return (
    <HeaderContainer id="header-container">
      <HeaderContent>
        <h1>PrimarySale</h1>
        <ShoppingCart height={20} total={cartTotal} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
