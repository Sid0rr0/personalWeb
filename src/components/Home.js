import React from 'react';
import {Link} from 'react-router-dom'
import TodoList from './TodoList';
import MemeGenerator from './MemeGenerator';

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Link to='TodoList'>Todo List</Link>
        <Link to='/MemeGenerator'>Meme Generator</Link>
    </div>
  );
}

export default Home;
