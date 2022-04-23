<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Records;

class Crud extends Controller
{
    function insert(REQUEST $req){
        $record = new Records;
        $record->name = $req->input("name");
        $record->phone = $req->input("tel");
        $save = $record->save();
        if($save){
            return "Data saved";
        }else{
            return "Sorry the data cannot be inserted";
        }
    }
    function update(REQUEST $req){
        $rec = Records::find($req->input("id"));
        $rec->name = $req->input("name");
        $rec->phone = $req->input("tel");
        $save = $rec->save();
        if($save){
            return "Data saved";
        }else{
            return "Sorry the data cannot be Updated";
        }
    }
    function delete(REQUEST $req){
        $status  = Records::destroy($req->id);
        echo $status;
    }
    function all(){
        return Records::all();
    }
}
