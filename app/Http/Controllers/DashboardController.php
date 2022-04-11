<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;

class DashboardController extends Controller
{
    public function index()
    {
        $totalIncome = Order::where('status', 'diterima')->sum('total_payment');
        $totalTransaction = Order::count('id');
        $user = User::where('id', '>', 1)->count('id');
        $product = Product::count('id');
        $months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        $incomePerMonth = [];
        $transactionPerMonth = [];

        foreach ($months as $month) {
            $income = Order::whereYear('created_at', date('Y'))->whereMonth('created_at', $month)->sum('total_payment');
            $transaction = Order::whereYear('created_at', date('Y'))->whereMonth('created_at', $month)->sum('id');
            array_push($incomePerMonth, $income);
            array_push($transactionPerMonth, $transaction);
        }

        $data = [
            'total_income' => $totalIncome,
            'total_transactions' => $totalTransaction,
            'product' => $product,
            'user' => $user,
            'transaction_per_month' => $transactionPerMonth,
            'income_per_month' => $incomePerMonth,
            'test' => date('d')
        ];

        return Inertia::render('Admin/Dashboard', $data);
    }

    public function report()
    {
        $incomePerDay = [];

        for ($i = 1; $i <= 31; $i++) {
            $income = Order::whereMonth('created_at', date('m'))->whereDay('created_at', $i < 10 ? "0$i" : "$i")->sum('total_payment');
            array_push($incomePerDay, $income);
        }

        $month = Carbon::parse(date('M'))->translatedFormat('F');

        $pdf = Pdf::loadView('pdf.report', compact('incomePerDay', 'month'))->setPaper('A4');
        return $pdf->stream('report.pdf');
    }
}
