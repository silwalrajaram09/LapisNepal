<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    //
     protected $fillable = ['name','role','initials','location','bio','photo','is_active','sort_order'];
    protected $casts = ['is_active' => 'boolean'];

}
