import React from "react";

import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../firebase/firebase";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <h2>Already have an account</h2>
        <form className="group" onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            className="form-input"
            name="email"
            value={this.state.email}
            type="email"
            onChange={this.handleChange}
            required
          />

          <label>Password</label>
          <input
            className="form-input"
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogle>
            Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
