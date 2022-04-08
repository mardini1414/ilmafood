import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function Header({ isEmptyCart }) {
  return (
    <header className="d-flex py-3 px-2 align-items-center">
      <Link
        href="/search"
        className="input-search input-group rounded-pill overflow-hidden border text-decoration-none"
      >
        <span className="input-group-text bg-white border-0">
          <i className="fa-solid fa-magnifying-glass text-muted"></i>
        </span>
        <input
          type="text"
          className="form-control form-control-sm border-0 search-form"
          placeholder="Cari disini"
        />
      </Link>
      <Link href="/cart" className="p-2 position-relative">
        <i className="fa-solid fa-cart-shopping cart-icon text-muted"></i>
        {isEmptyCart == true ? (
          <div
            className="p-1 bg-danger rounded-circle position-absolute"
            style={{ top: 6, right: 5 }}
          ></div>
        ) : null}
      </Link>
    </header>
  );
}

export default Header;
