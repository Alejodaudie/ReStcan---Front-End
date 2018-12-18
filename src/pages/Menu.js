import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';
import orderService from '../lib/order-service';
import dish from '../components/Dish';
import Dish from '../components/Dish';

class Menu extends Component {

    state = {
        dishes: [],
        isLoading: true,
      }

    componentDidMount() {
        orderService.listDishes()
          .then((results) => {
            this.setState({
              dishes: results,
              isLoading: false,
            })
          })
      }
    
    render() {
        const {dishes, isLoading} = this.state;
        if (isLoading) {
            return <div>Loading.....</div>
        }
        return (
            <div>
              
                <Navbar />
                <h1 className="h1-files h1">Menu</h1>
                <h2 className="h2-menu">Entradas</h2>
                {dishes.map((dish, index) => {
                  if (dish.subcategory === 'Entradas') {
                    return <Dish category={dish.category} key={index} description={dish.description} quantity={dish.quantity} price={dish.price} id={dish._id}/>
                  }
                })}

                <h2 className="h2-menu">Primeros</h2>
                {dishes.map((dish, index) => {
                  if (dish.subcategory === 'Primeros') {
                    return <Dish category={dish.category} key={index} description={dish.description} quantity={dish.quantity} price={dish.price} id={dish._id}/>
                  }
                })}

                <h2 className="h2-menu">Segundos</h2>
                {dishes.map((dish, index) => {
                  if (dish.subcategory === 'Segundos') {
                    return <Dish category={dish.category} key={index} description={dish.description} quantity={dish.quantity} price={dish.price} id={dish._id}/>
                  }  
                })}
                <Link to='/done'>Done</Link>
                <FooterNav logout={this.props.logout}/>
            </div>
        );
    }
}

export default Menu;