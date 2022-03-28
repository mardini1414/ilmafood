import React from 'react';
import MainLayout from '../MainLayout';

function Order(props) {
  const { orders } = props;

  function showDetail(index) {
    const orderItem = document.getElementById(`order-item${index}`);
    const orderUser = document.getElementById(`order-user${index}`);
    orderItem.classList.toggle('show-detail');
    orderUser.classList.toggle('show-detail');
  }

  return (
    <MainLayout>
      <div className="px-2 pt-2 pb-5" style={{ height: '100vh' }}>
        <div className="pb-5">
          {orders.length > 0 ? (
            orders.map((order, index) => {
              return (
                <div className="bg-white rounded px-2 py-2 my-3" key={index}>
                  <div className="d-flex justify-content-between">
                    <strong>{order.delivery_id}</strong>
                    <span className="text-muted">
                      {order.created_at.slice(0, 9)}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between pt-2">
                    <strong className="text-danger">
                      Rp.{order.total_payment}
                    </strong>
                    <div className="status-order-finised rounded">
                      {order.status}
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="text-muted">
                      <div
                        style={{ width: 'max-content' }}
                        onClick={() => showDetail(index)}
                      >
                        <i className="fa-solid fa-angle-down pointer"></i>
                      </div>
                    </div>
                    <div className="hide-detail" id={`order-item${index}`}>
                      {order.orderproduct.map((el, index) => {
                        return (
                          <div
                            className="d-flex justify-content-between"
                            key={index}
                          >
                            <div className="d-flex align-items-start gap-2 py-2">
                              <img
                                src={`/storage/${el.product.image}`}
                                alt={el.product.name}
                                width={70}
                                height={70}
                                className="image-fit rounded"
                              />
                              <span className="text-muted">
                                {el.product.name}
                              </span>
                            </div>
                            <div className="d-flex flex-column justify-content-between text-end">
                              <span className="text-muted">
                                Qty : {el.quantity}
                              </span>
                              <span className="text-danger text-decoration-line-through">
                                Rp.{el.product.price}
                              </span>
                              <span className="text-muted">
                                Rp.{el.product.price - el.product.discounts}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className="d-grid gap-1 hide-detail"
                    id={`order-user${index}`}
                  >
                    <span className="text-muted">Nama : {order.user_name}</span>
                    <span className="text-muted">
                      No Hp : {order.user_phone_number}
                    </span>
                    <span className="text-muted">Alamat</span>
                    <div className="p-2 bg-light text-muted rounded">
                      {order.user_address}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: '80vh' }}
            >
              <i
                className="fa-solid fa-rectangle-list text-muted"
                style={{ fontSize: '8rem' }}
              ></i>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default Order;
