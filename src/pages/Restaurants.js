import React, { Component } from 'react';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';
import orderService from '../lib/order-service'

class Restaurants extends Component {

    state = {
        restaurants: [],
        isLoading: true,
      }

    componentDidMount() {
      orderService.listRestaurant()
        .then((results) => {
            console.log(results)
          this.setState({
            restaurants: results,
            isLoading: false,
          })
        })
    }

    render() {
        if(this.state.isLoading) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <Navbar />
                <h1 className="h1-files h1">Restaurants</h1>
                {this.state.restaurants.map((restaurant) => {
                   return <p key={restaurant._id}>{restaurant.name}</p>
                })}
                <FooterNav logout={this.props.logout}/>
            </div>
        );
    }
}

export default Restaurants;