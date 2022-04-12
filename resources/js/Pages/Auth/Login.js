import React from 'react';
import { Link, useForm, Head } from '@inertiajs/inertia-react';

function Login({ flash }) {
  const { data, setData, post, errors, processing } = useForm({
    email: '',
    password: '',
  });

  function submit(e) {
    e.preventDefault();
    post('/login');
  }

  return (
    <div className="container-fluid">
      <Head>
        <title>Login</title>
      </Head>
      <div className="row justify-content-center" style={{ height: '100vh' }}>
        <div className="bg-light" style={{ maxWidth: 414 }}>
          <div className="d-flex justify-content-between px-2">
            <Link href="/" className="text-dark d-block py-2">
              <i className="fa-solid fa-arrow-left-long"></i>
            </Link>
            <Link
              href="/register"
              className="text-orange text-decoration-none d-block py-2"
            >
              Daftar
            </Link>
          </div>
          {flash.message && (
            <div className="alert alert-danger">{flash.message}</div>
          )}
          <h1 className="text-center text-muted mt-5">Login</h1>
          <form onSubmit={submit} className="d-grid gap-2 w-100 px-2">
            <label htmlFor="username" className="text-dark">
              Email
            </label>
            <input
              type="email"
              value={data.email}
              className="form-control rounded-pill border-orange"
              id="username"
              onChange={(e) => setData('email', e.target.value)}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
            <label htmlFor="password" className="text-dark">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
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
              Login
            </button>
          </form>
          <span className="d-block text-muted mt-3">
            Belum punya akun? <Link href="/register">daftar</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
