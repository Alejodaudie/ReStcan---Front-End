import React, { Component } from 'react';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';

class Bill extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="div-bill-gates">
                   <h1 className="h1-files h1">"Bill" Gates</h1>
                <h2>Pay for us today!!!</h2>
                <img src="/images/bill-gates.jpg" alt=""/> 
                </div>
                <FooterNav logout={this.props.logout}/>
            </div>
        );
    }
}

export default Bill;