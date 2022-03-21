<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Login');
    }

    public function store(LoginRequest $request)
    {
        if (Auth::attempt($request->all())) {
            if (Auth::user()->role == 'admin') {
                return redirect('/dashboard');
            }
            return redirect('/');
        }

        return back()->with('message', 'maaf email atau password yang anda masukan salah');
    }
}
