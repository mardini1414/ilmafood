import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function Announcement() {
  return (
    <div className="px-2">
      <div className="px-2 py-1 rounded mt-2 d-flex justify-content-between align-items-center bg-white">
        <span className="text-small text-muted">
          Ilmafood sekarang lagi bagi bagi hadiah loh, Buruan cek sekarang.{' '}
          <Link className="text-orange text-decoration-none">
            <span>Cek sekarang</span>
          </Link>
        </span>
        <i
          className="fa-solid fa-box-open text-orange"
          style={{ fontSize: '1.8rem' }}
        ></i>
      </div>
    </div>
  );
}

export default Announcement;
