<?php

namespace App\Http\Controllers;

use App\Models\Staff;
use Inertia\Inertia;
use Illuminate\Http\Request;

class StaffController extends Controller
{
    public function index()
    {
        // Fetch all active staff, sorted by 'sort_order'
        $staffMembers = Staff::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        return Inertia::render('About/Staff', [
            'staffMembers' => $staffMembers
        ]);
    }
}
