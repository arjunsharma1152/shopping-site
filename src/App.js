import React from "react";

import "./App.css";

import Homepage from "./pages/homepage/homepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createUserProfileDoc, auth } from "./components/firebase/firebase";

import ShopPage from "./pages/shop/shop";
import SignInOut from "./pages/sign-in-out/sign-in-out";
import Header from "./components/header-component/header";
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const docRef = await createUserProfileDoc(userAuth);

        onSnapshot(docRef, (doc) => {
          this.setState({
            currentUser: {
              id: doc.id,
              ...doc.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <div>
          <Header currentUser={this.state.currentUser} />
          <div className="hr-line"></div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/signin" element={<SignInOut />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
