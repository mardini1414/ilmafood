import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import NavLink from '../../components/NavLink';

function DashboardLayout({ children }) {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          ILMAFOOD
        </a>
        <div className="d-flex">
          <div>
            <span className="text-white me-1">Admin</span>
            <i className="fa-solid fa-circle-user text-white"></i>
          </div>
          <Link href="/logout" className="mx-3 text-decoration-none">
            <span className="text-white me-1">Logout</span>
            <i className="fa-solid fa-arrow-right-from-bracket text-white"></i>
          </Link>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink title="Dashboard" link="/dashboard" />
                </li>
                <li className="nav-item">
                  <NavLink title="Produk" link="/dashboard/product" />
                </li>
                <li className="nav-item">
                  <NavLink title="Pesanan" link="/dashboard/order" />
                </li>
                <li className="nav-item">
                  <NavLink title="Pesan" link="/dashboard/chat" />
                </li>
                <li className="nav-item">
                  <NavLink title="Laporan" link="/dashboard/report" />
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
