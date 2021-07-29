import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';


// components imports here : 
import Header from './components/header/header.component';
import HomePage from './pages/homepage/home.page';
import BusTicketPage from './pages/busticketpage/busticket.component';
import SignInAndsignUpPage from './pages/sign-In-sign-Up/signInAndSignUp.component';






function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/bustickets' component={BusTicketPage} />
        <Route exact path='/loginAndSignup' component={SignInAndsignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
