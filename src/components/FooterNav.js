import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class FooterNav extends Component {
    
    render() {
        return (
            <div className="footer-nav div">
                
                <Link to='/restaurants'>Restaurants</Link>
                <Link to='/find'>Find</Link>
                <Link to='/scan'>Scan</Link>
                {/*<Link to='/menu'>Menu</Link>*/}
                <Link to='/profile'>Profile</Link>
                <p className="p-footernav" onClick={this.props.logout}>Logout</p>
            </div>
        );
    }
}

export default FooterNav;