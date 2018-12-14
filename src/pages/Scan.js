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
        
       <FooterNav logout={this.props.logout}/>
      </div>
    )
  }
}

export default withAuth(Scan);
