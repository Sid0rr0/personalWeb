import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
import MemeGenerator from './components/MemeGenerator'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/TodoList' component={TodoList}/>
        <Route path='/MemeGenerator' component={MemeGenerator}/>
        <Route path='/TrustMe' component={() => { 
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
            return null;
        }}/>
        <Route path='/LinkedIn' component={() => { 
            window.location.href = 'https://linkedin.com/in/thanh-hung-le'; 
            return null;
        }}/>
      </Switch>
    </Router>
  );
}

export default App;
