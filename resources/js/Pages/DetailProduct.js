import React from 'react';
import MainLayout from './MainLayout';
import { useForm, usePage, Link } from '@inertiajs/inertia-react';

function DetailProduct(props) {
  const { id, image, name, price, discounts, category, stock, description } =
    props;

  const { flash } = usePage().props;

  const { post, data, setData } = useForm({
    productId: id,
    quantity: 1,
  });

  function addQty() {
    setData('quantity', data.quantity + 1);
    if (data.quantity >= stock) {
      setData('quantity', stock);
    }
  }

  function reduceQty() {
    setData('quantity', data.quantity - 1);
    if (data.quantity <= 1) {
      setData('quantity', 1);
    }
  }

  function addToCart() {
    post('/cart');
  }

  return (
    <MainLayout>
      <div className="p-2 w-100" style={{ height: '100vh', fontSize: '1rem' }}>
        <div>
          <img
            src={`/storage/${image}`}
            alt={name}
            width="100%"
            height={200}
            className="image-fit rounded"
          />
        </div>
        {flash.message && (
          <div className="alert alert-warning mt-2">
            {flash.message} cek{' '}
            <Link href="/cart" className="text-warning">
              disini
            </Link>
          </div>
        )}
        <div className="my-2 bg-white p-1 rounded">
          <div className="d-flex justify-content-between">
            <h6 className="text-dark fw-bold">Detail Produk</h6>
            <div className="d-flex">
              <div
                className="px-2 py-0 text-muted border pointer rounded-start"
                onClick={reduceQty}
              >
                -
              </div>
              <div className="px-2 py-0 text-muted border-top border-bottom">
                {data.quantity}
              </div>
              <div
                className="px-2 py-0 text-muted border pointer rounded-end"
                onClick={addQty}
              >
                +
              </div>
            </div>
          </div>
          <span className="d-block text-muted pb-2">{name}</span>
          <div className="d-flex">
            <div className="w-50">
              <span className="d-block py-1 text-muted">Harga</span>
              <span className="d-block py-1 text-muted">Potongan</span>
              <span className="d-block py-1 text-muted">Kategori</span>
              <span className="d-block py-1 text-muted">Stok</span>
            </div>
            <div className="w-50">
              <span className="d-block py-1 text-dark">{price}</span>
              <span className="d-block py-1 text-dark">{discounts}</span>
              <span className="d-block py-1 text-dark">{category}</span>
              <span className="d-block py-1 text-dark">{stock}</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-1 rounded">
          <h6 className="text-dark fw-bold">Deskripsi</h6>
          <p className="text-muted" style={{ paddingBottom: '6rem' }}>
            {description}
          </p>
        </div>
      </div>
      <div
        className="position-fixed start-50 translate-middle bg-white rounded-pill shadow d-flex align-items-center"
        style={{ bottom: '3.5rem' }}
      >
        <button
          className="btn btn-sm bg-orange rounded-pill text-light text-small"
          onClick={addToCart}
        >
          <i className="fa-solid fa-cart-plus"></i> Tambah
        </button>
      </div>
    </MainLayout>
  );
}

export default DetailProduct;
