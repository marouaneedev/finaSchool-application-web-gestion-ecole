<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Revenu extends Model
{
    use HasFactory;

    protected $fillable = ['montantPaye', 'typePaiment', 'anneeScolaire','student_id'];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
