<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewEnquiryNotification;

class EnquiryController extends Controller
{
    /**
     * Show the contact page.
     */
    public function index()
    {
        return Inertia::render('Contact');
    }

    /**
     * Store a new enquiry from the contact form.
     */
    public function store(Request $request)
    {
        // 1. Validate the incoming data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'programme' => 'required|string|max:255',
            'message' => 'nullable|string',
        ]);

        // 2. Save to the database
        $enquiry = Enquiry::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'programme' => $validated['programme'],
            'message' => $validated['message'],
            'status' => 'new', // Default status
        ]);

        // 3. Send Email Notification to Admin
        $adminEmail = env('ADMIN_EMAIL', 'admin@example.com'); // Change this in your .env
        Mail::to($adminEmail)->send(new NewEnquiryNotification($enquiry));

        // 4. Redirect back with a success message
        return redirect()->back()->with('success', 'Your enquiry has been sent successfully!');
    }
}
