<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Files;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class messageController extends Controller
{
    public function index(){
        //Geting All Messages
        $message = Message::with(['File', 'User'])->get();
        return $message;
    }

    public function show(){
      return view('chat');
    }

    public function user(){
      $user = Auth::user();
      return $user;
    }
}
