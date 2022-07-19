<?php

namespace App\Http\Controllers;

use App\Models\inscreption;
use Illuminate\Http\Request;

class inscreptionController extends Controller
{

    public function index()
    {
        $inscr = inscreption::all();
        return $inscr;
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $inscr = new inscreption();
        $inscr-> email = $request-> email;
        $inscr-> firstName = $request-> firstName;
        $inscr-> lastName = $request-> lastName;
        $inscr-> city = $request-> city;
        $inscr-> phoneNumber = $request-> phoneNumber;

        $inscr-> save();

        // response()->json([
        //     'status' => 200,
        //     'message' => 'Inscreption Envoyer',
        // ]);
        return $inscr;
    }


    public function show($id)
    {
        $inscr = inscreption::find($id);
        return $inscr;
    }


    public function edit(inscreption $inscreption)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $inscr = inscreption::findOrFail($request-> id);
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
        $inscr = inscreption::destroy($id);
        return $inscr;
    }
}
