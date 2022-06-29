<?php

namespace App\Http\Controllers\EditLanding;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\EditLanding\Service;

class FormationController extends Controller
{
    //
    public function Formation(){
        $result= Service::all();
        return $result;
    }
}
