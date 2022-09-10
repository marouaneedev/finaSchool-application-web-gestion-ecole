<?php

namespace App\Http\Controllers;

use App\Models\NavbarHomePage;
use Illuminate\Http\Request;
// use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
// use Illuminate\Support\Str;

class NavbarHomePageController extends Controller
{

    public function store(Request $request)
    {
        Validator::make($request->all(), [
            // 'title' => 'required',
            'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ])->validate();

        $fileName = time() . '.' . $request->file->extension();
        $request->file->move(public_path('uploads'), $fileName);

        NavbarHomePage::create([
            // 'title' => $request->title,
            'imageNavbar' => $fileName
        ]);

        return redirect()->route('file.upload');
    }


    public function update(Request $request)
    {
        // if ($request->has('image')) {
        //     $file = $request->image;
        //     $image_name = time() . '_' . $file->getClientOriginalName();
        //     $file->move(public_path("uploads"), $image_name);

        //     $img = new NavbarHomePage();
        //     $img->$image_name = $request->$image_name;
        //     $img->save();

        //     return response()->json([
        //         'status' => 200,
        //         'message' => 'image uploaded',
        //     ]);

        //     return $img;
        // } else{
        //     return "error";
        // }



        // $image = new NavbarHomePage;
        // $image->title = $request->title;

        // if ($request->hasFile('image')) {

        //     $path = $request->file('image')->store('images');
        //     $image->url = $path;
        // }
        // $image->save();
        // return new ImageResource($image);


        $img = NavbarHomePage::findOrFail($request->id);
        $img->imageNavbar = $request->imageNavbar;

        $img->save();
        return $img;


        // if ($request->has('image')) {
        //     $this . info("hello from controller!");
        // } else {
        //     return "frfr";
        // }


        // $this . info("hello from controller!");
    }
}
