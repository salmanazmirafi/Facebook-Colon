import "./App.css";
import Home from "./page/home/Home";
import LogIn from "./page/login/LogIn";
import Profile from "./page/profile/Profile";
import SingIn from "./page/signIn/SingIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SingIn />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
