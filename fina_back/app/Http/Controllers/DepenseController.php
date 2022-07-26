<?php

namespace App\Http\Controllers;

use App\Models\Depense;
use Illuminate\Http\Request;

class DepenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $depense = Depense::all();
        return $depense;
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
        $depense = new Depense();
        $depense-> montantPaye = $request-> montantPaye;
        $depense-> typePaiment = $request-> typePaiment;
        $depense-> employee_id = $request-> employee_id;

        $depense-> save();
        return $depense;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Depense  $depense
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $depense = Depense::find($id);
        return $depense;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Depense  $depense
     * @return \Illuminate\Http\Response
     */
    public function edit(Depense $depense)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Depense  $depense
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $depense = Depense::findOrFail($request-> id);
        $depense-> montantPaye = $request-> montantPaye;
        $depense-> typePaiment = $request-> typePaiment;

        $depense-> save();
        return $depense;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Depense  $depense
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $depense = Depense::destroy($id);
        return $depense;
    }
}
