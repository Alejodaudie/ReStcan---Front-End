import React, { Component } from 'react';
import OrderItem from './OrderItem';
import { Link, Redirect } from 'react-router-dom';
import OrderService from '../lib/order-service'

class OrderList extends Component {

    state = {
        redirect: false,
        order: null
    }


    totalPrice = order => {
        let totalPrice = 0;
        order.forEach( (dish) => {
        totalPrice += (dish.quantity * dish.price);
        });
        return totalPrice;
    }

     handleSubmitOrder = (order) => {
         console.log(order)
        OrderService.saveOrder(order)
            .then((result)=> {
                this.setState({
                    redirect: true,
                    order: result
                })
            })

          .catch( error => console.log(error) )
      }

    render() {
        const {order, handleDelete} = this.props; 
        if (this.state.redirect){
           return <Redirect
           to={{
             pathname: `/done/${this.state.order._id}`,
           }}
         />
        }
        return (
            <div className="div-order-list">
                <h1 className="subtitle is-2">Your order</h1>
                { order.map( (dish, index) => {
                return <OrderItem 
                            key={index} 
                            dish={dish} 
                            index={index} 
                            handleDelete={handleDelete}
                        />
                })}
                <p className="p-orderlist">{`Total: ${this.totalPrice(order)} €`}</p>
                <input className="button" type="submit" value="Done" onClick={() => this.handleSubmitOrder(order)}/>

            </div>
        );
    }
}

export default OrderList;
