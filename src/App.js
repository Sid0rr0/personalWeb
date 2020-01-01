import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import Greetings from './components/Greetings'
import todosData from './data/todosData'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
     this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })

      return {
        todos: updatedTodos
      }
    })
  }
  
  

  render() {
    const data = this.state.todos.map(todo => <TodoItem  
      key={todo.id} 
      item={todo}
      handleChange={this.handleChange} 
    />)
    

    return (
      <div className="todo-list">
        <Greetings />
        {data}
      
      </div>
    );
  }
  
}

export default App;
