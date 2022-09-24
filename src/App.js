import React from "react";

import "./App.css";
import { connect } from "react-redux";
import Homepage from "./pages/homepage/homepage";
import { setCurrentuser } from "./redux/user/user-action";
import { Routes, Route } from "react-router-dom";

import { createUserProfileDoc, auth } from "./components/firebase/firebase";
import ShopPage from "./pages/shop/shop";
import SignInOut from "./pages/sign-in-out/sign-in-out";
import Header from "./components/header-component/header";
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentuser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const docRef = await createUserProfileDoc(userAuth);

        onSnapshot(docRef, (doc) => {
          setCurrentuser({
            id: doc.id,
            ...doc.data(),
          });
        });
      }

      setCurrentuser(userAuth);
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
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInOut />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentuser: (user) => dispatch(setCurrentuser(user)),
});

export default connect(null, mapDispatchToProps)(App);
