import React from 'react';
import { usePage, Link, useForm } from '@inertiajs/inertia-react';
import DashboardLayout from './DashboardLayout';
import BtnDelProduct from '../../components/BtnDelProduct';
import BtnEditProduct from '../../components/BtnEditProduct';
import BtnDetProduct from '../../components/BtnDetProduct';
import Pagination from '../../components/Pagination';
import Toast from '../../components/Toast';

function Product(props) {
  const { flash } = usePage().props;
  const { links } = props.products;

  const { data, setData, get } = useForm({
    search: '',
  });

  function search() {
    get('/dashboard/product', {
      preserveState: true,
      replace: true,
    });
  }

  return (
    <DashboardLayout>
      <div className="header d-flex pt-3 justify-content-between">
        <div className="col-5">
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              value={data.search}
              type="text"
              className="form-control"
              placeholder="Cari produk"
              onChange={(e) => setData('search', e.target.value)}
              onKeyUp={search}
            />
          </div>
        </div>
        <Link href="/dashboard/product/create" className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> Tambah
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama produk</th>
              <th scope="col">Stok</th>
              <th scope="col">Harga</th>
              <th scope="col">Potongan</th>
              <th scope="col">Kategori</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {props.products.data.map((product, index) => {
              index += 1;
              return (
                <tr key={product.id}>
                  <td>{index}</td>
                  <td>{product.name}</td>
                  <td>{product.stock}</td>
                  <td>{product.price}</td>
                  <td>{product.discounts}</td>
                  <td>{product.category}</td>
                  <td className="d-flex">
                    <BtnDetProduct id={product.id} />
                    <BtnEditProduct id={product.id} />
                    <BtnDelProduct id={product.id} image={product.image} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination links={links} />
      </div>
      <Toast message={flash.message && flash.message} />
    </DashboardLayout>
  );
}

export default Product;
