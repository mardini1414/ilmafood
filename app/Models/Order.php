<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['delivery_id', 'user_id', 'total_payment'];

    public function orderproduct()
    {
        return $this->hasMany(OrderProduct::class);
    }
}
