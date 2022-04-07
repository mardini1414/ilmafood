import React from 'react';
import Makanan from '../../images/makanan.webp';
import Minuman from '../../images/minuman.webp';

function Category() {
  return (
    <div className="my-3 px-2">
      <h6 className="text-small text-dark">Kategori pilihan</h6>
      <div className="d-flex justify-content-center">
        <div className="bg-orange w-100 py-2 px-3 rounded d-flex flex-wrap justify-content-center align-items-center me-2">
          <h6 className="text-light text-small fw-bold me-3">Makanan</h6>
          <img src={Makanan} alt="makanan" width={60} />
        </div>
        <div className="bg-orange w-100 py-2 px-3 rounded d-flex flex-wrap justify-content-center align-items-center">
          <h6 className="text-light text-small fw-bold me-3">Minuman</h6>
          <img src={Minuman} alt="minuman" width={60} />
        </div>
      </div>
    </div>
  );
}

export default Category;
