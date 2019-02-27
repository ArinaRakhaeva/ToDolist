import React from 'react';
import './StyleTable.css'; 

const TodoTable =(props)=> {
    const todos= props.todos.map((todo, index)=><tr key={index}><td>{todo.date}</td><td>{todo.description}</td>
    <td>
      <button onClick={() => props.delete(index)}>Delete</button></td></tr>);
  
   return (
<div>
<table>
<tbody>
    <tr><th>Date</th><th>Description</th></tr>
{todos}
</tbody>
</table>
</div>
)
};
 
export default TodoTable
