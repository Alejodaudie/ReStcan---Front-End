import React, { Component } from 'react';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';

class EditProfile extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1 className="h1-files h1">Edit profile</h1>
                <h2 className="h2-files h2">Personal Information</h2>
                 
                <div>
                    <label>Profile picture</label>
                    <input type="image" name="Profile picture" />
                </div>
                
                <div>
                    <label>Name</label>
                    <input type="text" name="name" />
                </div>
                
                <div>
                    <label>Password</label>
                    <input type="password" name="password"/>
                </div>

                <input className="button" type="submit" value="Accept" />

                
                <FooterNav logout={this.props.logout}/>
    
            </div>
        );
    }
}

export default EditProfile;