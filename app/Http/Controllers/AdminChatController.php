<?php

namespace App\Http\Controllers;

use App\Events\CreateMessage;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminChatController extends Controller
{
    private $users = [];

    public function __construct()
    {
        $messages = Message::where('from_id', '>', 1)->latest()->get(['from_id']);
        $temp = [];
        $users = [];

        foreach ($messages as $message) {
            if (!in_array($message, $temp)) {
                array_push($temp, $message);
                $user = User::where('id', $message['from_id'])->first(['id', 'name', 'avatar']);
                array_push($users, $user);
            }
        }

        $this->users = $users;
    }

    public function index()
    {
        $users = $this->users;

        return Inertia::render('Admin/Chat', compact('users'));
    }

    public function store(Request $request, $id)
    {
        $request->validate(['message' => 'required']);
        $message = Message::create([
            'from_id' => Auth::user()->id,
            'to_id' => $id,
            'message' => $request->message
        ]);

        CreateMessage::dispatch($message);

        return back();
    }

    public function show($id)
    {
        $messages = Message::where([['from_id', '=', Auth::user()->id], ['to_id', '=', $id]])
            ->orWhere([['from_id', '=', $id], ['to_id', '=', Auth::user()->id]])
            ->get();

        $data = [
            'users' => $this->users,
            'messages' => $messages,
            'id' => $id,
            'user_id' => Auth::user()->id
        ];

        return Inertia::render('Admin/Chat', $data);
    }
}
