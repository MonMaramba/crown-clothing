import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";
import { selectCartItems } from "../../redux/cart/cart-selectors";

import "./cart-dropdown.scss";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>

    <CustomButton>GO TO THE CHECKOUT</CustomButton>
  </div>
);
// ensures cart-dropdown component does not re-render everytime unrelated state properties are updated.
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropDown);
