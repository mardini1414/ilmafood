<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::orderBy('id', 'desc')->paginate(6);
        $hotProduct = Product::where('stock', '<=', 10)->paginate(6);

        if ($request->wantsJson()) {
            return $products;
        }

        Auth::user() && $carts = Cart::where('user_id', Auth::user()->id)->get(['id']);
        $data = [
            'products' => $products,
            'hot_product' => $hotProduct,
            'user' => Auth::user() ? Auth::user()->name : false,
            'isEmptyCart' => Auth::user() ? count($carts) > 0 : false
        ];

        return Inertia::render('Home', $data);
    }

    public function show($id)
    {
        $data = Product::where('id', $id)->first();

        return Inertia::render('DetailProduct', $data);
    }

    public function search(Request $request)
    {
        if ($request->wantsJson()) {
            $products = Product::where('name', 'like', "%{$request->q}%")->paginate(6);
            return $products;
        }
        return Inertia::render('Search');
    }
}
