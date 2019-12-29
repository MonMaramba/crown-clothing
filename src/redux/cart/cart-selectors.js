// Selectors
// 2 types of selectors. 1st type is called inputSelector doesn't use createSeletor function. 2nd is an output Selector that uses input selectors and uses createSelector.

import { createSelector } from "reselect";
// Input selectors take state and returns a small slice of it.
const selectCart = state => state.cart;

// createSelector takes 2 arguments(collectionSelectors, functionForReturnValue)
// createSelector also creates a memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
