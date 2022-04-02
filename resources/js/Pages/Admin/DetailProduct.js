import React from 'react';
import DashboardLayout from './DashboardLayout';

function DetailProduct(props) {
  return (
    <DashboardLayout>
      <div className="card">
        <div className="card-header">
          <h3 className="my-3">Detail produk</h3>
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
            <div className="mx-4" style={{ minWidth: 100 }}>
              <strong>Nama produk </strong>
              <br />
              <strong>Stok</strong>
              <br />
              <strong>Harga</strong>
              <br />
              <strong>Potongan</strong>
              <br />
              <strong>Kategori</strong>
              <br />
              <strong>Deskripsi</strong>
            </div>
            <div className="text-muted">
              <span> {props.product.name}</span>
              <br />
              <span> {props.product.stock}</span>
              <br />
              <span> {props.product.price}</span>
              <br />
              <span> {props.product.discounts}</span>
              <br />
              <span> {props.product.category}</span>
              <br />
              <p>{props.product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DetailProduct;
