import React, { useState, useRef } from 'react';
import DashboardLayout from './DashboardLayout';
import { useForm, usePage } from '@inertiajs/inertia-react';
import Toast from '../../components/Toast';
import showToast from '../../helper/showtoast';

function CreateProduct() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { flash } = usePage().props;
  const createForm = useRef();

  const { setData, post, errors, reset, processing } = useForm({
    name: '',
    stock: null,
    price: null,
    discounts: null,
    category: 'makanan',
    description: '',
    image: null,
  });

  function imageChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    setData('image', e.target.files[0]);
  }

  function submit(e) {
    e.preventDefault();
    post('/dashboard/product', {
      onSuccess: () => {
        showToast();
        createForm.current.reset();
        reset();
        setSelectedImage(null);
      },
    });
  }

  return (
    <DashboardLayout>
      <form
        ref={createForm}
        onSubmit={submit}
        className="col-md-6 d-grid gap-2 mt-3 p-3 shadow rounded"
      >
        <h6>Tambah produk</h6>
        <input
          type="text"
          placeholder="Nama produk"
          className="form-control"
          onChange={(e) => setData('name', e.target.value)}
        />
        {errors.name && <div className="text-danger">{errors.name}</div>}
        <input
          type="number"
          placeholder="Harga"
          className="form-control"
          onChange={(e) => setData('price', e.target.value)}
        />
        {errors.price && <div className="text-danger">{errors.price}</div>}
        <input
          type="number"
          placeholder="Potongan"
          className="form-control"
          onChange={(e) => setData('discounts', e.target.value)}
        />
        {errors.discounts && (
          <div className="text-danger">{errors.discounts}</div>
        )}
        <input
          type="number"
          placeholder="Stok"
          className="form-control"
          onChange={(e) => setData('stock', e.target.value)}
        />
        {errors.stock && <div className="text-danger">{errors.stock}</div>}
        <textarea
          className="form-control"
          placeholder="Deskripsi"
          onChange={(e) => setData('description', e.target.value)}
        ></textarea>
        {errors.description && (
          <div className="text-danger">{errors.description}</div>
        )}
        <div className="d-flex gap-3">
          <input
            className="form-check-input"
            name="category"
            type="radio"
            id="makanan"
            value="makanan"
            defaultChecked
            onChange={(e) => setData('category', e.target.value)}
          />
          <label className="form-check-label" htmlFor="makanan">
            Makanan
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="category"
            id="minuman"
            value="minuman"
            onChange={(e) => setData('category', e.target.value)}
          />
          <label className="form-check-label" htmlFor="minuman">
            Minuman
          </label>
        </div>
        {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Thumb"
            width={300}
            height={300}
            className="image-fit rounded"
          />
        )}
        <input
          type="file"
          className="form-control form-control-sm"
          onChange={imageChange}
        />
        {errors.image && <div className="text-danger">{errors.image}</div>}
        <button className="btn btn-primary" type="submit" disabled={processing}>
          {processing ? (
            <span className="spinner-border spinner-border-sm"></span>
          ) : (
            'Tambah'
          )}
        </button>
      </form>
      <Toast message={flash.message && flash.message} />
    </DashboardLayout>
  );
}

export default CreateProduct;
