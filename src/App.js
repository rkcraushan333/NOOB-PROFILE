import React, { useState } from "react";
import Profile from "./components/Profile";
import './App.css'

function App() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");

  const addName = (e) => {
    setName(e.target.value);
  }
  const addUser = () => {
    setUser([...user, name]);
    console.log(user)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser();
  }
  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={addName} />
        </form>
        <button onClick={addUser}>Search</button>
      </div>
      <div className="profile">
        {user.map((x) => {
          return <Profile uname={x} />
        })}
      </div >
    </>
  );
}
export default App;
