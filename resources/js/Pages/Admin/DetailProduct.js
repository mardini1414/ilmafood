import React from 'react';
import DashboardLayout from './DashboardLayout';
import formatNumber from '../../helper/formatnumber';
import { Head } from '@inertiajs/inertia-react';

function DetailProduct(props) {
  return (
    <DashboardLayout>
      <Head>
        <title>Detail produk</title>
      </Head>
      <div className="card mt-3">
        <div className="card-header bg-warning">
          <h3 className="my-3 text-light">Detail produk</h3>
        </div>
        <div className="card-body">
          <div className="d-flex">
            <div style={{ width: 300 }}>
              <img
                src={`/storage/${props.product.image}`}
                alt={props.product.name}
                className="rounded image-fit"
                width={300}
                height={300}
              />
            </div>
            <div className="w-50 mx-4 text-muted" style={{ minWidth: 100 }}>
              <span className="d-block">Nama produk </span>
              <span className="d-block">Stok</span>
              <span className="d-block">Harga</span>
              <span className="d-block">Potongan</span>
              <span className="d-block">Kategori</span>
              <span className="d-block">Deskripsi</span>
            </div>
            <div className="w-50 text-dark">
              <strong className="d-block"> {props.product.name}</strong>
              <strong className="d-block"> {props.product.stock}</strong>
              <strong className="d-block">
                {' '}
                {formatNumber(props.product.price)}
              </strong>
              <strong className="d-block">
                {' '}
                {formatNumber(props.product.discounts)}
              </strong>
              <strong className="d-block"> {props.product.category}</strong>
              <p>{props.product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DetailProduct;
