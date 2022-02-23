import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import LoginContainer from './screens/LoginContainer';
import NewsContainer from './screens/NewsContainer';
import PostContainer from './screens/PostContainer';
import RegisterContainer from './screens/RegisterContainer';
/* eslint-disable require-jsdoc */
function App({}) {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<NewsContainer/>}/>
        <Route path="/categories" element={<>Categories</>}/>
        <Route path="/personal-area" element={<>Personal area</>}/>
        <Route path="/login" element={<LoginContainer/>}/>
        <Route path="/register" element={<RegisterContainer/>}/>
        <Route path="/posts/:postId" element={<PostContainer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
