import React, { useState, useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import { Head } from '@inertiajs/inertia-react';

function Report() {
  const [test, setTest] = useState('2022-01');
  useEffect(() => {
    console.log(test.slice(5, 7));
  });
  return (
    <DashboardLayout>
      <Head>
        <title>Laporan</title>
      </Head>
      <div className="col-4 py-2 d-grid gap-2">
        <label htmlFor="month">Pilih bulan dan tahun</label>
        <input
          id="month"
          type="month"
          value={test}
          className="form-control"
          onChange={(e) => setTest(e.target.value)}
        />
        <a
          href={`/dashboard/report/${test.slice(0, 4)}/${test.slice(5, 7)}`}
          className="btn btn-sm btn-success"
        >
          Buat Laporan
        </a>
      </div>
    </DashboardLayout>
  );
}

export default Report;
