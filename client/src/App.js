import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import News from './screens/News';
import Register from './screens/Register';
import Login from './screens/Login';
/* eslint-disable require-jsdoc */
function App() {
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
export default App;
