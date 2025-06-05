import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import NewUser from "./components/NewUser";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/signup" element={<NewUser />} />
      <Route exact path="/signin" element={<Login />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);
export default App;
