import React from "react";

import "./App.css";
import { connect } from "react-redux";
import Homepage from "./pages/homepage/homepage";
import { setCurrentUser } from "./redux/user/user-action";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import { createUserProfileDoc, auth } from "./components/firebase/firebase";
import ShopPage from "./pages/shop/shop";
import SignInOut from "./pages/sign-in-out/sign-in-out";
import Header from "./components/header-component/header";
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const docRef = await createUserProfileDoc(userAuth);

        onSnapshot(docRef, (doc) => {
          setCurrentUser({
            id: doc.id,
            ...doc.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="hr-line"></div>
        <div className="main-body">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/signin" element={<SignInOut />} />
          </Routes>
        </div>
        <Footer className="footer-nav" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
