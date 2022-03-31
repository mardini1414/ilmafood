import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
// import "bootstrap";
// import '@popperjs/core';
import '@fortawesome/fontawesome-free/css/all.css';
import { InertiaProgress } from '@inertiajs/progress';
import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.MIX_PUSHER_APP_KEY,
  cluster: process.env.MIX_PUSHER_APP_CLUSTER,
  forceTLS: true,
});

InertiaProgress.init({
  color: 'rgb(255, 167, 38)',
});

createInertiaApp({
  resolve: (name) => import(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el);
  },
});
