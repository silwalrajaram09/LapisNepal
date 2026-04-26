<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TimetableEntry extends Model
{
    //
    protected $fillable = ['programme','level','days','time','batch_label','instructor','status','is_visible'];

}
