import React, { Component } from 'react';
// import orderService from '../lib/order-service';

class Dish extends Component {

    // state = {
    //     quantity: this.props.quantity,
    //     id: this.props.id,
    //   }

    //   handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     const { quantity, id } = this.state
    
    //     orderService.addDish({ quantity, id })
    //     .then( (user) => { console.log('heyy')
    //     })
    //     .catch( error => console.log(error) )
    //   }

    // handleChange = (event) => {  
    // const {name, value} = event.target;
    // this.setState({[name]: value});
    // }


    handleArrows = event => {
      console.log('hey')
        const {handleArrows, index} = this.props;
        handleArrows(index, parseInt(event.target.value));
      }
    
      handleAddToList = () => {
        const {dish} = this.props;
        this.props.handleAddToList(dish);
      }

    render() {
        const {category, description, price, quantity} = this.props.dish;
        return (
            <div className="div-dish"> 
              <p className="p-dish-category">{category}</p>
              <p className="p-dish">{description}</p>
              <p className="p-dish">{price} €</p>
              <input className="input" type="number" placeholder="Alejo poner 0" value={quantity} min="0" onChange={this.handleArrows}/>
              <button className="button is-info" onClick={this.handleAddToList}>+</button>
            </div>
        );
    }
}

export default Dish;