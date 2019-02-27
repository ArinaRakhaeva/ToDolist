import React, { Component } from 'react';
import './StyleInput.css'; 
import './App.css';
import TodoTable from './components/TodoTable';
// import ReactTable from 'react-table';
// import 'react-table/react-table.css';

class App extends Component {
 constructor(props){
   super(props);
   this.state={description:'', date:'', todos: []}
 }
 inputChanged=(event)=> {
 this.setState({description: event.target.value})
}
inputChange=(event)=> {
  this.setState({date: event.target.value})
 }
 submitForm=(event)=>{
  event.preventDefault();
  const newTodo = {
    description: this.state.description,
    date: this.state.date
  };
  this.setState({
    description: "",
    date:"",
    todos: [...this.state.todos, newTodo]
  })
}
 deleteFunction=(row)=>{
  // const index = parseInt (event.target.id);
  this.setState({
    todos: this.state.todos.filter((todo, i) => i !== row),
  }) 
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>
          Todo list
        </p>
        </header>
        <div>
          <form onSubmit={this.submitForm}> 
          Description:
          <input type="text" value={this.state.description} onChange={this.inputChanged} />
          Date:
          <input type="date" value={this.state.date} onChange={this.inputChange}/>
        <input type="submit" value="Add"/>
        </form>
        </div>
       <TodoTable todos={this.state.todos} delete={this.deleteFunction}/>     
      </div>
    );
    }
  }

export default App;