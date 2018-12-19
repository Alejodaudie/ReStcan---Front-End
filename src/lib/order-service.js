import axios from 'axios';

class Order {
  constructor() {
    this.order = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    });
  }

  listDishes() {
    return this.order.get('/order')
    .then(response => response.data)
  } 


  addDish() {
    return this.order.post('/order/add')
    .then(response => response.data)
  }

  saveOrder(order) {
    return this.order.post('/order/save', order)
    .then(response => response.data)
  }

  getOrder(id) {
    return this.order.get(`/order/${id}`)
    .then(response => response.data)
  }

  listRestaurant() {
    return this.order.get('/order/restaurant')
    .then(response => response.data)
  } 


//   signup(user) {
//     const { username, password } = user;
//     return this.order.post('/order/signup', {username, password})
//       .then(({ data }) => data);
//   }

//   login(user) {
//     const { username, password } = user;
//     return this.order.post('/order/login', {username, password})
//       .then(({ data }) => data);
//   }

//   logout() {
//     return this.order.post('/order/logout', {})
//       .then(response => response.data)
//   }

//   me() {
//     return this.order.get('/order/me')
//     .then(response => response.data)
//   }
}

const orderService = new Order();

export default orderService