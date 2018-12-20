import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';
import { withAuth } from '../providers/AuthProvider';

class Profile extends Component {
   
    render() {
        return (
            <div>
                <Navbar />
                <h1 className="h1-files h1">Profile</h1>
                <h2 className="h2-files h2">Personal Information</h2>
                 
                 <div className="div-profile">
                      {/* <div>
                        <label>Profile picture</label>
                        <input type="image" name="Profile picture" />

                    </div> */}
                    
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={this.props.user.username} />
                    </div>
                    
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={this.props.user.username}/>
                    </div>
                    <input className="button" type="submit" value="Accept" />
                 </div>
                 

                {/* <Link to='/edit-profile'><input className="button" type="submit" value="Edit" /></Link> */}

                
                <FooterNav logout={this.props.logout}/>
            </div>
        );
    }
}

export default withAuth (Profile);