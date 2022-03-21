import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const PageLink = ({ active, label, url }) => {
  return (
    <div className={`page-item ${active ? 'active' : ''}`}>
      <Link className="page-link" href={url}>
        <span dangerouslySetInnerHTML={{ __html: label }}></span>
      </Link>
    </div>
  );
};

// Previous, if on first page
// Next, if on last page
// and dots, if exists (...)
const PageInactive = ({ label }) => {
  return (
    <div className="page-item">
      <div
        className="page-link text-muted bg-light"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
};

export default ({ links = [] }) => {
  // dont render, if there's only 1 page (previous, 1, next)
  if (links.length === 3) return null;
  return (
    <div className="pagination">
      {links.map(({ active, label, url }) => {
        return url === null ? (
          <PageInactive key={label} label={label} />
        ) : (
          <PageLink key={label} label={label} active={active} url={url} />
        );
      })}
    </div>
  );
};
