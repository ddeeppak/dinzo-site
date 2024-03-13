import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/index';
import Login from './components/login/index';
import Signup from './components/signup';
import Landing from './components/landing';
import Checkout from './components/checkout';
import ProductView from './components/details';
import Contact from './components/contact';
import Shop from './components/shop';
import Cart from './components/cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} >
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='product/:productid' element={<ProductView />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='search/:search'  element={<Shop />} />
          <Route path='product/category/:category' element={<Shop/>} />
          <Route path='/product/season/:season' element={<Shop/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
