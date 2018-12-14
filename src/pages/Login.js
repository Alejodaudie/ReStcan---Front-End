import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';
class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    auth.login({ username, password })
    .then( (user) => {
      this.props.setUser(user);
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
      <div className='login'>
      <Link to={"/"}> <h1>ReStcan</h1></Link>
      <form onSubmit={this.handleFormSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={this.handleChange}/>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={this.handleChange} />
        <input type="submit" value="Login" />
      </form>
        <p>You do not have account? 
          <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    )
  }
}

export default withAuth(Login);