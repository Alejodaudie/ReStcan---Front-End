import React, { Component } from 'react';
import OrderItem from './OrderItem';

class OrderList extends Component {

    totalPrice = order => {
        let totalPrice = 0;
        order.forEach( (dish) => {
        totalPrice += (dish.quantity * dish.price);
        });
        return totalPrice;
    }

    render() {
        const {order, handleDelete} = this.props;
        return (
            <div className="div-order-list">
                <h1 className="subtitle is-2">Today's dishes</h1>
                { order.map( (dish, index) => {
                return <OrderItem 
                            key={index} 
                            dish={dish} 
                            index={index} 
                            handleDelete={handleDelete}
                        />
                })}
                <p>{`Total: ${this.totalPrice(order)} €`}</p>
            </div>
        );
    }
}

export default OrderList;
