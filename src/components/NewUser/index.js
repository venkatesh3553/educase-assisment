import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class NewUser extends Component {
  state = {
    userName: "",
    phoneNum: "",
    userGmail: "",
    password: "",
    agency: "",
  };

  onChangeName = (e) => {
    this.setState({ userName: e.target.value });
  };
  onChangeNum = (e) => {
    this.setState({ phoneNum: e.target.value });
  };
  onChangeGmail = (e) => {
    this.setState({ userGmail: e.target.value });
  };
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  createNewAcount = () => {
    console.log("OM");
    const { userName, phoneNum, userGmail, password } = this.state;
    if (
      userName === "" ||
      phoneNum === "" ||
      userGmail === "" ||
      password === ""
    ) {
      return (
        <button
          onClick={this.createNewAcount}
          className="create-new-acount-button-desable"
        >
          Plaease Enter Details
        </button>
      );
    } else {
      return (
        <Link to="/profile" className="create-new-acount-button">
          <button
            onClick={this.createNewAcount}
            className="create-new-acount-button"
          >
            Create Acount
          </button>
        </Link>
      );
    }
  };

  render() {
    const { userName, phoneNum, userGmail, password, errorMsg } = this.state;
    // console.log(errorMsg);
    return (
      <div className="newuser-container">
        <div className="newuser-item-container">
          <h1>
            Create your <br />
            PopX account
          </h1>

          <div className="newuser-input-group">
            <input
              onChange={this.onChangeName}
              className="newuser-input"
              type="text"
              placeholder="Enter Full Name"
            />
            <label className="newuser-label">
              Full Name <span className="span">*</span>{" "}
            </label>
          </div>

          <div className="newuser-input-group">
            <input
              onChange={this.onChangeNum}
              className="newuser-input"
              type="number"
              placeholder="Enter Phone Number"
            />
            <label className="newuser-label">
              Phone Number <span className="span">*</span>{" "}
            </label>
          </div>

          <div className="newuser-input-group">
            <input
              onChange={this.onChangeGmail}
              className="newuser-input"
              type="email"
              placeholder="Enter Email Address"
            />
            <label className="newuser-label">
              Email Address <span className="span">*</span>{" "}
            </label>
          </div>

          <div className="newuser-input-group">
            <input
              onChange={this.onChangePassword}
              className="newuser-input"
              type="password"
              placeholder="Enter Password"
            />
            <label className="newuser-label">
              Password <span className="span">*</span>{" "}
            </label>
          </div>

          <div className="newuser-input-group">
            <input
              className="newuser-input"
              type="text"
              placeholder="Enter Company Name"
            />
            <label className="newuser-label">Company Name </label>
          </div>
          <div className="radio-input-container">
            <p>
              Are you an Agency? <span className="span">*</span>
            </p>
            <div>
              <label for="op1"> YES</label>
              <input type="radio" name="options" checked id="op1" />
              <label for="op2">NO </label>
              <input type="radio" name="options" checked id="op2" />
            </div>
          </div>

          {this.createNewAcount()}
        </div>
      </div>
    );
  }
}
export default NewUser;
