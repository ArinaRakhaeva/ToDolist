import React, { Component } from 'react';

import './App.css';
import TodoTable from '.components'

class App extends Component {
 constructor(props){
   super(props);
   this.state={description:'', date:'', todos: []}
 }
 inputChanged=(event)=> {
 this.setState({description: event.target.value})
}
addTodo=(event)=>{
    

}

submitForm=(event)=>{
  event.preventDefault();
  this.setState({
    items: [...this.state.todos, this.state.description]
  })
}
  render() {
    const todos= this.state.todos.map((todo, index)=><tr key={index}><td>{todo}</td></tr>);
    return (
      <div className="App">
        <header className="App-header">
         <p>
          Todo list
          </p>
        </header>
        <div>
          <form onSubmit={this.addTodo}> 
          Description:
          <input type="text" value={this.state.description} onChange={this.inputChanged}/>
          </form>
          <form onSubmit={this.addTodo}> 
          Date:
          <input type="date" value={this.state.description} onChange={this.inputChanged}/>
        <input type="submit" value="Add"/>
        </form>
        </div>
        <div>
        //<TodoTable todos={this.state.todos} />
          <table>
            <tbody>
                <tr><th>Description</th><th>Date</th></tr>
            {todos}
          </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
