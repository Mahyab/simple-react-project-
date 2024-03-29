import './App.css';
import { useSelector } from 'react-redux';
import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const isAuth = useSelector(state =>state.auth.isAuthenticates);
  return (
    <React.Fragment>
      <Header/>
     {!isAuth &&  <Auth/>}
     {isAuth && <UserProfile/>}
      <Counter/>
    </React.Fragment>
  );
}

export default App;
