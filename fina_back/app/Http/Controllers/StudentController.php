<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{

    public function index()
    {
        $student = Student::with('revenus')->withSum('revenus as payrollAmount2','montantPaye')->get();
        return $student;
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $student = new Student();
        $student-> fullName = $request-> fullName;
        $student-> gender = $request-> gender;
        $student-> dateOfBirthday = $request-> dateOfBirthday;
        $student-> cin = $request-> cin;
        $student-> address = $request-> address;
        $student-> phoneNumber = $request-> phoneNumber;
        $student-> email = $request-> email;
        $student-> formation = $request-> formation;
        $student-> yearOfFormation = $request-> yearOfFormation;
        $student-> totatAmount = $request-> totatAmount;

        $student-> save();
        return $student;
    }



    public function storeWithRevenus(Request $request)
    {
        $student = new Student();
        $student-> fullName = $request-> fullName;
        $student-> totatAmount = $request-> totatAmount;
        // $student-> payrollAmount = $request-> payrollAmount;
        // $student-> typePayment = $request-> typePayment;

        $student-> save();
        return $student;
    }

    public function show($id)
    {
        $student = Student::find($id);
        return $student;
    }


    public function edit(Student $student)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $student = Student::findOrFail($request-> id);
        $student-> fullName = $request-> fullName;
        $student-> gender = $request-> gender;
        $student-> dateOfBirthday = $request-> dateOfBirthday;
        $student-> cin = $request-> cin;
        $student-> address = $request-> address;
        $student-> phoneNumber = $request-> phoneNumber;
        $student-> email = $request-> email;
        $student-> formation = $request-> formation;
        $student-> yearOfFormation = $request-> yearOfFormation;
        $student-> totatAmount = $request-> totatAmount;

        $student-> save();
        return $student;
    }


    public function destroy($id)
    {
        $student = Student::destroy($id);
        return $student;

    }
}
