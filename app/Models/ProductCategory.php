<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{

    protected $table = 'ProductCategory';
    protected $fillable = ['category_name', 'category_description'];
    use HasFactory;
}
