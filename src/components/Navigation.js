import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Home, About, Contact } from '/';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/About">About</Link>
        </div>
        <div>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Contact' component={Contact} />
    </div>
  );
};

export default Navigation;
