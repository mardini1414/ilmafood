<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminOrderController extends Controller
{
    public function index()
    {
        $orders = Order::orderBy('id', 'desc')
            ->select(['id', 'user_name', 'user_phone_number', 'user_address', 'delivery_id', 'status', 'total_payment', 'created_at'])
            ->paginate(8);

        return Inertia::render('Admin/Order', compact('orders'));
    }

    public function show($id)
    {
        $order =  $orders = Order::orderBy('id', 'desc')->where('id', $id)
            ->with('orderproduct:id,quantity,product_id,order_id', 'orderproduct.product:id,name,price,discounts,image')
            ->select(['id', 'user_name', 'user_phone_number', 'user_address', 'delivery_id', 'status', 'total_payment', 'created_at'])
            ->first();

        return Inertia::render('Admin/DetailOrder', compact('order'));
    }

    public function update(Request $request, $id)
    {
        Order::where('id', $id)->update(['status' => $request->status]);

        return back()->with('message', 'pesanan berhasil diupdate');
    }
}
