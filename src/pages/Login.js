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
      <Link className="a-tittle" to={"/"}><h1 className="h1-home-login-signup h1"><img className="logo-home" src="/images/logoHome.png" alt="logohome"/></h1></Link>
      <form onSubmit={this.handleFormSubmit}>
        <label>Username:</label>
        <input className="box" type="text" name="username" value={username} onChange={this.handleChange}/>
        <label>Password:</label>
        <input className="box" type="password" name="password" value={password} onChange={this.handleChange} />
        <input className="button" type="submit" value="Login" />
      </form>
      <div>
        <p className="p-account">You don't have an account?<Link to={"/signup"}> Sign up</Link></p>
      </div>
        
      </div>
    )
  }
}

export default withAuth(Login);