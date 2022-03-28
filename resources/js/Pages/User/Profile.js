import React, { useState, useEffect } from 'react';
import { Link, useForm } from '@inertiajs/inertia-react';
import MainLayout from '../MainLayout';

function Profile(props) {
  const [clicked, setClicked] = useState(false);
  const { name, email, phone_number, address, avatar } = props.user;
  const { data, setData, post, errors } = useForm({
    phone_number: phone_number || '',
    address: address || '',
    avatar: null,
    oldAvatar: avatar,
    _method: 'put',
  });

  useEffect(() => {
    data.oldAvatar = avatar;
  }, [avatar]);

  function updateProfile() {
    post('/profile', {
      onSuccess: () => {
        setClicked(false);
      },
    });
  }

  return (
    <MainLayout>
      <div className="pb-5" style={{ height: '100vh' }}>
        <div className="p-2">
          <div className="text-center pt-5 bg-orange rounded">
            <div
              className="position-relative rounded-circle overflow-hidden mx-auto"
              style={{ width: 'max-content' }}
            >
              <img
                src={`/storage/${avatar}`}
                alt="avatar"
                width={120}
                height={120}
                className="rounded-circle image-fit"
              />
              <label
                htmlFor="avatar"
                className={`position-absolute start-50 translate-middle w-100 py-1 ${
                  clicked ? '' : 'd-none'
                }`}
                style={{
                  bottom: -15,
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                }}
              >
                <i className="fa-solid fa-pencil text-muted"></i>
              </label>
            </div>
            {errors.avatar && (
              <div className="text-small text-danger">{errors.avatar}</div>
            )}
            <input
              type="file"
              className="visually-hidden"
              id="avatar"
              onChange={(e) => setData('avatar', e.target.files[0])}
            />
            <span className="d-block py-3 fw-bold text-dark">{name}</span>
          </div>
        </div>
        <div className="px-2">
          <div className="d-grid gap-2 p-2 bg-white rounded">
            <strong className="text-dark">No telepon</strong>
            {clicked ? (
              <input
                type="number"
                value={data.phone_number}
                className="form-control"
                onChange={(e) => setData('phone_number', e.target.value)}
              />
            ) : (
              <span className="text-muted">
                {phone_number || 'No telepon belum di isi'}
              </span>
            )}
            {errors.phone_number && (
              <div className="text-danger text-small">
                {errors.phone_number}
              </div>
            )}
            <strong className="text-dark">Email</strong>
            <span className="text-muted">{email}</span>
            <strong className="text-dark">Alamat</strong>
            {clicked ? (
              <textarea
                value={data.address}
                className="form-control"
                onChange={(e) => setData('address', e.target.value)}
              ></textarea>
            ) : (
              <p className="text-muted">{address || 'Alamat belum di isi'}</p>
            )}
            {errors.address && (
              <div className="text-danger text-small">{errors.address}</div>
            )}
          </div>
        </div>
        <div className="p-2">
          <div className="d-grid gap-2 p-2 bg-white rounded">
            {clicked ? (
              <div className="d-flex gap-2">
                <button
                  className="btn btn-sm btn-secondary pointer"
                  onClick={() => {
                    setClicked(!clicked);
                    for (let key in errors) {
                      delete errors[key];
                    }
                  }}
                >
                  Tutup
                </button>
                <button
                  className="btn btn-sm btn-success pointer"
                  onClick={updateProfile}
                >
                  Simpan
                </button>
              </div>
            ) : (
              <div className="pointer" onClick={() => setClicked(!clicked)}>
                <div>
                  <i className="fa-solid fa-gear me-2"></i>
                  <strong className="pointer">Pengaturan</strong>
                </div>
              </div>
            )}
            <Link href="/logout" className="text-danger text-decoration-none">
              <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
              <strong>Keluar</strong>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Profile;
