<?php

namespace App\Http\Controllers;

use App\Events\CreateMessage;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function show()
    {
        $messages = Message::where([['from_id', '=', Auth::user()->id], ['to_id', '=', 1]])
            ->orWhere([['from_id', '=', 1], ['to_id', '=', Auth::user()->id]])
            ->get();
        return Inertia::render('User/Chat', ['messages' => $messages, 'user_id' => Auth::user()->id]);
    }

    public function store(Request $request)
    {
        $request->validate(['message' => 'required']);
        $message = Message::create([
            'from_id' => Auth::user()->id,
            'to_id' => 1,
            'message' => $request->message
        ]);

        CreateMessage::dispatch($message);

        return back();
    }
}
