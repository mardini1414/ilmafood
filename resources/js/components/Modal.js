import React from 'react';

function Modal({ id }) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content border-0">
          <div className="modal-header bg-success d-flex justify-content-center">
            <i
              className="fa-regular fa-circle-check text-white"
              style={{ fontSize: '4rem' }}
            ></i>
          </div>
          <div className="modal-body text-center">
            <h4 className="text-dark">Berhasil!</h4>
            <p className="text-muted">
              Selamat anda berhasil memesan dengan no ID {id}. Selanjutnya
              siapkan uang dan silahkan menunggu, pesanan akan segera kami antar
              ke tempat anda. Terimakasih!
            </p>
          </div>
          <div className="modal-footer border-0 d-flex justify-content-center">
            <button className="btn btn-sm btn-danger" data-bs-dismiss="modal">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
