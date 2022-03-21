<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    use HasFactory;

    protected $table = 'order_product';
    protected $fillable = ['user_id', 'product_id', 'order_id', 'quantity'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
