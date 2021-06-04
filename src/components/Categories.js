import React from 'react';
import classes from './Categories.module.css';

function Categories({categories, setNewJoke}) {
  return (
  <div className={classes.wrapper}>
    <h1 className={classes.headline}>Categories</h1>
    <div className={classes.categories}>
      {categories.map((item, index) =>{
        return <div className={classes.categoryItem} onClick={(e) => {
          setNewJoke(e.target.outerText)
        }} key={index}>{item}</div>
      })}
    </div>
  </div>
  )
}

export default Categories;
