import React, { Component } from 'react';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';

class Search extends Component {

    handleSearch = event => {
        this.props.handleSearch(event.target.value);
      }
    

    render() {
        return (
            <div>
                <Navbar />
                <h1 className="h1-files h1">Search</h1>
                <p className="control has-icons-left">
                <input className="input is-small" type="text" placeholder="Filter" onChange={this.handleSearch}/>
                <span className="icon is-small is-left">
                    <i className="fas fa-search" aria-hidden="true"></i>
                </span>
                </p>
                <FooterNav logout={this.props.logout}/>
            </div>
        );
    }
}

export default Search;