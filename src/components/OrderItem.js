import React, { Component } from 'react';

class OrderItem extends Component {

handleDelete = () => {
    const {index} = this.props;
    this.props.handleDelete(index);
  }

    render() {
        const {dish} = this.props;
        return (
            <div>
                <li>{`${dish.quantity} ${dish.description} = ${dish.price * dish.quantity} €`}</li>
                <div className="img-container">
                <input type="image" src={process.env.PUBLIC_URL + "/images/trash.png"} alt="Trash icon" className="trash-icon" onClick={this.handleDelete}/>  
                </div>
            </div>
        );
    }
}

export default OrderItem;


