import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { auth } from "../firebase/firebase";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectCartHidden } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import "./header.scss";
import Swal from "sweetalert2";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="site-name" to="/">
      SHOPZYY
    </Link>
    <div className="options">
      <Link className="option" to="/">
        HOME
      </Link>
      <Link className="option" to="/shop">
        SHOP
      </Link>
      {currentUser ? (
        <div className="present-user">
          <div
            className="option"
            onClick={() => {
              auth.signOut();
              Swal.fire({ text: "Signed Out." });
            }}
          >
            SIGN OUT
          </div>
          <div className="option name">Hey!! {currentUser.displayName}</div>
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <div className="option">
        <CartIcon />
      </div>
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
