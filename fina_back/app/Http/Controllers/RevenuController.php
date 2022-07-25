<?php

namespace App\Http\Controllers;

use App\Models\Revenu;
use Illuminate\Http\Request;

class RevenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $revenu = Revenu::all();
        return $revenu;
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
        $revenu = new Revenu();
        $revenu-> montantPaye = $request-> montantPaye;
        $revenu-> typePaiment = $request-> typePaiment;
        $revenu-> anneeScolaire = $request-> anneeScolaire;
        $revenu-> student_id = $request-> student_id;

        $revenu-> save();
        return $revenu;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Revenu  $revenu
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $revenu = Revenu::find($id);
        return $revenu;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Revenu  $revenu
     * @return \Illuminate\Http\Response
     */
    public function edit(Revenu $revenu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Revenu  $revenu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $revenu = Revenu::findOrFail($request-> id);
        $revenu-> montantPaye = $request-> montantPaye;
        $revenu-> typePaiment = $request-> typePaiment;
        $revenu-> anneeScolaire = $request-> anneeScolaire;

        $revenu-> save();
        return $revenu;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Revenu  $revenu
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $revenu = Revenu::destroy($id);
        return $revenu;
    }
}
