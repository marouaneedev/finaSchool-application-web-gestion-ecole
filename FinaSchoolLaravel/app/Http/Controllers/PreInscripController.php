<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PreInscrip;

class PreInscripController extends Controller
{
    //

    public function PreInscrip(Request $request){
        $resultat = PreInscrip::insert([
             'Email'=>$request ->Email,
             'First_Name'=>$request ->First_Name,
             'Last_Name'=>$request ->Last_Name,
             'City'=>$request ->City,
             'Phone_Number'=>$request ->Phone_Number,
 
         ]);
 
 if ($resultat){
     return'data inserted sucessfuly';
 
 }else{
     return'data is not inserted';
 }       
     }

}
