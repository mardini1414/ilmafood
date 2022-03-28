<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminChatController extends Controller
{
    public function index()
    {
        $users = User::where('role', 'user')->latest()->get(['id', 'name', 'avatar']);

        return Inertia::render('Admin/AdminChat', compact('users'));
    }

    public function store(Request $request, $id)
    {
        $request->validate(['message' => 'required']);
        Message::create([
            'from_id' => Auth::user()->id,
            'to_id' => $id,
            'message' => $request->message
        ]);

        return back();
    }

    public function show($id)
    {
        $users = User::where('role', 'user')->latest()->get(['id', 'name', 'avatar']);
        $messages = Message::where([['from_id', '=', Auth::user()->id], ['to_id', '=', $id]])
            ->orWhere([['from_id', '=', $id], ['to_id', '=', Auth::user()->id]])
            ->get();

        $data = ['users' => $users, 'messages' => $messages, 'id' => $id];

        return Inertia::render('Admin/AdminChat', $data);
    }
}
