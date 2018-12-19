import React, { Component } from 'react';
// import orderService from '../lib/order-service';

class Dish extends Component {

    handleArrows = event => {
        const {handleArrows, index} = this.props;
        handleArrows(index, parseInt(event.target.value));
      }
    
      handleAddToList = () => {
        const {dish} = this.props;
        this.props.handleAddToList(dish);
      }

    render() {
        const {category, description, price} = this.props.dish;
        return (
            <div className="div-dish"> 
              <p className="p-dish-category">{category}</p>
              <p className="p-dish">{description}</p>
              <p className="p-dish">{price} €</p>
              <input className="input input-dish " type="number" placeholder="0" min="0" onChange={this.handleArrows}/>
              <button className="button button-plus" onClick={this.handleAddToList}>+</button>
            </div>
        );
    }
}

export default Dish;