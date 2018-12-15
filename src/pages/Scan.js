import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';

class Scan extends Component {

  
  render() {
    
    return (
      <div>
        <Navbar />
        <h1 className="h1-files h1">Scanner</h1>
        <Link to='/menu'>Menu</Link>
       <FooterNav logout={this.props.logout}/>
      </div>
    )
  }
}

export default withAuth(Scan);
