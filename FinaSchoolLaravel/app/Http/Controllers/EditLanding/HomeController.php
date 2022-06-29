<?php

namespace App\Http\Controllers\EditLanding;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\EditLanding\Home;

class HomeController extends Controller
{
    //
    public function Home(){
        $result= Home::all();
        return $result;
    }
}
