<?php

namespace App\Http\Controllers;

use App\Models\Inscreption;
use Illuminate\Http\Request;

class InscreptionController extends Controller
{

    public function index()
    {
        $inscr = Inscreption::all();
        return $inscr;
    }


    public function create()
    {
        //
    }


    public function store(Request $request) {

        $inscr = new Inscreption();
        $inscr-> email = $request-> email;
        $inscr-> firstName = $request-> firstName;
        $inscr-> lastName = $request-> lastName;
        $inscr-> city = $request-> city;
        $inscr-> phoneNumber = $request-> phoneNumber;

        $inscr-> save();

        return response()->json([
            'status' => 200,
            'message' => 'Inscreption Envoyer',
        ]);

        return $inscr;
    }


    public function show($id)
    {
        $inscr = Inscreption::find($id);
        return $inscr;
    }


    public function edit(Inscreption $inscreption)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $inscr = Inscreption::findOrFail($request-> id);
        $inscr-> email = $request-> email;
        $inscr-> firstName = $request-> firstName;
        $inscr-> lastName = $request-> lastName;
        $inscr-> city = $request-> city;
        $inscr-> phoneNumber = $request-> phoneNumber;

        $inscr-> save();
        return $inscr;
    }


    public function destroy($id)
    {
        $inscr = Inscreption::destroy($id);
        return $inscr;
    }
}
