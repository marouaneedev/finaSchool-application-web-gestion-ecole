<?php

namespace App\Http\Controllers;

use App\Models\NavbarHomePage;
use Illuminate\Http\Request;

class NavbarHomePageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $navbarWdg = NavbarHomePage::all();
        return $navbarWdg;
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

        $navbarWdg = new NavbarHomePage();
        $navbarWdg->imageNavbar = $request->imageNavbar;

        $navbarWdg->save();
        return $navbarWdg;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\NavbarHomePage  $navbarHomePage
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $navbarWdg = NavbarHomePage::find($id);
        return $navbarWdg;
    }


    /**
     * Display the specified resource.
     *
     */

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\NavbarHomePage  $navbarHomePage
     * @return \Illuminate\Http\Response
     */
    public function edit(NavbarHomePage $NavbarHomePage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\NavbarHomePage  $navbarHomePage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        if ($request->hasFile('image')) {
            $image = $request->file('image');

            $imageNavbar = time() . '.' . $image->getClientOriginalExtension();
            $image->move('images/', $imageNavbar);
            NavbarHomePage::create(['imageNavbar' => $imageNavbar]);
            return response()->json(['succsess' => 'uploades successefly']);
        }
        return response()->json(['plz try again']);

        // $request->validate([
        //     'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        // ]);

        // $imageName = time().'.'.$request->image->extension();

        // $request->image->move(public_path('images'), $imageName);

        // /*
        //     Write Code Here for
        //     Store $imageName name in DATABASE from HERE
        // */

        // return back()
        //     ->with('success','You have successfully upload image.')
        //     ->with('image',$imageName);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\NavbarHomePage  $navbarHomePage
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $navbarWdg = NavbarHomePage::destroy($id);
        return $navbarWdg;
    }
}
