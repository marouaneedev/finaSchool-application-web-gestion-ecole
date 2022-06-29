<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function Message(Request $request){
       $result = Message::insert([
            'Email'=>$request ->Email,
            'Message'=>$request ->Message,

        ]);

if ($result){
    return'data inserted sucessfuly';

}else{
    return'data is not inserted';
}       
    }
}
