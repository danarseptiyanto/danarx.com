<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['images', 'title', 'slug', 'project-date', 'thumbnail', 'description', 'client', 'website', 'status', 'date-created'];
    protected $casts = [
        'images' => 'array',
    ];
}
