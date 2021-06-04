import React from 'react';
import classes from './Header.module.css';

function Header({icon}) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.logo}><img src={icon} alt="logo" /></div>
        <span>Chuck Norris</span>
      </div>
    </div>
  )
}

export default Header;