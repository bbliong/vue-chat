<?php

namespace App\Http\Controllers;


use Validator;
use App\Models\Message;
use App\Models\Files;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class messageController extends Controller
{
    public function index(){
        //Geting All Messages

        $message = Message::with(['File'])->get();
        return $message;
    }

    public function show(){
      return view('chat');
    }

    public function user(){
        //Confirmation user
        $user = Auth::user();
        return $user;
    }

    public function store(Request $request){
        $validator = Validator::make(request()->all(), [
           'message' => 'required',
        ]);

        if($validator->fails()) {
          return response()->json(["error"], 501);
        }

        $insert = Message::create([
           "text"=>$request->message,
           "user_id"=>Auth::id(),
        ]);

       if($insert){
            return response()->json($insert);
       }else{
            return response()->json(["error"], 501);
       }
    }

}
