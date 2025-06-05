import { Link } from "react-router-dom";
import "./index.css";
const Home = () => (
  <div className="home-container">
    <div className="home-item-container">
      <h1 className="head">Welcome to PopX </h1>
      <p className="pera">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
      </p>
      <Link to="/signup" className="create-button">
        <button className="button">Create Account</button>
      </Link>
      <Link to="/signin" className="login-button">
        {" "}
        <button className="login-button">
          {" "}
          Already Registered? Login
        </button>{" "}
      </Link>
    </div>
  </div>
);
export default Home;
