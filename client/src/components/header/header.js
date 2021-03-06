import React from "react";

// Link is now being passed from the header-styles component
//import { Link } from "react-router-dom";
// higher order component that connects components to redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase";

import CartIcon from "../cart-icon/cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { signOutStart } from "../../redux/user/user-actions";

import { ReactComponent as Logo } from "../../resources/crownLogo.svg"; // special syntax in react for importing svg

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from "./header-styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

// Function to be passed on to connect that will allow access to state. The State being the root-reducer
// Allows access to state types on reducer files
// createStructuredSelector passes top level state to all functions
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

// connect basically returns a souped-up Header component
export default connect(mapStateToProps, mapDispatchToProps)(Header);
