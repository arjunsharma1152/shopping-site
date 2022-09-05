import React from 'react';

import './App.css';

import Homepage from './pages/homepage/homepage.component';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import SignInOut from './pages/sign-in-out/sign-in-out.component';
import Header from './components/header-component/header.component';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
      <Route exact path='/' component={Homepage} />
      <Route  path='/shop' component={ShopPage}/>
      <Route  path='/signin' component={SignInOut}/>
       </Switch>
       </div>
    </BrowserRouter>
  ); 
}

export default App;
