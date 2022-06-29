<?php

namespace App\Http\Controllers\EditLanding;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\EditLanding\Service;

class ServiceController extends Controller
{
    //
    public function Service(){
        $result= Service::all();
        return $result;
    }
}
