import React, { Component } from 'react';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';

class Done extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="div-done">
                    <h1 className="h1-files h1">Done!</h1>
                    <input className="button" type="submit" value="+ food" />
                    <input className="button" type="submit" value="Bill" />
                </div>
               
                <FooterNav logout={this.props.logout}/>
            </div>
        );
    }
}

export default Done;