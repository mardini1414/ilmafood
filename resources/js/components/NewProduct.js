import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function NewProduct({ data }) {
  const newProduct = data.filter((el, i) => i < 10);
  return (
    <div className="mt-2 px-2">
      <div className="py-1">
        <h6 className="text-dark text-small mb-2">Produk terbaru</h6>
        <div className="scroll-slide d-flex gap-3 pt-2">
          {newProduct.map((el, i) => (
            <Link key={i} className="p-2 position-relative rounded">
              <span className="label-new position-absolute bg-success text-light d-block rounded text-small px-1 py-0">
                New
              </span>
              <img
                src={`/storage/${el.image}`}
                alt={el.name}
                width={50}
                height={50}
                className="rounded d-block image-fit"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
