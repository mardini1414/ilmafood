import React from 'react';
import Makanan from '../../images/makanan.webp';
import Minuman from '../../images/minuman.webp';

function Category() {
  return (
    <div className="mt-1 px-2">
      <h6 className="text-small text-dark">Kategori pilihan</h6>
      <div className="d-flex justify-content-center gap-1">
        <div className="bg-orange w-100 py-2 px-3 rounded d-flex flex-wrap justify-content-center align-items-center gap-3">
          <h6 className="text-light text-small fw-bold">Makanan</h6>
          <img src={Makanan} alt="makanan" width={60} />
        </div>
        <div className="bg-orange w-100 py-2 px-3 rounded d-flex flex-wrap justify-content-center align-items-center gap-3">
          <h6 className="text-light text-small fw-bold">Minuman</h6>
          <img src={Minuman} alt="minuman" width={60} />
        </div>
      </div>
    </div>
  );
}

export default Category;
