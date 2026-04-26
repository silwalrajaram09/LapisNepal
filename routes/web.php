<?php

use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', fn() => Inertia::render('Home'))->name('home');
Route::get('/about', fn() => Inertia::render('About/CompanyProfile'))->name('about');
Route::get('/staff', fn() => Inertia::render('About/Staff'))->name('staff');
Route::get('/licenses', fn() => Inertia::render('Licenses'))->name('licenses');
Route::get('/courses', fn() => Inertia::render('Courses/Index'))->name('courses');
Route::get('/courses/japanese', fn() => Inertia::render('Courses/Japanese'))->name('courses.japanese');
Route::get('/courses/ssw', fn() => Inertia::render('Courses/SSW'))->name('courses.ssw');
Route::get('/courses/titp', fn() => Inertia::render('Courses/TITP'))->name('courses.titp');
Route::get('/courses/internship', fn() => Inertia::render('Courses/Internship'))->name('courses.internship');
Route::get('/timetable', fn() => Inertia::render('TimeTable'))->name('timetable');
Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');

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

// ## Step 6 — Recommended folder structure
// ```
// resources/js/
// ├── app.jsx
// ├── Layouts/
// │   └── AppLayout.jsx        ← Navbar + Footer wrapper
// ├── Components/
// │   ├── Navbar.jsx
// │   ├── Footer.jsx
// │   └── WhatsAppButton.jsx   ← Floating WhatsApp CTA
// └── Pages/
//     ├── Home.jsx
//     ├── About/
//     │   ├── CompanyProfile.jsx
//     │   ├── OwnerMessage.jsx
//     │   ├── Staff.jsx
//     │   └── AdminStructure.jsx
//     ├── Courses/
//     │   ├── Index.jsx
//     │   ├── Japanese.jsx
//     │   ├── SSW.jsx
//     │   ├── TITP.jsx
//     │   └── Internship.jsx
//     ├── Licenses.jsx
//     ├── Timetable.jsx
//     └── Contact.jsx
