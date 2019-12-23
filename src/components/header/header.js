import React from "react";
import { Link } from "react-router-dom";
// higher order component that connects components to redux
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase";

import CartIcon from "../cart-icon/cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import { ReactComponent as Logo } from "../../resources/crownLogo.svg"; // special syntax in react for importing svg

import "./header.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

// Function to be passed on to connect that will allow access to state. The State being the root-reducer
// mapStateToProps updates state

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});
// connect basically returns a souped-up Header component
export default connect(mapStateToProps)(Header);
