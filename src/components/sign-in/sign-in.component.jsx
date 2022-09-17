import React from "react";

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email:'',password:''});
    }

    handleChange = (e) => {
        const { value , name }= e.target;

        this.setState({[name]: value});
    }
    
    render(){
        return(
        <div className="signin">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <input name="email" value={this.state.email} type="email"  onChange={this.handleChange} required />
                <label>Email</label>

                <input name="password" value={this.state.password} type="password"  onChange={this.handleChange}  required />
                <label>Password</label>

                <input type="submit" value="Submit" />
            </form>

        </div>
        )
    }
}

export default SignIn;