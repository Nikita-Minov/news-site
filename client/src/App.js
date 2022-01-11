import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import News from './screens/News';
import Register from './screens/Register';
import Login from './screens/Login';
import {connect} from 'react-redux';
import {getPosts} from './redux/postsReducer';
import {getMe} from './redux/usersReducer';
/* eslint-disable require-jsdoc */
function App({getPosts, getMe}) {
  useEffect(() => {
    return getPosts();
  }, []);
  useEffect(() => {
    return getMe();
  }, []);
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<News/>}/>
        <Route path="/categories" element={<>Categories</>}/>
        <Route path="/contacts" element={<>Contacts</>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

const AppContainer = connect(null, {
  getPosts,
  getMe,
})(App);
export default AppContainer;
