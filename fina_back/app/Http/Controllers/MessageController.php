<?php

namespace App\Http\Controllers;

use App\Models\message;
use Illuminate\Http\Request;

class MessageController extends Controller
{

    public function index()
    {
        $msg = message::all();
        return $msg;
    }


    public function create()
    {

    }


    public function store(Request $request)
    {
        $msg = new message();
        $msg-> email = $request-> email;
        $msg-> message = $request-> message;

        $msg-> save();

        return response()->json([
            'status' => 201,
            'message' => 'Inscreption Envoyer',
        ]);

        return $msg;
    }


    public function show($id)
    {
        $msg = message::find($id);
        return $msg;
    }


    public function edit(message $message)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $msg = message::findOrFail($request-> id);
        $msg-> email = $request-> email;
        $msg-> message = $request-> message;

        $msg-> save();
        return $msg;
    }


    public function destroy($id)
    {
        $msg = message::destroy($id);
        return $msg;
    }
}
