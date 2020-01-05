import React from 'react';
import TodoItem from './TodoItem'
import Greetings from './Greetings'
import todosData from '../data/todosData'
import { Link } from 'react-router-dom';


class TodoList extends React.Component {

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
        <div>
          <Link to='/'>Back to Home</Link>
          <div className="todo-list">
            <Greetings />
            {data}
          </div>
        </div>
    );
  }
  
}

export default TodoList;
