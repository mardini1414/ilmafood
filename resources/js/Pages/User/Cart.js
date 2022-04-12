import React from 'react';
import MainLayout from '../MainLayout';
import { useForm, usePage, Link, Head } from '@inertiajs/inertia-react';

function Cart(props) {
  const { carts, total, shippingCost, totalPayment } = props;
  const { delete: destroy, post } = useForm();
  const { flash } = usePage().props;

  return (
    <MainLayout>
      <Head>
        <title>Keranjang saya</title>
      </Head>
      <div className="p-2" style={{ height: '100vh' }}>
        <div className="rounded">
          {carts.map((cart, index) => {
            return (
              <div
                className="bg-white d-flex rounded mb-2 position-relative"
                key={index}
              >
                <div className="p-1">
                  <img
                    src={`/storage/${cart.product.image}`}
                    alt={cart.product.name}
                    width={90}
                    height={90}
                    className="image-fit rounded"
                  />
                </div>
                <div className="p-1 d-flex flex-column justify-content-between">
                  <span className="text-muted">{cart.product.name}</span>
                  <div>
                    <span className="d-block text-danger text-decoration-line-through">
                      Rp.{cart.product.price}
                    </span>
                    <strong className="d-block text-dark">
                      Rp.{cart.product.price - cart.product.discounts}
                    </strong>
                  </div>
                </div>
                <span
                  className="position-absolute text-muted"
                  style={{ bottom: 5, right: 5 }}
                >
                  {cart.quantity}
                </span>
              </div>
            );
          })}
          {flash.message && (
            <div className="alert alert-warning mt-2">
              {flash.message} cek{' '}
              <Link href="/profile" className="text-warning">
                disini
              </Link>
            </div>
          )}
          {carts.length > 0 ? (
            <>
              <div>
                <div className="bg-white d-flex justify-content-between p-2">
                  <span className="text-dark">Harga total</span>
                  <span className="text-muted">Rp.{total}</span>
                </div>
                <div className="bg-white d-flex justify-content-between p-2">
                  <span className="text-dark">Ongkos Kirim</span>
                  <span className="text-muted">Rp.{shippingCost}</span>
                </div>
                <div className="bg-white rounded d-flex justify-content-between py-3 px-2">
                  <strong className="text-dark">total pembayaran</strong>
                  <strong className="text-orange">Rp.{totalPayment}</strong>
                </div>
              </div>
              <div
                className="d-flex justify-content-end pt-3 px-1"
                style={{ paddingBottom: '5rem' }}
              >
                <button
                  className="btn btn-sm btn-danger me-2"
                  onClick={() => destroy('/cart')}
                >
                  Hapus
                </button>
                <button
                  className="btn btn-sm bg-orange text-light"
                  onClick={() => post('/order')}
                >
                  Pesan
                </button>
              </div>
            </>
          ) : (
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ height: '100vh' }}
            >
              <i
                className="fa-solid fa-cart-shopping text-muted"
                style={{ fontSize: '8rem' }}
              ></i>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default Cart;
