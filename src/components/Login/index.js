import { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Login extends Component {
  state = { userMail: "", password: "", inputIsEmpty: false, errorMsg: "" };

  onChangeUserEmail = (e) => {
    this.setState({ userMail: e.target.value });
  };
  onChangeUserPassword = (e) => {
    this.setState({ password: e.target.value, inputIsEmpty: false });
  };

  buttonShowsBasedOnUserDetails = () => {
    const { userMail, password, inputIsEmpty } = this.state;
    if (userMail !== "" && userMail.includes("@") && password !== "") {
      return (
        <>
          <Link className="user-login-button" to="/profile">
            {" "}
            <button className="button">Login</button>{" "}
          </Link>
        </>
      );
    } else {
      return (
        <button
          disabled
          style={{
            padding: "10px 20px",
            width: "80%",
            height: "50px",
            borderradius: "10px",
          }}
        >
          Please Enter Details
        </button>
      );
    }
  };

  render() {
    const { userMail, password } = this.state;
    console.log(userMail, password);
    return (
      <div className="login-container">
        <div className="login-item-container">
          <h1 className="login-head">
            Signin to your <br />
            PopX account
          </h1>
          <p className="ligin-pera">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </p>
          <div className="input-group">
            <input
              onChange={this.onChangeUserEmail}
              type="email"
              className="input"
              placeholder="Enter email address"
            />
            <label> Email Address</label>
          </div>
          <div className="input-group">
            <input
              onChange={this.onChangeUserPassword}
              className="input"
              type="password"
              placeholder="Enter password"
              required
            />
            <label> Enter Password</label>
          </div>
          {this.buttonShowsBasedOnUserDetails()}
        </div>
      </div>
    );
  }
}

export default Login;

// Signin to your PopX account
//
