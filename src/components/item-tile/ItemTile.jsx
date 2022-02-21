import React, { useEffect, useState } from "react";
import { PropTypes as PT } from "prop-types";
import { find, filter } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { ItemTileContainer, ItemTitle, ItemPrice, ItemText } from "./styled";
import GenericButton from "../generic-button/GenericButton";
import {
  addTotal,
  removeTotal,
  addToCart,
  removeFromCart,
} from "../../store/cart/cartSlice";

const ItemTile = ({ data }) => {
  const dispatch = useDispatch();
  const [displayRemoveButton, setDisplayRemoveButton] = useState(false);
  const shoppingCart = useSelector((state) => state.cart);

  useEffect(() => {
    const itemInCart = find(shoppingCart.addedItems, { id: data.id });
    const itemsRemovedFromCart = filter(shoppingCart.addedItems, {
      quantity: 0,
    });

    if (itemInCart) {
      setDisplayRemoveButton(true);
    }

    if (find(itemsRemovedFromCart, { id: data.id })) {
      setDisplayRemoveButton(false);
    }
  }, [shoppingCart, data]);

  const handleClick = (e) => {
    if (e.target.id === "add-button") {
      dispatch(addToCart(data.id));
      dispatch(addTotal());
    }
    if (e.target.id === "remove-button") {
      dispatch(removeFromCart(data.id));
      dispatch(removeTotal());
    }
  };

  return (
    <ItemTileContainer id="item-tile-container">
        <img src={data.image} alt={data.title} width={200} height={200} />
        <ItemTitle>
        {data.title}
        </ItemTitle>
      
      <ItemPrice>
      {`£${data.price.toFixed(2)}`}
      </ItemPrice>
      
      <ItemText>Description</ItemText>
      {data.description}
      <p>Average rating {data.rating.rate}</p>
      <GenericButton
        id="add-button"
        type="button"
        text="Add to cart"
        isSubmitButton={false}
        onClick={handleClick}
        hasMarginBottom
      />
      {displayRemoveButton && (
        <GenericButton
          id="remove-button"
          type="button"
          text="Remove from cart"
          isSubmitButton={false}
          onClick={handleClick}

        />
      )}
    </ItemTileContainer>
  );
};

ItemTile.propTypes = {
    data: PT.object
  };

export default ItemTile;
