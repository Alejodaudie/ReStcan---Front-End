import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import Scan from './pages/Scan';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ScanRoute from './components/ScanRoute';
import AnonRoute from './components/AnonRoute';
import AuthProvider from './providers/AuthProvider';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Menu from './pages/Menu';
import Search from './pages/Search';
import Restaurants from './pages/Restaurants';
import Done from './pages/Done';
import EditProfile from './pages/EditProfile';



class App extends Component {


  // state = {
  //   searchValue: '',
  //   dishes: dish,
  // }

  // handleSearch = searchValue => {
  //   this.setState({
  //     searchValue,
  //   })
  // }


  // renderList = (dishes, searchValue) => {
  //   const filteredArray = dishes.filter( food => {
  //     return food.name.toLowerCase().includes(searchValue.toLowerCase())
  //   })




  render() {
    // const {searchValue} = this.state;
    return (
      <AuthProvider>
        <div className="container">
          
        {/* <Search handleSearch={this.handleSearch}/>
          <div>
            { this.renderList(dishes, searchValue) }
          </div> */}

          <Switch>
              <Route exact path="/" component={Home} />
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <ScanRoute path="/scan" component={Scan} />
              <Route path="/profile" component={Profile} />
              <Route path="/menu" component={Menu} />
              <Route path="/search" component={Search} />
              <Route path="/restaurants" component={Restaurants} />
              <Route path="/done" component={Done} />
              <Route path="/edit-profile" component={EditProfile} />
          </Switch>
         
        </div>
      </AuthProvider>
    )
  }
}

export default App;
