import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';

function Navigation() {
  const { url } = usePage();
  return (
    <div className="w-100 position-fixed bottom-0 start-50 translate-middle-x">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="navigation col-12 bg-white d-flex align-items-center justify-content-around border-top"
            style={{ maxWidth: 414 }}
          >
            <Link href="/">
              <i
                className={`fa-solid fa-house ${
                  url == '/' ? 'text-orange' : 'text-muted'
                }`}
              ></i>
            </Link>
            <Link href="/order">
              <i
                className={`fa-solid fa-rectangle-list ${
                  url == '/order' ? 'text-orange' : 'text-muted'
                }`}
              ></i>
            </Link>
            <Link href="/chat">
              <i
                className={`fa-solid fa-message ${
                  url == '/chat' ? 'text-orange' : 'text-muted'
                }`}
              ></i>
            </Link>
            <Link href="/profile">
              <i
                className={`fa-solid fa-user ${
                  url == '/profile' ? 'text-orange' : 'text-muted'
                }`}
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
