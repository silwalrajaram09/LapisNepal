<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $table = 'settings';
    
    protected $fillable = [
        'site_name',
        'site_description',
        'contact_email',
        'contact_phone',
        'address',
        'facebook_url',
        'twitter_url',
        'instagram_url',
        'maintenance_mode',
        'logo',
        'favicon',
    ];
    
    protected $casts = [
        'maintenance_mode' => 'boolean',
    ];
}