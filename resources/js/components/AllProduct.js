import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Loading from './Loading';
import formatNumber from '../helper/formatnumber';

function AllProduct({ data, isLoading }) {
  return (
    <div className="mt-3 pb-5 mb-3 px-2">
      <h6 className="text-small text-dark">Semua produk</h6>
      <div className="row gx-1 gy-3">
        {data.map((el) => {
          return (
            <Link
              key={el.id}
              href={`/product/${el.id}`}
              className="col-6 d-block text-decoration-none"
            >
              <div className="bg-white p-1 rounded text-center">
                <img
                  src={`/storage/${el.image}`}
                  alt={el.name}
                  width="100%"
                  height={170}
                  loading="lazy"
                  className="rounded image-fit"
                />
                <div className="d-grid gap-1">
                  <span className="text-muted text-small text-start fw-normal mt-2">
                    {el.name}
                  </span>
                  <span className="text-danger text-decoration-line-through text-start text-small">
                    Rp {formatNumber(el.price)}
                  </span>
                  <div className="d-flex justify-content-between">
                    <strong className="text-dark text-start">
                      Rp {formatNumber(el.price - el.discounts)}
                    </strong>
                    <div
                      className="text-success px-1 rounded-3"
                      style={{ backgroundColor: 'rgba(25, 135, 84, 0.2)' }}
                    >
                      stok {el.stock}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      )}
    </div>
  );
}

export default AllProduct;
