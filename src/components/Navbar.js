import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Navbar extends Component {


  render() {
    return (
        <div className="navbar div">
            <Link to='/scan'><img className="logo" src="/images/logo.png" alt="Logo"/></Link>
            <p className="p-navbar">Hello {this.props.user.username}!</p>
        </div>
    );
}
}





//   renderIsLoggedIn = () => {
//     return <div>
//       <p>username: {this.props.user.username}</p>
//       <p onClick={this.props.logout}>Logout</p>
//     </div>
//   }

//   renderIsNotLoggedIn = () => {
//     return <div>
//       <Link to='/login'>Login</Link>
//       <Link to='/signup'>Signup</Link>
//     </div>
//   }

//   render() {
//     return (
//       <div>
//         { this.props.isLogged ? this.renderIsLoggedIn() : this.renderIsNotLoggedIn() }
//       </div>
//     )
//   }
// }

export default withAuth(Navbar);