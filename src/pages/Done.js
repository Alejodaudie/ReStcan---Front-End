import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar';
import orderService from '../lib/order-service';
import OrderItem from '../components/OrderItem';

class Done extends Component {

    state = {
        order: null,
        isLoading: true
    }

    totalPrice = order => {
        let totalPrice = 0;
        order.forEach( (dish) => {
        totalPrice += (dish.qty * dish.dish.price);
        });
        return totalPrice;
    }


    componentDidMount() {
        orderService.getOrder(this.props.match.params.id)
          .then((results) => {
            this.setState({
              order: results,
              isLoading: false,
            })
          })
      }

    render() {
        const { order, isLoading } = this.state;
        if (isLoading) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <Navbar />
                <div className="div-done">
                    <h1 className="h1-files h1">Done!</h1>
                    {/* <input className="button" type="submit" value="+ food" /> */}
                    <Link to='/bill'><input className="button" type="submit" value="Bill" /></Link> 
                </div>
                <div className="div-2done">
                    <ul>
                    {order.map((dish, index) => {
                        console.log(dish)
                            return <li key={index}>{`${dish.qty} ${dish.dish.description} = ${dish.dish.price * dish.qty} €`}</li>
                    })}
                    </ul>
                    <p className="p-done">{`Total: ${this.totalPrice(order)} €`}</p>
                </div>
                
                <FooterNav logout={this.props.logout}/>
            </div>
        );
    }
}

export default Done;