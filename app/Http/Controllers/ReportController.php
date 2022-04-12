<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use App\Models\Order;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Report');
    }

    public function show($year, $month)
    {
        $incomePerDay = [];

        for ($i = 1; $i <= 31; $i++) {
            $income = Order::whereYear('created_at', $year)
                ->whereMonth('created_at', $month)
                ->whereDay('created_at', $i < 10 ? "0$i" : "$i")
                ->sum('total_payment');
            array_push($incomePerDay, $income);
        }

        $data = [
            'incomePerDay' => $incomePerDay,
            'month' => Carbon::createFromDate($year, $month)->translatedformat('F'),
            'year' => $year
        ];

        $pdf = Pdf::loadView('pdf.report', $data)->setPaper('A4');
        return $pdf->stream('report.pdf');
    }
}
