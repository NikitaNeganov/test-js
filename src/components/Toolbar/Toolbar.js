import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Toolbar.css';

const toolbar = () => (
  <nav>
    <ul className={classes.Nav}>
      <li className={classes.Link}><NavLink to="/">Home</NavLink></li>
      <li className={classes.Link}><NavLink to="/chart">Chart</NavLink></li>
    </ul>
  </nav>
);

export default toolbar;
