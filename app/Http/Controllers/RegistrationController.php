<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistrationRequest;
use App\Models\User;
use Inertia\Inertia;

class RegistrationController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    public function store(RegistrationRequest $request)
    {
        User::create($request->all());
        return back()->with('message', 'Anda telah berhasil daftar, silahkan menuju halaman login untuk masuk');
    }
}
