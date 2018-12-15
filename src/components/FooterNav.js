import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class FooterNav extends Component {
    
    render() {
        return (
            <div className="footer-nav div">
                
                <Link to='/restaurants'><img className="icon-restaurant" src="/images/restaurant-1.png" alt=""/></Link>
                <Link to='/find'><img className="icon-find" src="/images/find.png" alt="Find"/></Link>
                <Link to='/scan'><img className="icon-scan" src="/images/scan.png" alt=""/></Link>
                {/*<Link to='/menu'>Menu</Link>*/}
                <Link to='/profile'><img className="icon-profile" src="/images/profile.png" alt=""/></Link>
                <p className="p-footernav" onClick={this.props.logout}><img className="icon-logout" src="/images/logout.png" alt=""/></p>
            </div>
        );
    }
}

export default FooterNav;