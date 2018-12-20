import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Home extends Component {

  renderIsLoggedIn = () => {
    return <div>
      <p>username: {this.props.user.username}</p>
      <Link to='/scan'><input className="button" type="submit" value="Start" /></Link>
    </div>
  }

  renderIsNotLoggedIn = () => {
    return <div className="div-home">
      <Link to='/login'><input className="button" type="submit" value="Login" /></Link>
      <Link to='/signup'><input className="button" type="submit" value="Sign up" /></Link>
    </div>
  }

  render() {
    return (
      <div className='div-home'>
        <h1 className="h1-home-login-signup h1"><img className="logo-home" src="/images/logoHome.png" alt="logohome"/></h1>
        <h2 className="h2-home">Scan it, eat it, enjoy it!</h2>
        <p className="p-home">ReStcan is an app where through the scanning of a QR code located on the tablecloth of the restaurant, we 
                              access directly to the menu of the restaurant, being able to request the order we want without the need of 
                              waiters or long waits.</p>
        <img className='logo' src="/public/images/innovation.png" alt=""/>
        { this.props.isLogged ? this.renderIsLoggedIn() : this.renderIsNotLoggedIn() }
      </div>
    )
  }
}

export default withAuth(Home);