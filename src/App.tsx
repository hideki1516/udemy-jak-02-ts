import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';

// 取得データの型定義
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  // stateの型定義
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then((res) => {
      setTodos(res.data);
    }).catch((err) => console.log(err))
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}

export default App;
