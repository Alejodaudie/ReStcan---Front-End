import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import { Link, withRouter } from 'react-router-dom';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';
import Qr from '../components/QrReader';

class Scan extends Component {

  state = {
    url: "",
    redirect: false
  }

getUrl = (url) => {
  if (url) {
    window.location.href = url;
  }

}


  //function passmeinfo (url)
  render() {
    return (
      <div>
        <Navbar />
            <h1 className="h1-files h1">Scanner</h1>
            <Link className="hidden-menu" to='/menu'>Menu</Link>
            <Qr getUrl={this.getUrl}/>
            <p>{this.state.url}</p>
        
       <FooterNav logout={this.props.logout}/>
      </div>
    )
  }
}

export default withRouter(withAuth(Scan));
