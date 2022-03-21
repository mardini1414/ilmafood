import React from 'react';
import Navigation from '../components/Navigation';

function MainLayout({ children }) {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-sm-4 bg-light px-0 w-100"
            style={{ maxWidth: 414 }}
          >
            <div className="w-100">{children}</div>
          </div>
        </div>
      </div>
      <Navigation />
    </>
  );
}

export default MainLayout;
