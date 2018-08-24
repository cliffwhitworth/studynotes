import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Home = () => <h2>Home</h2>;
const Notes = () => <h2>Notes</h2>;
const Footer = () => <h2>Footer</h2>;

const App = () => {
  return (
    <BrowserRouter>
      <div className="col-md-8 mx-auto">
        <Header />
        <Route path = '/' exact component = {Home} />
        <Route path = '/notes' component = {Notes} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
