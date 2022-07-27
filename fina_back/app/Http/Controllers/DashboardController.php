<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Message;
use App\Models\Inscreption;
use App\Models\Student;
use Illuminate\Http\Request;

class DashBoardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $studentH = Student::where('gender', 'Homme')->count();
        $studentF = Student::where('gender', 'Femme')->count();
        $emplyees = Employee::count();
        $inscriptions = Inscreption::count();
        $messages = Message::count();
        $depense1 = Employee::query()->withSum('depenses as payrollAmount','montantPaye')->whereMonth('created_at', '=', 1)->get();
        $depense2 = Employee::query()->withSum('depenses as payrollAmount','montantPaye')->whereMonth('created_at', '=', 2)->get();
        $depense3 = Employee::query()->withSum('depenses as payrollAmount','montantPaye')->whereMonth('created_at', '=', 3)->get();
        $depense4 = Employee::query()->withSum('depenses as payrollAmount','montantPaye')->whereMonth('created_at', '=', 4)->get();
        $depense5 = Employee::query()->withSum('depenses as payrollAmount','montantPaye')->whereMonth('created_at', '=', 5)->get();
        $depense6 = Employee::query()->withSum('depenses as payrollAmount','montantPaye')->whereMonth('created_at', '=', 6)->get();
        $depense7 = Employee::query()->withSum('depenses as payrollAmount','montantPaye')->whereMonth('created_at', '=', 7)->get();
        $depense8 = Employee::query()->withSum('depenses as payrollAmount','montantPaye')->whereMonth('created_at', '=', 8)->get();
        $depense9 = Employee::query()->withSum('depenses as payrollAmount','montantPaye')->whereMonth('created_at', '=', 9)->get();
        $depense10 = Employee::query()->withSum('depenses as payrollAmount','montantPaye')->whereMonth('created_at', '=', 10)->get();
        $depense11 = Employee::query()->withSum('depenses as payrollAmount','montantPaye')->whereMonth('created_at', '=', 11)->get();
        $depense12 = Employee::query()->withSum('depenses as payrollAmount','montantPaye')->whereMonth('created_at', '=', 12)->get();
        $revenu1 = Student::query()->withSum('revenus as payrollAmount','montantPaye')->whereMonth('created_at', '=', 1)->get();
        $revenu2 = Student::query()->withSum('revenus as payrollAmount','montantPaye')->whereMonth('created_at', '=', 2)->get();
        $revenu3 = Student::query()->withSum('revenus as payrollAmount','montantPaye')->whereMonth('created_at', '=', 3)->get();
        $revenu4 = Student::query()->withSum('revenus as payrollAmount','montantPaye')->whereMonth('created_at', '=', 4)->get();
        $revenu5 = Student::query()->withSum('revenus as payrollAmount','montantPaye')->whereMonth('created_at', '=', 5)->get();
        $revenu6 = Student::query()->withSum('revenus as payrollAmount','montantPaye')->whereMonth('created_at', '=', 6)->get();
        $revenu7 = Student::query()->withSum('revenus as payrollAmount','montantPaye')->whereMonth('created_at', '=', 7)->get();
        $revenu8 = Student::query()->withSum('revenus as payrollAmount','montantPaye')->whereMonth('created_at', '=', 8)->get();
        $revenu9 = Student::query()->withSum('revenus as payrollAmount','montantPaye')->whereMonth('created_at', '=', 9)->get();
        $revenu10 = Student::query()->withSum('revenus as payrollAmount','montantPaye')->whereMonth('created_at', '=', 10)->get();
        $revenu11 = Student::query()->withSum('revenus as payrollAmount','montantPaye')->whereMonth('created_at', '=', 11)->get();
        $revenu12 = Student::query()->withSum('revenus as payrollAmount','montantPaye')->whereMonth('created_at', '=', 12)->get();
        return response()->json([
            'studentH'=>$studentH,
            'studentF'=>$studentF,
            'emplyees'=>$emplyees,
            'inscriptions'=>$inscriptions,
            'messages'=>$messages,
            'chart'=> [
                [
                    'name'=>"Janvier",
                    'Dépense'=>$depense1->sum('payrollAmount'),
                    'Revenu'=>$revenu1->sum('payrollAmount'),
                ],
                [
                    'name'=>"Février",
                    'Dépense'=>$depense2->sum('payrollAmount'),
                    'Revenu'=>$revenu2->sum('payrollAmount'),
                ],
                [
                    'name'=>"Mars",
                    'Dépense'=>$depense3->sum('payrollAmount'),
                    'Revenu'=>$revenu3->sum('payrollAmount'),
                ],
                [
                    'name'=>"Avril",
                    'Dépense'=>$depense4->sum('payrollAmount'),
                    'Revenu'=>$revenu4->sum('payrollAmount'),
                ],
                [
                    'name'=>"Mai",
                    'Dépense'=>$depense5->sum('payrollAmount'),
                    'Revenu'=>$revenu5->sum('payrollAmount'),
                ],
                [
                    'name'=>"Juin",
                    'Dépense'=>$depense6->sum('payrollAmount'),
                    'Revenu'=>$revenu6->sum('payrollAmount'),
                ],
                [
                    'name'=>"Juillet",
                    'Dépense'=>$depense7->sum('payrollAmount'),
                    'Revenu'=>$revenu7->sum('payrollAmount'),
                ],
                [
                    'name'=>"Août",
                    'Dépense'=>$depense8->sum('payrollAmount'),
                    'Revenu'=>$revenu8->sum('payrollAmount'),
                ],
                [
                    'name'=>"Septembre",
                    'Dépense'=>$depense9->sum('payrollAmount'),
                    'Revenu'=>$revenu9->sum('payrollAmount'),
                ],
                [
                    'name'=>"Octobre",
                    'Dépense'=>$depense10->sum('payrollAmount'),
                    'Revenu'=>$revenu10->sum('payrollAmount'),
                ],
                [
                    'name'=>"Novembre",
                    'Dépense'=>$depense11->sum('payrollAmount'),
                    'Revenu'=>$revenu11->sum('payrollAmount'),
                ],
                [
                    'name'=>"Décembre",
                    'Dépense'=>$depense12->sum('payrollAmount'),
                    'Revenu'=>$revenu12->sum('payrollAmount'),
                ]
            ],
        ]);
    }
}
