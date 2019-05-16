<?php
// Model
namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
      /**
    * Indicates if the model should be timestamped.
    *
    * @var bool
    */
    public $timestamps = false;
    
    protected $fillable = ['first_name', 'last_name', 'position', 'email', 'office', 'start_date', 'age', 'salary', 'status'];
}
