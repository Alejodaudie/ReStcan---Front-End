import React, { Component } from 'react';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';

class Profile extends Component {
   
    render() {
        return (
            <div>
                <Navbar />
                <h1 className="h1-files h1">Profile</h1>
                <FooterNav logout={this.props.logout}/>
            </div>
        );
    }
}

export default Profile;