import axios from 'axios';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Order } from './Order';
import './Orders.css';

export function Orders({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders?expand=products')
      .then((response) => {
        setOrders(response.data);
      });
  }, []);

  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <Order order={order} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}