<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $guard = [];

    public function User(){
    	return $this->belongsTo('App\Models\User');
    }

    public function File(){
        return $this->hasOne('App\Models\File');
    }
}
