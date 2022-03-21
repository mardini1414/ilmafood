<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    public function show()
    {
        $carts = Cart::with('product')->where('user_id', Auth::user()->id)->get();
        $total = 0;
        $shippingCost = 5000;

        foreach ($carts as $cart) {
            $price = ($cart['product']['price'] - $cart['product']['discounts']) * $cart['quantity'];
            $total += $price;
        }

        $data = [
            'carts' => $carts,
            'total' => $total,
            'shippingCost' => $shippingCost,
            'totalPayment' => $total + $shippingCost
        ];

        return Inertia::render('User/Cart', $data);
    }

    public function store(Request $request)
    {

        $carts = Cart::where('user_id', Auth::user()->id)->get(['product_id']);

        foreach ($carts as $cart) {
            if ($cart['product_id'] == $request->productId) {
                return back()->with('message', 'produk sudah ada di keranjang');
            }
        }

        Cart::create([
            'user_id' => Auth::user()->id,
            'product_id' => $request->productId,
            'quantity' => $request->quantity
        ]);

        return redirect('/cart');
    }

    public function destroyAll()
    {
        Cart::where('user_id', Auth::user()->id)->delete();

        return back();
    }
}
