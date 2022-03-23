import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';
import { Text } from './Text'
import { User } from './user/User'
import { TodoType } from './types/todo';
import { UserType } from './types/user';

function App() {
  // stateの型定義
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const [users, setUsers] = useState<Array<UserType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then((res) => {
      setTodos(res.data);
    }).catch((err) => console.log(err));
  };

  const onClickUsersData = () => {
    axios.get<Array<UserType>>('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data);
    }).catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Text color='red' fontSize='18px' />
      <button onClick={onClickFetchData}>データ取得</button>
      <button onClick={onClickUsersData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
      {users.map((user) => (
        <User key={user.id} name={user.name} username={user.username} email={user.email} />
      ))}
    </div>
  );
}

export default App;
