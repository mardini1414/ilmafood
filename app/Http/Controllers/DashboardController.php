<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
}
