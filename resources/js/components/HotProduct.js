import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function HotProduct({ data }) {
  return (
    <div className="p-2">
      <h6 className="text-small">Produk terlaris</h6>
      <div
        className="d-flex scroll-slide"
        style={{
          overflowX: 'scroll',
        }}
      >
        {data.map((el) => {
          return (
            <Link
              key={el.id}
              href={`/product/${el.id}`}
              className="col-5 d-block text-decoration-none"
            >
              <div className="bg-white p-1 rounded text-center">
                <img
                  src={`/storage/${el.image}`}
                  alt={el.name}
                  width="100%"
                  height={150}
                  loading="lazy"
                  className="rounded image-fit"
                />
                <div className="d-grid gap-1">
                  <div
                    className="text-light bg-danger px-1 rounded-3 mt-3"
                    style={{
                      width: 'max-content',
                    }}
                  >
                    Terlaris
                  </div>
                  <span className="text-muted text-small text-start fw-normal mt-2">
                    {el.name}
                  </span>
                  <span className="text-danger text-decoration-line-through text-start text-small">
                    Rp.{el.price}
                  </span>
                  <div className="d-flex justify-content-between">
                    <strong className="text-dark text-start">
                      Rp.{el.price - el.discounts}
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
    </div>
  );
}

export default HotProduct;
