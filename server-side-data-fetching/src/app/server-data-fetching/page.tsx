import React from 'react'

const ToDoComponent = async () => {

   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   const data = await response.json();
   console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default ToDoComponent
