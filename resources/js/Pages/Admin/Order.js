import React from 'react';
import DashboardLayout from './DashboardLayout';
import Pagination from '../../components/Pagination';
import { Link } from '@inertiajs/inertia-react';
import modifyTime from '../../helper/modifytime';

function Order(props) {
  const { data, links } = props.orders;

  return (
    <DashboardLayout>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Id pesanan</th>
            <th scope="col">Nama</th>
            <th scope="col">No telepon</th>
            <th scope="col">Status</th>
            <th scope="col">Tanggal/waktu</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order, index) => {
            index += 1;
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{order.delivery_id}</td>
                <td>{order.user_name}</td>
                <td>{order.user_phone_number}</td>
                <td>{order.status}</td>
                <td>{modifyTime(order.created_at)}</td>
                <td>
                  <Link
                    href={`/dashboard/order/${order.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    Lihat
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination links={links} />
    </DashboardLayout>
  );
}

export default Order;
