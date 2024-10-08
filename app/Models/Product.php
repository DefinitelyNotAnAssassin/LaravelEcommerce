<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    protected $table = 'product';
    protected $primaryKey = 'product_id'; 
    protected $fillable = ['product_name', 'product_description', 'product_price', 'product_category'];
    


    use HasUuids;
}
