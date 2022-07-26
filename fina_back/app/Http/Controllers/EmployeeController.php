<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $employee = Employee::with('depenses')->withSum('depenses as payrollAmount','montantPaye')->get();
        return $employee;
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $employee = new Employee();
        $employee-> fullName = $request-> fullName;
        $employee-> gender = $request-> gender;
        $employee-> dateOfBirthday = $request-> dateOfBirthday;
        $employee-> cin = $request-> cin;
        $employee-> address = $request-> address;
        $employee-> phoneNumber = $request-> phoneNumber;
        $employee-> email = $request-> email;
        $employee-> typeEmployee = $request-> typeEmployee;
        $employee-> typeWork = $request-> typeWork;

        $employee-> save();
        return $employee;
    }


    public function show($id)
    {
        $employee = Employee::find($id);
        return $employee;
    }


    public function edit(employee $employee)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $employee = Employee::findOrFail($request-> id);
        $employee-> fullName = $request-> fullName;
        $employee-> gender = $request-> gender;
        $employee-> dateOfBirthday = $request-> dateOfBirthday;
        $employee-> cin = $request-> cin;
        $employee-> address = $request-> address;
        $employee-> phoneNumber = $request-> phoneNumber;
        $employee-> email = $request-> email;
        $employee-> typeEmployee = $request-> typeEmployee;
        $employee-> typeWork = $request-> typeWork;

        $employee-> save();
        return $employee;
    }


    public function destroy($id)
    {
        $employee = Employee::destroy($id);
        return $employee;
    }
}
