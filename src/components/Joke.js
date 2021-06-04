import React from 'react';
import classes from './Joke.module.css';
import chuckNorrisImage from '../common/images/chuckNorris.png'

function Joke({joke}) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.chuckImage}>
        <img src={chuckNorrisImage} alt="Chuck_Norris" />
      </div>
      <p className={classes.randomeJoke}>{joke}</p>
    </div>
  )
}

export default Joke;