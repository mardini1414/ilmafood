import React from 'react';

function Announcement() {
  return (
    <div className="px-2">
      <div className="px-2 py-1 rounded mt-2 d-flex justify-content-between align-items-center bg-white">
        <span className="text-small text-muted">
          Ilmafood sekarang lagi bagi bagi hadiah loh, Buruan cek sekarang.{' '}
          <div className="text-orange text-decoration-none pointer">
            <span
              onClick={() =>
                alert('Nantikan segera \nilmafood created by : Mardini')
              }
            >
              Cek sekarang
            </span>
          </div>
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
