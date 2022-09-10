<?php

namespace App\Http\Controllers;

use App\Models\NavbarHomePage;
use Illuminate\Http\Request;
// use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
// use Illuminate\Support\Str;

class NavbarHomePageController extends Controller
{

    public function update(Request $request, $id)
    {
        $img = NavbarHomePage::findOrFail($request-> id);
        $img-> imageNavbar = $request-> imageNavbar;

        $img-> save();
        return $img;
    }


}
