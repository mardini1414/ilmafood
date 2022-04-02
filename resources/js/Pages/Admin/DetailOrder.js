import React from 'react';
import DashboardLayout from './DashboardLayout';
import modifyTime from '../../helper/modifytime';
import { useForm, usePage } from '@inertiajs/inertia-react';
import showToast from '../../helper/showtoast';
import Toast from '../../components/Toast';

function DetailOrder(props) {
  const { flash } = usePage().props;
  const { order } = props;
  const { put } = useForm({
    status: order.status === 'diproses' ? 'dikirim' : 'diterima',
  });

  function updateStatus() {
    put(`/dashboard/order/${order.id}`, {
      onSuccess: () => showToast(),
    });
  }

  return (
    <DashboardLayout>
      <div className="d-flex">
        <div className="card col-md-6">
          <div className="card-header">
            <h3>Detail pesanan</h3>
          </div>
          <div className="card-body">
            <div className="d-flex gap-4">
              <div className="d-grid gap-1">
                <span className="text-muted">Id pesanan</span>
                <span className="text-muted">Nama</span>
                <span className="text-muted">No telepon</span>
                <span className="text-muted">Tanggal/waktu</span>
                <span className="text-muted">Status</span>
                <span className="text-muted">Total Pembayaran</span>
              </div>
              <div className="d-grid gap-1 px-0">
                <strong className="text-dark">{order.delivery_id}</strong>
                <strong className="text-dark">{order.user_name}</strong>
                <strong className="text-dark">{order.user_phone_number}</strong>
                <strong className="text-dark">
                  {modifyTime(order.created_at)}
                </strong>
                <strong className="text-dark">{order.status}</strong>
                <strong className="text-dark">Rp.{order.total_payment}</strong>
              </div>
            </div>
            <button
              className="btn btn-sm btn-success mt-3"
              onClick={updateStatus}
            >
              Update pesanan
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Produk</h3>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Gambar</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderproduct.map((order, index) => {
                    index += 1;
                    return (
                      <tr key={index}>
                        <td scope="row">{index}</td>
                        <td>
                          <img
                            src={`/storage/${order.product.image}`}
                            alt={order.product.name}
                            width={30}
                            height={30}
                            className="rounded image-fit"
                          />
                        </td>
                        <td>{order.product.name}</td>
                        <td>{order.product.price - order.product.discounts}</td>
                        <td>{order.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Toast message={flash.message && flash.message} />
    </DashboardLayout>
  );
}

export default DetailOrder;
