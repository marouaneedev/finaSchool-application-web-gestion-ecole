<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class NavbarHomePage extends Model
{
    use HasFactory;

    protected $fillable = ['imageNavbar'];

    // /**
    //  * Get the user's first name.
    //  *
    //  * @return \Illuminate\Database\Eloquent\Casts\Attribute
    //  */
    // protected function name(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn ($value) => url('uploads/' . $value),
    //     );
    // }
}
