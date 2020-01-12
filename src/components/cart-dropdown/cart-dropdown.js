import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";
import { selectCartItems } from "../../redux/cart/cart-selectors";

import "./cart-dropdown.scss";

const CartDropDown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>

    <CustomButton onClick={() => history.push("/checkout")}>
      GO TO THE CHECKOUT
    </CustomButton>
  </div>
);
// ensures cart-dropdown component does not re-render everytime unrelated state properties are updated.
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// so that withRouter has access to components params
export default withRouter(connect(mapStateToProps)(CartDropDown));
