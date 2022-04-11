<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\EditProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $products = Product::query()
            ->when($request->search ?? null, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })->orderBy('id', 'desc')
            ->paginate(12)
            ->withQueryString();
        return Inertia::render('Admin/Product', [
            'products' => $products,
            'search' => $request->search
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/CreateProduct');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateProductRequest $request)
    {
        Product::create([
            'name' => $request->name,
            'stock' => $request->stock,
            'price' => $request->price,
            'discounts' => $request->discounts,
            'category' => $request->category,
            'description' => $request->description,
            'image' => $request->file('image')->store('image/product')
        ]);
        return back()->with('message', 'produk berhasil di tambah');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::where('id', $id)->first();
        return Inertia::render('Admin/DetailProduct', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::where('id', $id)->first();
        return Inertia::render('Admin/EditProduct', ['product' => $product]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EditProductRequest $request, $id)
    {
        if ($request->file('image')) {
            $request->validate(['image' => 'required|file|image|max:50']);
            Storage::delete($request->oldImage);
            Product::where('id', $id)->update([
                'image' => $request->file('image')->store('image/product')
            ]);
        }

        Product::where('id', $id)->update($request->except(['image', 'oldImage', '_method']));
        return back()->with('message', 'produk berhasil di ubah');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        Storage::delete($request->image);
        Product::destroy($id);
        return back()->with('message', 'produk berhasil terhapus');
    }
}
