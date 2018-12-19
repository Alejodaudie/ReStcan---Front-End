import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';
import orderService from '../lib/order-service';
import Dish from '../components/Dish';
import OrderList from '../components/OrderList';

class Menu extends Component {

    state = {
        dishes: [],
        order: [],
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
    
    handleArrows = (description, value) => {
      const {dishes} = this.state;
      const index = dishes.map(function(dish) { return dish.description; }).indexOf(description);
      dishes[index].quantity = value;
      this.setState({
        dishes,
      })
    }


    handleAddToList = dish => {
      dish = Object.assign({}, dish)
      if(dish.quantity > 0) {
        let {order, dishes} = this.state;
        this.resetDishQuantity(dishes, dish);
        this.updateDishList(order, dish);
        this.setState({
          dishes,
          order,
        })
      }
    }

    resetDishQuantity = (dishes, dish) => {
      const index = dishes.map(function(dish) { return dish.description; }).indexOf(dish.description);
      dishes[index].quantity = 0;
    }

    updateDishList = (order, dish) => {
      const index = order.map(function(dish) { return dish.description; }).indexOf(dish.description);
        if(index === -1) {
          order.push(dish);
        } else {
          order[index].quantity += dish.quantity;
        }
      return order
    }


    handleDelete = index => {
      let { order } = this.state;
      order.splice(index,1)
      this.setState({
        order,
      });
    }


    render() {
        const {order, dishes, isLoading} = this.state;
        if (isLoading) {
            return <div>Loading.....</div>
        }
        return (
            <div>
              
                <Navbar />
                <h1 className="h1-files h1">Menu</h1>

                  <div className="columns" id="columns">
                
                  <div>
                  <OrderList order={order} 
                            handleDelete={this.handleDelete} 
                  />
                  </div>
                  </div>
               <div className="div-subcategories">
                 <h2 className="h2-menu">Entradas</h2>
                {dishes.map((dish, index) => {
                  if (dish.subcategory === 'Entradas') {
                    return <Dish 
                            index={dish.description}  
                            key={index} 
                              dish={dish} 
                              handleArrows={this.handleArrows}
                              handleAddToList={this.handleAddToList}
                            />
                  }
                })}
              </div> 

                <div className="div-subcategories">
                  <h2 className="h2-menu">Primeros</h2>
                {dishes.map((dish, index) => {
                  if (dish.subcategory === 'Primeros') {
                    return <Dish 
                            index={dish.description}
                            key={index} 
                            dish={dish} 
                            handleArrows={this.handleArrows}
                            handleAddToList={this.handleAddToList}
                          />
                  }
                })}
                </div>
                
                <div className="div-subcategories">
                  <h2 className="h2-menu">Segundos</h2>
                {dishes.map((dish, index) => {
                  if (dish.subcategory === 'Segundos') {
                    return <Dish 
                            index={dish.description}  
                            key={index} 
                              dish={dish} 
                              handleArrows={this.handleArrows}
                              handleAddToList={this.handleAddToList}      
                            />
                  }  
                })}
                </div>
                
                <FooterNav logout={this.props.logout}/>
            </div>
        );
    }
}

export default Menu;
