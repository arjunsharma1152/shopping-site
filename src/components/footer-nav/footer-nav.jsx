import React from "react";
import { connect } from "react-redux";
import "./footer-nav.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import CartIcon from "../cart-icon/cart-icon";
import Swal from "sweetalert2";

const FooterNav = ({ currentUser }) => (
  <div className="footer-root">
    <div className="footer">
      <Link className="footer-icon" to="/">
        <Icon
          icon="ant-design:home-filled"
          color="black"
          widht="30"
          height="25"
        />
      </Link>
      <Link className="footer-icon" to="/shop">
        <Icon icon="bxs:shopping-bag" color="black" widht="30" height="25" />
      </Link>
      <Link className="footer-icon" to="/">
        <CartIcon />
      </Link>
      {currentUser ? (
        <Link className="footer-icon" to="/signin">
          <Icon
            icon="icomoon-free:exit"
            color="black"
            widht="30"
            height="22"
            onClick={() => {
              auth.signOut();
              Swal.fire({text:"Signed Out."});
            }}
          />
        </Link>
      ) : (
        <Link className="footer-icon" to="/signin">
          <Icon icon="bxs:user" color="black" widht="30" height="25" />
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(FooterNav);
