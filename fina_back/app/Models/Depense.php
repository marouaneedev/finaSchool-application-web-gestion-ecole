<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Depense extends Model
{
    use HasFactory;

    protected $fillable = ['montantPaye', 'typePaiment', 'employee_id'];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
