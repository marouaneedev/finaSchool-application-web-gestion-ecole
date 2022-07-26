<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = ['fullName', 'gender', 'dateOfBirthday', 'cin', 'address', 'phoneNumber', 'email', 'typeEmployee', 'typeWork'];

    public function depenses()
    {
        return $this->hasMany(Depense::class);
    }
}
