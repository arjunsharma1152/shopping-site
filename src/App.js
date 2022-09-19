import React from "react";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./components/firebase/firebase";

import ShopPage from "./pages/shop/shop.component";
import SignInOut from "./pages/sign-in-out/sign-in-out.component";
import Header from "./components/header-component/header.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
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
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInOut} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
