import React from "react";

import "./sign-in.scss";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

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

    const { email, password } = this.state;

    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            Swal.fire({
              icon: "warning",
              text: "Incorrect Password.",
            });
          } else {
            console.log(error);
          }
        });
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
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

          <CustomButton className="login-button" type="submit">
            Sign In
          </CustomButton>
          <CustomButton
            className="google"
            type="button"
            onClick={signInWithGoogle}
            isGoogle
          >
            Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
