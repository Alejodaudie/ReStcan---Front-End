import React, { Component } from 'react';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';

class Done extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1 className="h1-files h1">Done!</h1>
                <FooterNav logout={this.props.logout}/>
            </div>
        );
    }
}

export default Done;