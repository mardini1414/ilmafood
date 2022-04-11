import React, { useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import CardDashboard from '../../components/CardDashboard';
import Chart from '../../components/Chart';
import formatNumber from '../../helper/formatnumber';

function Dashboard(props) {
  const {
    total_income,
    total_transactions,
    product,
    user,
    income_per_month,
    transaction_per_month,
  } = props;
  return (
    <DashboardLayout>
      <div className="col-12 p-2 d-flex gap-4">
        <CardDashboard
          background={'bg-warning'}
          title={'Transaksi'}
          value={total_transactions}
        />
        <CardDashboard
          background={'bg-primary'}
          title={'Total Pemasukan'}
          value={formatNumber(total_income)}
        />
        <CardDashboard
          background={'bg-success'}
          title={'Produk'}
          value={product}
        />
        <CardDashboard
          background={'bg-danger'}
          title={'Pengguna'}
          value={user}
        />
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <Chart
            title="Grafik pendapatan perbulan"
            data={income_per_month}
            type="Bar"
            backgroundColor="rgba(0, 0, 255, 0.5)"
          />
        </div>
        <div className="col-6">
          <Chart
            title="Grafik transaksi perbulan"
            data={transaction_per_month}
            backgroundColor="rgba(255, 167, 38, 0.5)"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
