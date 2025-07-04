'use-client';   
import React from 'react'
import { useState,useEffect } from 'react';

interface Todo{
   userId: number;
   id: number;
   title: string;
   completed: boolean;
}

const ToDoComponent = () => {

    const [todo, setTodo] = useState<Todo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState(null)


  return (
    <div>
      
    </div>
  )
}

export default ToDoComponent
