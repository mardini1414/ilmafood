import React from 'react';

function Toast(props) {
  return (
    <>
      <div
        id="my-toast"
        className="toast position-fixed align-items-center text-white bg-success border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{ bottom: 20, right: 20 }}
      >
        <div className="d-flex">
          <div className="toast-body">{props.message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          />
        </div>
      </div>
    </>
  );
}

export default Toast;
