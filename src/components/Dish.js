import React, { Component } from 'react';
import orderService from '../lib/order-service';

class Dish extends Component {

    state = {
        quantity: this.props.quantity,
        id: this.props.id,
      }

      handleFormSubmit = (event) => {
        event.preventDefault();
        const { quantity, id } = this.state
    
        orderService.addDish({ quantity, id })
        .then( (user) => { console.log('heyy')
        })
        .catch( error => console.log(error) )
      }

    handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    }

    render() {
        const {quantity} = this.state
        return (
            <div>
                <form className="form-dish">
                    <input className="button-dish" type="submit" value="+" />
                    <p className="p-dish-category">{this.props.category}</p>
                    <p className="p-dish">{this.props.description}</p>
                    <p className="p-dish">{this.props.price} €</p>
                    <input className="input-dish" type="number" name="quantity" value={quantity} onChange={this.handleChange}/>
                    
                </form>
            </div>
        );
    }
}

export default Dish;