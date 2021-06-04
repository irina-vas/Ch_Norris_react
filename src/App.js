import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Joke from './components/Joke';
import * as axios from 'axios';

function App() {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState('');
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(response => response)
      .then(data => {
        setCategories(data.data);
      }).catch(error => console.error(error))

    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => response)
      .then(data => {
        setJoke(data.data.value);
        setIcon(data.data.icon_url);
      }).catch(error => console.error(error))
  },[])

  function setNewJoke(item) {
    axios.get(`https://api.chucknorris.io/jokes/random?category=${item}`)
      .then(response => response)
      .then(data => {
        setJoke(data.data.value)
      }).catch(error => console.error(error))
  }

  return (
    <div>
      <Header icon={icon} />
      <Categories categories={categories} setJoke={setJoke} setNewJoke={setNewJoke} />
      <Joke joke={joke} />
    </div>
  );
}

export default App;
