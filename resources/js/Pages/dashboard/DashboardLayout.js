import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function DashboardLayout({ children }) {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          ILMAFOOD
        </a>
        <div className="d-flex">
          <div>
            <span className="text-white me-1">Admin</span>
            <i className="fa-solid fa-circle-user text-white"></i>
          </div>
          <div className="mx-3">
            <span className="text-white me-1">Logout</span>
            <i className="fa-solid fa-arrow-right-from-bracket text-white"></i>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/dashboard/product">
                    Produk
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Orderan
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pesan
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ms-sm-auto col-lg-10">{children}</main>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
