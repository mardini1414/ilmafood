import React from 'react';
import { Link, useForm } from '@inertiajs/inertia-react';

function Register({ flash }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    name: '',
    email: '',
    password: '',
  });

  function submit(e) {
    e.preventDefault();
    post('/register', {
      onSuccess: () => reset(),
    });
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ height: '100vh' }}>
        <div className="bg-light" style={{ maxWidth: 414 }}>
          <div className="d-flex justify-content-between px-2">
            <Link href="/" className="text-dark d-block py-2">
              <i className="fa-solid fa-arrow-left-long"></i>
            </Link>
            <Link
              href="/login"
              className="text-orange text-decoration-none d-block py-2"
            >
              Login
            </Link>
          </div>
          {flash.message && (
            <div className="alert alert-success">{flash.message}</div>
          )}
          <h1 className="text-center text-muted mt-5">Daftar</h1>
          <form onSubmit={submit} className="d-grid gap-2 w-100 px-2">
            <label htmlFor="name" className="text-dark">
              Nama
            </label>
            <input
              type="text"
              value={data.name}
              className="form-control rounded-pill border-orange"
              id="name"
              onChange={(e) => setData('name', e.target.value)}
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
            <label htmlFor="email" className="text-dark">
              Email
            </label>
            <input
              type="email"
              value={data.email}
              className="form-control rounded-pill border-orange"
              id="email"
              onChange={(e) => setData('email', e.target.value)}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
            <label htmlFor="password" className="text-dark">
              Password
            </label>
            <input
              type="password"
              value={data.password}
              className="form-control rounded-pill border-orange"
              id="password"
              onChange={(e) => setData('password', e.target.value)}
            />
            {errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
            <button
              type="submit"
              className="btn bg-orange text-white mt-3 rounded-pill"
              disabled={processing}
            >
              Daftar
            </button>
          </form>
          <span className="d-block text-muted mt-3">
            Sudah punya akun? <Link href="/login">login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
