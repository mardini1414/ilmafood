import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function Auth({ user }) {
  return (
    <div className="p-2">
      <div className="p-2 bg-white rounded">
        {user ? (
          <span className="text-orange">
            Hai {user}, mau makan apa hari ini?
          </span>
        ) : (
          <div className="d-flex align-items-center">
            <Link
              href="/login"
              className="btn bg-orange text-light d-flex align-items-center"
            >
              <i className="fa-solid fa-lock me-2"></i> Login
            </Link>
            <span className="text-orange ms-2">
              dapatkan diskon sampai 50% untuk penguna baru.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
