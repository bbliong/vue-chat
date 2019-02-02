<?php

namespace App\Http\Controllers;


use Validator;
use App\Helper\Helper;
use App\Models\Message;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\MessageTyping;
use App\Events\MessagePushed;


class messageController extends Controller
{
    public function index(){
        //Geting All Messages

        $message = Message::with(['File','user'])->get();
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

    public function typing(Request $request){
      event(new MessageTyping($request->status, Auth::user()));
        return response()->json(["Success"], 200);
    }

    public function store(Request $request){
        $validator = Validator::make(request()->all(), [
           'message' => 'required',
        ]);


        if($validator->fails()) {
          return response()->json(["error"], 501);
        }


        // if(isset($request->file))
        $insertMessage = Message::create([
           "text"=>$request->message,
           "user_id"=>Auth::id(),
        ]);



        if(isset($request->file)){
          $uploadedFile = $request->file('file');
          $name = Auth::id() . "_".Helper::generateRandomString(10) . "." . $request->file('file')->getClientOriginalExtension();
          $path = $uploadedFile->storeAs("public/files/", $name);

          $insertFile = File::Create([
              'message_id' => $insertMessage->id,
              'title' => $uploadedFile->getClientOriginalName(),
              'file' => "/storage/files/".$name
          ]);

          if($insertFile){
            $insert = Message::where('id', $insertMessage->id)->update([
              'file_id' => $insertFile->id
            ]);
          }

        }


       if($insertMessage){
            $data = Message::where('id',$insertMessage->id)->with(['File','user'])->first();
            event(new MessagePushed($data, Auth::user()));
            return response()->json($data);
       }else{
            return response()->json(["error"], 501);
       }
    }

}
