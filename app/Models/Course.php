<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    //
   protected $fillable = ['title','slug','category','description','chips','modules','details','is_published','sort_order'];
    protected $casts = ['chips' => 'array', 'modules' => 'array', 'details' => 'array', 'is_published' => 'boolean'];


}
