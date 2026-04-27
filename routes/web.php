<?php

use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

use App\Http\Controllers\StaffController;
use App\Http\Controllers\TimetableController;
use App\Http\Controllers\EnquiryController;

Route::get('/', fn() => Inertia::render('Home'))->name('home');
Route::get('/about', fn() => Inertia::render('About/CompanyProfile'))->name('about');
Route::get('/staff', [StaffController::class, 'index'])->name('staff');
Route::get('/licenses', fn() => Inertia::render('Licenses'))->name('licenses');
Route::get('/courses', fn() => Inertia::render('Courses/Index'))->name('courses');
Route::get('/courses/japanese', fn() => Inertia::render('Courses/Japanese'))->name('courses.japanese');
Route::get('/courses/ssw', fn() => Inertia::render('Courses/SSW'))->name('courses.ssw');
Route::get('/courses/titp', fn() => Inertia::render('Courses/TITP'))->name('courses.titp');
Route::get('/courses/internship', fn() => Inertia::render('Courses/Internship'))->name('courses.internship');
Route::get('/timetable', [TimetableController::class, 'index'])->name('timetable');

Route::get('/contact', [EnquiryController::class, 'index'])->name('contact');
Route::post('/contact', [EnquiryController::class, 'store'])->name('contact.store');

// Route::get('/courses/{slug}', function ($slug) {
//     // Later: fetch from DB via CourseController
//     return Inertia::render('Courses/CourseShow', ['course' =>[
//         'slug' => $slug,
//         'title' => 'Sample Course Title',
//         'description' => 'This is a detailed description of the course, outlining its features and benefits to prospective students.',
//         'chip' => ['Japanese', 'SSW', 'TITP']
//     ]]);
// })->name('courses.show');
// ```

// ---

