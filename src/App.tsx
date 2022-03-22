import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';
import { User } from './user/User'
import { type } from 'os';

// 取得データの型定義
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
};

function App() {
  // stateの型定義
  // const [todos, setTodos] = useState<Array<TodoType>>([]);

  const [users, setUsers] = useState<Array<UserType>>([]);

  // const onClickFetchData = () => {
  //   axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then((res) => {
  //     setTodos(res.data);
  //   }).catch((err) => console.log(err));
  // };

  const onClickUsersData = () => {
    axios.get<Array<UserType>>('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data);
    }).catch((err) => console.log(err));
  };

  return (
    <div className="App">
      {/* <button onClick={onClickFetchData}>データ取得</button> */}
      <button onClick={onClickUsersData}>データ取得</button>
      {/* {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))} */}
      {users.map((user) => (
        <User key={user.id} id={user.id} name={user.name} username={user.username} email={user.email} />
      ))}
    </div>
  );
}

export default App;
