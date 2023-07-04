import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./components/pages/HomePage"
import User from "./components/pages/User";
import UpdateUser from "./components/pages/UpdateUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<User />} />
        <Route path="/update" element={<UpdateUser />} />

      </Routes>

    </>
  );
}

export default App;
