<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderProduct;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::orderBy('id', 'desc')->where('user_id', Auth::user()->id)
            ->with('orderproduct:id,quantity,product_id,order_id', 'orderproduct.product:id,name,price,discounts,image')
            ->select(['id', 'user_name', 'user_phone_number', 'user_address', 'delivery_id', 'status', 'total_payment', 'created_at'])
            ->get();

        return Inertia::render('User/Order', compact('orders'));
    }

    public function store()
    {

        if (Auth::user()->phone_number == null || Auth::user()->address == null) {
            return back()->with('message', 'No Hp dan alamat belum di isi');
        }

        $carts = Cart::with('product')->where('user_id', Auth::user()->id)->get();
        $total = 0;
        $shippingCost = 5000;

        foreach ($carts as $cart) {
            $price = ($cart['product']['price'] - $cart['product']['discounts']) * $cart['quantity'];
            $total += $price;
        }

        Order::create([
            'delivery_id' => 'ILF-' . time(),
            'user_id' => Auth::user()->id,
            'user_name' => Auth::user()->name,
            'user_phone_number' => Auth::user()->phone_number,
            'user_address' => Auth::user()->address,
            'total_payment' => $total + $shippingCost
        ]);

        foreach ($carts as $cart) {
            OrderProduct::create([
                'product_id' => $cart['product']['id'],
                'order_id' => Order::orderBy('id', 'desc')->first()->id,
                'quantity' => $cart['quantity']
            ]);
        }

        Cart::where('user_id', Auth::user()->id)->delete();

        return redirect('/order');
    }
}
