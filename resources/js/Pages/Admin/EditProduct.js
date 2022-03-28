import React, { useState, useRef, useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import { useForm, usePage } from '@inertiajs/inertia-react';
import Toast from '../../components/Toast';
import { Toast as MyToast } from 'bootstrap';

function EditProduct(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { flash } = usePage().props;
  const fileInput = useRef();

  const { data, setData, reset, post, errors, processing } = useForm({
    name: props.product.name,
    stock: props.product.stock,
    price: props.product.price,
    discounts: props.product.discounts,
    category: props.product.category,
    description: props.product.description,
    oldImage: props.product.image,
    image: null,
    _method: 'put',
  });

  useEffect(() => {
    data.oldImage = props.product.image;
  }, [props.product.image]);

  function imageChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    setData('image', e.target.files[0]);
  }

  function submit(e) {
    e.preventDefault();
    post(`/dashboard/product/${props.product.id}`, {
      onSuccess: () => {
        showToast();
        reset('image');
        fileInput.current.value = '';
      },
    });
  }

  function showToast() {
    const myToastEl = document.getElementById('my-toast');
    new MyToast(myToastEl).show();
  }

  return (
    <DashboardLayout>
      <form
        onSubmit={submit}
        className="col-md-6 d-grid gap-2 mt-3 p-3 shadow rounded"
      >
        <h6>Edit produk</h6>
        <input
          type="text"
          value={data.name}
          placeholder="Nama produk"
          className="form-control"
          onChange={(e) => setData('name', e.target.value)}
        />
        {errors.name && <div className="text-danger">{errors.name}</div>}
        <input
          type="number"
          value={data.price}
          placeholder="Harga"
          className="form-control"
          onChange={(e) => setData('price', e.target.value)}
        />
        {errors.price && <div className="text-danger">{errors.price}</div>}
        <input
          type="number"
          value={data.discounts}
          placeholder="Potongan"
          className="form-control"
          onChange={(e) => setData('discounts', e.target.value)}
        />
        {errors.discounts && (
          <div className="text-danger">{errors.discounts}</div>
        )}
        <input
          type="number"
          value={data.stock}
          placeholder="Stok"
          className="form-control"
          onChange={(e) => setData('stock', e.target.value)}
        />
        {errors.stock && <div className="text-danger">{errors.stock}</div>}
        <textarea
          value={data.description}
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
            defaultChecked={props.product.category == 'makanan'}
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
            defaultChecked={props.product.category == 'minuman'}
            onChange={(e) => setData('category', e.target.value)}
          />
          <label className="form-check-label" htmlFor="minuman">
            Minuman
          </label>
        </div>
        <img
          src={
            selectedImage
              ? URL.createObjectURL(selectedImage)
              : `/storage/${data.oldImage}`
          }
          alt="Thumb"
          width={300}
          height={300}
          className="image-fit rounded"
        />
        <input
          ref={fileInput}
          type="file"
          className="form-control form-control-sm"
          onChange={imageChange}
        />
        {errors.image && <div className="text-danger">{errors.image}</div>}
        <button className="btn btn-primary" type="submit" disabled={processing}>
          {processing ? (
            <span className="spinner-border spinner-border-sm"></span>
          ) : (
            'Edit'
          )}
        </button>
      </form>
      <Toast message={flash.message && flash.message} />
    </DashboardLayout>
  );
}

export default EditProduct;
