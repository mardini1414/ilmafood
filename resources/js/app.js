import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
// import "bootstrap";
// import '@popperjs/core';
import '@fortawesome/fontawesome-free/css/all.css';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init({
  color: 'rgb(255, 167, 38)',
});

createInertiaApp({
  resolve: (name) => import(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el);
  },
});
