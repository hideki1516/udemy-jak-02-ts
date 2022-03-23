import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';
import { Text } from './Text'
import { User } from './user/User'
import { TodoType } from './types/todo';
import { UserType } from './types/user';
import { UserProfile } from './UserProfile';
import { User2 } from './types/user2';
import { ProductDetail } from './ProductDetail';
import { Product } from './types/product';

const user: User2 = {
  name: 'じゃけぇ',
  // hobbies: ['映画', 'ゲーム'],
}

const product: Product = {
  name: 'アクセサリーA',
  creator: 'Hide',
  commitment: ['色合い', '利便性'],
  comments: '色合いと利便性にこだわりました。',
  price: 1200,
}

function App() {
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
      <ProductDetail product={product} />
      <UserProfile user={user} />
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
