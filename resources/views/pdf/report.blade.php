<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <style>
    table,
    h1 {
      width: 100%;
      text-align: center;
    }

    table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
    }

  </style>
  <title>
    Document
  </title>
</head>

<body>
  <h1>LAPORAN PENDAPATAN</h1>
  <table>
    <tr>
      <th>
        No
      </th>
      <th>
        Tahun
      </th>
      <th>
        Bulan
      </th>
      <th>
        Tanggal
      </th>
      <th>
        Pendapatan
      </th>
    </tr>
    @foreach ($incomePerDay as $index => $value)
      <tr>
        <td>
          {{ $index + 1 }}
        </td>
        <td>
          {{ $year }}
        </td>
        <td>
          {{ $month }}
        </td>
        <td>
          {{ $index + 1 }}
        </td>
        <td>
          {{ $value }}
        </td>
      </tr>
    @endforeach
  </table>
</body>

</html>
