<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditProfileRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserController extends Controller
{
    public function show()
    {
        return Inertia::render('User/Profile', ['user' => Auth::user()]);
    }

    public function update(EditProfileRequest $request)
    {

        if ($request->file('avatar')) {
            $request->validate(['avatar' => 'required|file|image|max:50']);
            if ($request->oldAvatar != null) {
                Storage::delete($request->oldAvatar);
            }
            User::where('id', Auth::user()->id)->update([
                'avatar' => $request->file('avatar')->store('image/avatar')
            ]);
        }

        User::where('id', Auth::user()->id)->update($request->except(['avatar', 'oldAvatar', '_method']));
        return back();
    }
}
