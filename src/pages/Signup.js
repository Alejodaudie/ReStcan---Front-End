import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';

class Signup extends Component {

  state = {
    username: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    auth.signup({ username, password })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
        });
        this.props.setUser(user)
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className='signup'>
        <Link className="a-tittle" to={"/"}><h1 className="h1-home-login-signup h1"><img className="logo-home" src="/images/logoHome.png" alt="logohome"/></h1></Link>
      <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input className="box" type="text" name="username" value={username} onChange={this.handleChange}/>
          <label>Password:</label>
          <input className="box" type="password" name="password" value={password} onChange={this.handleChange} />
          <input className="button" type="submit" value="Sign up" />
      </form>

        <p className="p-account">Already have an account? <Link to={"/login"}> Login</Link></p>

      </div>
    )
  }
}

export default withAuth(Signup);