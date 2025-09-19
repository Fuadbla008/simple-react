import React, { use, useEffect, useMemo, useState } from 'react'
import './App.css'
import './Userdata'
import User from './Userdata';


function App() {

  const [users, getusers] = useState(0);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => getusers(data));
  }, []);

  users.map(user => <User key={user.id} user={user} />);

  const [newCount, setFucn] = useState(0);
  const incrementCount = () => {
    setFucn(newCount + 1);
  }

  return (
    <div className="dashboard">

      <h1>This is User Function</h1>
      <h3>User Number : {users.length}</h3>
      {users.map(user => <User key={user.id} user={user} />)}
      <h1>This is Counter Function</h1>
      <h3>Counter Number : {newCount}</h3>
      <button onClick={incrementCount}>incresse button</button>
    </div>
  )
}

export default App
