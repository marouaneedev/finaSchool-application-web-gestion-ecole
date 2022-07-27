<?php

namespace App\Http\Controllers;

use App\Models\Achat;
use Illuminate\Http\Request;

class AchatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $achat = Achat::all();
        return $achat;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $achat = new Achat();
        $achat-> idArticle = $request-> idArticle;
        $achat-> nomArticle = $request-> nomArticle;
        $achat-> nomFrss = $request-> nomFrss;
        $achat-> teleFrss = $request-> teleFrss;
        $achat-> prixDachat = $request-> prixDachat;

        $achat-> save();
        return $achat;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Achat  $achat
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $achat = Achat::find($id);
        return $achat;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Achat  $achat
     * @return \Illuminate\Http\Response
     */
    public function edit(Achat $achat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Achat  $achat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $achat = Achat::findOrFail($request-> id);
        $achat-> idArticle = $request-> idArticle;
        $achat-> nomArticle = $request-> nomArticle;
        $achat-> nomFrss = $request-> nomFrss;
        $achat-> teleFrss = $request-> teleFrss;
        $achat-> prixDachat = $request-> prixDachat;

        $achat-> save();
        return $achat;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Achat  $achat
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $achat = Achat::destroy($id);
        return $achat;
    }
}
