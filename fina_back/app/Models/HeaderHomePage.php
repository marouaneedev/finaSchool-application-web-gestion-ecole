<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeaderHomePage extends Model
{
    use HasFactory;

    protected $fillable = ['imageHeader', 'titleHeader', 'textHeader', 'buttonHeader'];

}