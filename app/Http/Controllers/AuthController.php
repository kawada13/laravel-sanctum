<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return response()->json([
                'user' => Auth::user()->name,
                'message' => 'ログイン成功'
            ], 200);
        }

        return response()->json([
            'message' => 'ログイン失敗'
        ], 500);

    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required'],
            'password' => ['required'],
        ]);

        DB::beginTransaction();
        try {
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password)
            ]);
            DB::commit();

            $credentials = $request->only('email', 'password');
            if (Auth::attempt($credentials)) {
                return response()->json([
                    'user' => Auth::user()->name,
                    'message' => '登録アンドログイン成功'
                ], 200);
            }
        }
        catch (\Exception $e) {
            DB::rollback();
            return response()->json([
                'message' => '失敗'
            ],500);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
    }
}
