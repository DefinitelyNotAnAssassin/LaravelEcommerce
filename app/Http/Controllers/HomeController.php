<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product; 
use App\Models\ProductCategory;

class HomeController extends Controller
{
    
    public function index()
    {

        $products = Product::all();

        return Inertia::render('LandingPage', [
            'products' => $products
        ]);
    }
}
