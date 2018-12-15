import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';

class Menu extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1 className="h1-files h1">Menu</h1>
                <Link to='/done'>Done</Link>
                <FooterNav logout={this.props.logout}/>
            </div>
        );
    }
}

export default Menu;