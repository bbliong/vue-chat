<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\Files;
use Illuminate\Http\Request;

class messageController extends Controller
{
    public function index(){
        //Geting All Messages

        $message = Message::with(['File'])->get();
        return $message;
    }

    publici function show(){
      return view('chat');
    }
}
