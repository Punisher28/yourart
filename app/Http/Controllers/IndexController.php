<?php

namespace App\Http\Controllers;

use App\Category;
use App\Products;
use App\SubCategory;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(){
        $categories = Category::with('childs')->where('parent_id', 0)->get();
        $products=Products::all();

        $collection = collect([1, 2, 3, 4, 5, 6, 7,8]);

        $collection->toArray();

        return view('index')->with('chunks',$products)->with('categories',$categories);
    }

}
