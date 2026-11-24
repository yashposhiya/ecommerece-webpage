import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Signup from "./Singup.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
