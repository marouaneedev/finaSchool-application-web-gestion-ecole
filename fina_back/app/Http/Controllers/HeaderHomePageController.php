<?php

namespace App\Http\Controllers;

use App\Models\HeaderHomePage;
use Illuminate\Http\Request;

class HeaderHomePageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $headerWdg = HeaderHomePage::all();
        return $headerWdg;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HeaderHomePage  $headerHomePage
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $headerWdg = HeaderHomePage::find($id);
        return $headerWdg;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HeaderHomePage  $headerHomePage
     * @return \Illuminate\Http\Response
     */
    public function edit(HeaderHomePage $headerHomePage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\HeaderHomePage  $headerHomePage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $headerWdg = HeaderHomePage::findOrFail($request-> id);
        $headerWdg-> imageHeader = $request-> imageHeader;
        $headerWdg-> titleHeader = $request-> titleHeader;
        $headerWdg-> textHeader = $request-> textHeader;
        $headerWdg-> buttonHeader = $request-> buttonHeader;

        $headerWdg-> save();
        return $headerWdg;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HeaderHomePage  $headerHomePage
     * @return \Illuminate\Http\Response
     */
    public function destroy(HeaderHomePage $headerHomePage)
    {
        //
    }
}
