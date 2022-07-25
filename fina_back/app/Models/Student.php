<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = ['fullName', 'gender', 'dateOfBirthday', 'cin', 'address', 'phoneNumber', 'email', 'formation', 'yearOfFormation', 'totatAmount', 'payrollAmount', 'typePayment'];

    public function revenus()
    {
        return $this->hasMany(Revenu::class);
    }

}
