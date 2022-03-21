import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function Navigation() {
  return (
    <div className="w-100 position-fixed bottom-0 start-50 translate-middle-x">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="navigation col-12 bg-white d-flex align-items-center justify-content-around border-top"
            style={{ maxWidth: 414 }}
          >
            <Link href="/">
              <i className="fa-solid fa-house text-secondary"></i>
            </Link>
            <Link href="/order">
              <i className="fa-solid fa-rectangle-list text-secondary"></i>
            </Link>
            <Link href="/chat">
              <i className="fa-solid fa-message text-secondary"></i>
            </Link>
            <Link href="/profile">
              <i className="fa-solid fa-user text-secondary"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
