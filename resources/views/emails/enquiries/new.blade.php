<x-mail::message>
# New Student Enquiry Received

Hello,

A new enquiry has been submitted through the website contact form.

**Student Details:**
- **Name:** {{ $enquiry->name }}
- **Email:** {{ $enquiry->email }}
- **Phone:** {{ $enquiry->phone ?? 'Not provided' }}
- **Programme:** {{ $enquiry->programme }}

**Message:**
{{ $enquiry->message }}

<x-mail::button :url="config('app.url') . '/admin/enquiries/' . $enquiry->id">
View in Admin Panel
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
