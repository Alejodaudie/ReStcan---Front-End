import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';
import Qr from '../components/QrReader';

class Scan extends Component {

  state = {
    url: "",
  }

getUrl = (url) => {
this.setState({
  url,
})
}


  //function passmeinfo (url)
  render() {
    
    return (
      <div>
        <Navbar />
            <h1 className="h1-files h1">Scanner</h1>
            <Link to='/menu'>Menu</Link>
            <Qr getUrl={this.getUrl}/>
            <p>{this.state.url}</p>
        
       <FooterNav logout={this.props.logout}/>
      </div>
    )
  }
}

export default withAuth(Scan);
