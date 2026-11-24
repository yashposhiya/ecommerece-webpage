import { useState } from 'react';


export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function singup() {
    if (username && password) {
        let user = {
            username: username,
            password: password
        }
        localStorage.setItem("user", JSON.stringify(user));
        alert("User created successfully!");
    } else {
        alert("Please fill in both fields.");
    }
  }

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={singup}>Sign Up</button>
    </div>
  );
}
