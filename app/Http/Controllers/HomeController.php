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
        $products = Product::orderBy('id', 'desc')->paginate(4);

        if ($request->wantsJson()) {
            return $products;
        }

        Auth::user() && $carts = Cart::where('user_id', Auth::user()->id)->get(['id']);
        $data = [
            'products' => $products,
            'isEmptyCart' => Auth::user() ? count($carts) > 0 : false
        ];



        return Inertia::render('Home', $data);
    }

    public function show($id)
    {
        $data = Product::where('id', $id)->first();

        return Inertia::render('DetailProduct', $data);
    }
}
