import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';

function NavLink({ title, link }) {
  const { url } = usePage();
  return (
    <Link
      className={`nav-link ${url === link ? 'text-light' : 'text-secondary'}`}
      href={link}
    >
      {title}
    </Link>
  );
}

export default NavLink;
