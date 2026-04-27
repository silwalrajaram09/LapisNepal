<?php

namespace App\Http\Controllers;

use App\Models\TimetableEntry;
use Inertia\Inertia;
use Illuminate\Http\Request;

class TimetableController extends Controller
{
    public function index()
    {
        $entries = TimetableEntry::where('is_visible', true)
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('TimeTable', [
            'entries' => $entries
        ]);
    }
}
