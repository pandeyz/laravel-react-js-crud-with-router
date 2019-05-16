<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $projects = Employee::orderBy('id', 'asc')
                            ->get();

        return $projects->toJson();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'empFname'    => 'required',
            'empLname'    => 'required',
            'empPosition' => 'required',
            'empEmail'    => 'required',
            'empOfficeLocation' => 'required',
            'empJoiningDate'    => 'required',
            'empAge'      => 'required',
            'empSalary'   => 'required',
            'empStatus'   => 'required'
        ]);

        $employee = Employee::create([
            'first_name'  => $validatedData['empFname'],
            'last_name'   => $validatedData['empLname'],
            'position'    => $validatedData['empPosition'],
            'email'       => $validatedData['empEmail'],
            'office'      => $validatedData['empOfficeLocation'],
            'start_date'  => date('Y-m-d', strtotime($validatedData['empJoiningDate'])),
            'age'         => $validatedData['empAge'],
            'salary'      => $validatedData['empSalary'],
            'status'      => $validatedData['empStatus']
        ]);

        return $employee->toJson();
    }

    public function show($id)
    {
        $project = Employee::find($id);

        return $project->toJson();
    }

    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'empFname'    => 'required',
            'empLname'    => 'required',
            'empPosition' => 'required',
            'empEmail'    => 'required',
            'empOfficeLocation' => 'required',
            'empJoiningDate'    => 'required',
            'empAge'      => 'required',
            'empSalary'   => 'required',
            'empStatus'   => 'required'
        ]);

        $employee = Employee::where(['id' => $request->get('empId')])
        ->update([
            'first_name'  => $validatedData['empFname'],
            'last_name'   => $validatedData['empLname'],
            'position'    => $validatedData['empPosition'],
            'email'       => $validatedData['empEmail'],
            'office'      => $validatedData['empOfficeLocation'],
            'start_date'  => date('Y-m-d', strtotime($validatedData['empJoiningDate'])),
            'age'         => $validatedData['empAge'],
            'salary'      => $validatedData['empSalary'],
            'status'      => $validatedData['empStatus']
        ]);

        if( $employee )
        {
            return response()->json(['msg' => 'Employee Updated successfully']);
        }
        else
        {
            return response()->json(['msg' => 'Some error in update']);
        }
    }

    public function delete($empId)
    {
        if( Employee::where(['id' => $empId])->delete() )
        {
            return response()->json(['msg' => 'Employee Deleted successfully']);
        }
        else
        {
            return response()->json(['msg' => 'Some error in delete']);
        }
    }
}
